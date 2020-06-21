import { Controller, Get, Param, Post, Body, Delete, Put } from 'https://deno.land/x/alosaur/mod.ts';
import { ProductService } from './products.services.ts'
import { Product } from './products.entities.ts';

@Controller('/products')
export class ProductController {
    constructor(private productService:ProductService) { }
    @Get('')
    getAll() {
        return this.productService.getAll();
    }

    @Get("/:id")
    getById(@Param('id') id:string ) {
        return this.productService.getById(id);
    }
    
    @Post('')
    newProduct(@Body(Product) product: Product){
        return this.productService.newProduct(product)
    }

    @Put('/:id')
    updateProduct(@Param('id') id:string, @Body(Product) newProduct: Product){
        return this.productService.updateProduct(id, newProduct)
    }

    @Delete('/:id')
    deleteProduct(@Param('id') id: string) {
        return this.productService.removeProductById(id)
    }
}