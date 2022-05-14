import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../../database';
import { Entry as IEntry } from '../../../../interfaces';
import { Entry } from '../../../../models';

type Data = { message: string } | IEntry;

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  const { id } = req.query;
  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: 'El Id no es válido' + id });
  }

  switch (req.method) {
    case 'GET':
      return getEntry(req, res);
    case 'PUT':
      return updateEntry(req, res);
    case 'DELETE':
      return deleteEntry(req, res);
    default:
      return res.status(400).json({ message: 'Endpoint no existe' });
  }
}

const getEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    await db.connect();

    const { id } = req.query;
    const entry = await Entry.findById(id);

    if (!entry) {
      await db.disconnect();
      return res.status(404).json({ message: 'No existe la entrada' });
    }

    await db.disconnect();
    return res.status(200).json(entry);
  } catch (error) {
    await db.disconnect();
    console.log(error);
    return res.status(400).json({ message: 'Error getting entry.' });
  }
};

const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await db.connect();

  const entry = await Entry.findById(req.query.id);

  if (!entry) {
    await db.disconnect();
    return res.status(404).json({ message: 'No existe la entrada' });
  }
  /* si viene una description o status lo actualizo,sino cojo el que ya estaba.Muy interesante.Fijate que tiparlo anteriormente es la clave */
  const { status = entry.status, description = entry.description } = req.body;

  try {
    const updatedEntry = await Entry.findByIdAndUpdate(
      req.query.id,
      { status, description },
      { runValidators: true, new: true }
    );
    // await entry.save(); otra forma
    await db.disconnect();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return res.status(200).json(updatedEntry!);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    await db.disconnect();
    console.log(error);
    return res.status(400).json({
      message: error.errors.status.message ?? 'Error updating entry.',
    });
  }
};

const deleteEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;

  try {
    await db.connect();
    const entryDBTodelete = await Entry.findByIdAndDelete(id);
    if (!entryDBTodelete) {
      await db.disconnect();
      return res
        .status(400)
        .json({ message: 'No hay entrada con ese id ' + id });
    }
    await db.disconnect();
    return res.status(200).json(entryDBTodelete);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    await db.disconnect();
    console.log(error);
    return res.status(400).json({
      message: error.errors.status.message ?? 'Error Deleting entry.',
    });
  }
};
