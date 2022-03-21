import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './admin-panel/user-list/user-list.component';
import {HttpClientModule} from "@angular/common/http";
import { PaginationComponent } from './admin-panel/pagination/pagination.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatPaginatorModule} from "@angular/material/paginator";

import { MatInputModule } from '@angular/material/input';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    MatPaginatorModule,
    MatInputModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
