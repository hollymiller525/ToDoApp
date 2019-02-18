import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// loading the app module when the application is loaded - this is also known as the Route Module
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

