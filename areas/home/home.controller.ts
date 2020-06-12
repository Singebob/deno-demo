import { Controller, Get } from 'https://deno.land/x/alosaur/mod.ts';

@Controller('/home')
export class HomeController {
    @Get('/json')
    json() {
        return { text: 'test' };
    }
}