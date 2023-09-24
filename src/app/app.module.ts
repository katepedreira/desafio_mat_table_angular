import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopComponent } from './top/top.component';
import { BottomComponent } from './bottom/bottom.component';
import { TableComponent } from "./table/table.component";



@NgModule({
    declarations: [
        AppComponent,
        TopComponent,
        BottomComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        TableComponent
    ]
})
export class AppModule { }
