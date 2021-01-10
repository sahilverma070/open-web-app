import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModuleComponent } from './home-module/home-module.component';
import { RouterModule, Routes } from '@angular/router';
import { EligibilityCalculatorComponent } from './home-module/eligibility-calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BackToBusinessSectionComponent } from './home-module/back-to-business-section/back-to-business-section.component';
import { BoostYourBusinessSectionComponent } from './boost-your-business-section/boost-your-business-section.component';
import { SharedCardComponent } from './shared-card/shared-card.component';

const routes: Routes = [{
path: '',
component: HomeModuleComponent
}];

@NgModule({
  declarations: [HomeModuleComponent, EligibilityCalculatorComponent, BackToBusinessSectionComponent, BoostYourBusinessSectionComponent, SharedCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [HomeModuleComponent]
})
export class HomeModuleModule { }
