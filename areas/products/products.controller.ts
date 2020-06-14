import { Controller, Get, AutoInjectable } from 'https://deno.land/x/alosaur/mod.ts';
import { ProductService } from './products.services.ts'

@Controller('/products')
export class ProductController {
    constructor(private productService:ProductService) { }
    @Get('')
    getAll() {
        return this.productService.getAll();
    }
}