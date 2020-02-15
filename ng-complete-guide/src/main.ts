import { enableProdMode, NgZone } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import 'hammerjs';
import 'zone.js';
//import 'zone.js/dist/zone-error';
if (environment.production) {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule)
  .then(success => {

  })
  .catch(err => {
    console.error(err);
  });
