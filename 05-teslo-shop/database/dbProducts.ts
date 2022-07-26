import { db } from '.';
import { IProduct } from '../interfaces';
import { ProductModel } from '../models';

export const getProductBySlug = async (
  slug: string
): Promise<IProduct | null> => {
  await db.connect();
  const product = await ProductModel.findOne({ slug })
    .select('-updatedAt')
    .lean();
  await db.disconnect();

  if (!product) return null;
  // fijate como serializamos para que sea una deepcopy
  return JSON.parse(JSON.stringify(product));
};

export const getAllProductsSlugs = async (): Promise<
  Array<{ slug: string }>
> => {
  await db.connect();
  const slugs = await ProductModel.find().select('slug').lean();
  await db.disconnect();
  // retorna esto [{slug:''}]
  return slugs;
};

export const getProductsByTerm = async (
  term: string
): Promise<Array<IProduct>> => {
  await db.connect();
  
  const products = await ProductModel
  .find({$text: { $search: term}})
  .select('title images price inStock slug -_id')
  .lean();

  await db.disconnect();
  return products;
};

export const getAllProducts = async (
): Promise<Array<IProduct>> => {
  await db.connect();
  
  const products = await ProductModel
   .find()
   .select('title images price inStock slug -_id')
   .lean();

  await db.disconnect();
  return products;
};
