import { App } from 'https://deno.land/x/alosaur/mod.ts';
import { HomeArea } from './areas/home/home.area.ts'
import { ProductArea } from './areas/products/products.area.ts'

// Create alosaur application
const app = new App({
    areas: [HomeArea, ProductArea],
});

app.listen();