import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { DbServiceService } from './service/db-service.service';
import { SearchPipe } from './table/search.pipe';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import { OrderPipe } from './table/order.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TableComponent,
    SearchPipe,
    OrderPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [DbServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
