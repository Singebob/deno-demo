import { EntityRepository, Repository } from 'https://denolib.com/denolib/typeorm/mod.ts';
import { Product } from './products.entities.ts'


@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
}