import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FormsModule } from '@angular/forms';
import { ForComponent } from './for/for.component';
import { FormComponent } from './form/form.component';
import { UsingpipesComponent } from './usingpipes/usingpipes.component';
import { nospace } from './pipes/nospace.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ForComponent,
    FormComponent,
    UsingpipesComponent,
    nospace
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
