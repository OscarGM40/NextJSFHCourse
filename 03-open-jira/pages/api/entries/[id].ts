import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../database';
import { Entry } from '../../../models';
import { Entry as IEntry } from '../../../interfaces';
import mongoose from 'mongoose';

type Data = { message: string } | IEntry;

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  const { id } = req.query;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: 'El Id no es válido' + id });
  }

  switch (req.method) {
    case 'PUT':
      return updateEntry(req, res);
    default:
      return res.status(400).json({ message: 'Endpoint no existe' });
  }
}
const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    await db.connect();
    const entry = await Entry.findById(req.query.id);
    if (!entry) {
      await db.disconnect();
      return res.status(404).json({ message: 'No existe la entrada' });
    }
    /* si viene una description o status lo actualizo,sino cojo el que ya estaba.Muy interesante.Fijate que tiparlo anteriormente es la clave */
    const { status = entry.status, description = entry.description } = req.body;

    const updatedEntry = await Entry.findByIdAndUpdate(
      req.query.id,
      { status, description },
      { new: true }
    );
    // await entry.save(); otra forma
    await db.disconnect();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return res.status(200).json(updatedEntry!);
  } catch (error) {
    await db.disconnect();
    console.log(error);
    return res.status(500).json({ message: 'Error al actualizar la entrada' });
  }
};
