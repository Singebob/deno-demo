import { Controller, Get } from 'https://deno.land/x/alosaur/mod.ts';

@Controller('/products')
export class ProductController {
    @Get('')
    getAll() {
        return { id: 12, name: 'ouioui', price: 20.05 };
    }
}