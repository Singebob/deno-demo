import { AutoInjectable, Content } from "https://deno.land/x/alosaur/mod.ts";
import { getCustomRepository } from 'https://denolib.com/denolib/typeorm/mod.ts';
import { ProductRepository } from './products.repository.ts';
import { Product } from "./products.entities.ts";

@AutoInjectable()
export class ProductService {
    private productRepository: ProductRepository;
    constructor() {
        this.productRepository = getCustomRepository(ProductRepository);
    }
    getAll() {
        return this.productRepository.find();
    }
    getById(id: string) {
        return this.productRepository.findOne(id)
    }

    newProduct(product: Product) {
        return this.productRepository.save(product)
    }

    async updateProduct(id: string, newProduct: Product) {
        const product = await this.productRepository.findOne(id);
        if(product)
            return this.productRepository.save(newProduct)
        return Content({libelle: 'id not Found', code: 'product.id.notfound'}, 404)
    }

    async removeProductById(id: string) {
        const product = await this.productRepository.findOne(id);
        if(product){
            return this.productRepository.remove(product) 
        }
        return Content({libelle: 'id not Found', code: 'product.id.notfound'}, 404)
    }
}