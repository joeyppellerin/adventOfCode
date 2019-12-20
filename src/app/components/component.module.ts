import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [BrowserModule, CommonModule],
  declarations: [HomeComponent, NavBarComponent],
  exports: [HomeComponent, NavBarComponent]
})
export class ComponentModule { }
