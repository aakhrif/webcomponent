import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef, CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { createCustomElement } from '@angular/elements';
import { CalculatorPopupComponent } from './calculator-popup/calculator-popup.component';

@NgModule({
  declarations: [
    CalculatorPopupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  entryComponents: [CalculatorPopupComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule implements DoBootstrap{
  constructor(private injector: Injector) { }
  
  ngDoBootstrap(): void {
    const customWebComponent = createCustomElement(CalculatorPopupComponent, {injector: this.injector});
    // prevent customElements initiliaze component several times !!
    if (!customElements.get('my-webcomponent')) customElements.define('my-webcomponent', customWebComponent);
  }
}
