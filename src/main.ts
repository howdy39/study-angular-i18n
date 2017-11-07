import { enableProdMode, TRANSLATIONS, TRANSLATIONS_FORMAT } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { LocalStorageService } from './app/local-storage.service';


if (environment.production) {
  enableProdMode();
}

// use the require method provided by webpack
declare const require;
// we use the webpack raw-loader to return the content as a string

let storageService = new LocalStorageService();
const language = storageService.getSelectorLanguage();
console.log('main.ts:' + language);
const translations = require(`raw-loader!./locale/messages.${language}.xlf`);

platformBrowserDynamic().bootstrapModule(AppModule, {
  providers: [
    {provide: TRANSLATIONS, useValue: translations},
    {provide: TRANSLATIONS_FORMAT, useValue: 'xlf'}
  ]
}).catch(err => console.log(err));
