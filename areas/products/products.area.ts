import { Area } from 'https://deno.land/x/alosaur/mod.ts';
import { ProductController } from './products.controller.ts'

@Area({
    controllers: [ProductController],
})
export class ProductArea {}
