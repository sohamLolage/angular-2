import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyinfoComponent } from './myinfo.component';
import { CalculatorComponent } from './calculator.component';
import { EmployeeComponent } from './employee.component';
import { ProductComponent } from './product/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    MyinfoComponent,
    CalculatorComponent,
    EmployeeComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
