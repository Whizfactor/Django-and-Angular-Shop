import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component.ts';
import { FooterComponent } from './footer/footer.component.ts';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent
  ]
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }