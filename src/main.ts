import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http'; // ✅ Importar HttpClient

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()] // ✅ Debe estar en providers
}).catch(err => console.error(err));
