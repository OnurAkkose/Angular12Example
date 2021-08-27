import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeFooterComponent } from './layout/footer/home-footer/home-footer.component';
import { HomeHeaderComponent } from './layout/header/home-header/home-header.component';

@NgModule({
  declarations: [
    HomeFooterComponent,
    HomeHeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
