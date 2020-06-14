import { AutoInjectable } from "https://deno.land/x/alosaur/mod.ts";
import { getCustomRepository } from 'https://denolib.com/denolib/typeorm/mod.ts';
import { ProductRepository } from './products.repository.ts';

@AutoInjectable()
export class ProductService {
    private productRepository: ProductRepository;
    constructor() {
        this.productRepository = getCustomRepository(ProductRepository);
    }
    getAll() {
        return this.productRepository.find();
    }
}