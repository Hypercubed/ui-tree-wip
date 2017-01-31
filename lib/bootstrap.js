import 'reflect-metadata';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.ts';


export function bootstrap() {
    console.log('bootstrap');
    platformBrowserDynamic().bootstrapModule(AppModule);
}