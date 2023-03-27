import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { CreateRecordComponent } from './records/create-record.component';
import { CommonService } from './Services/common.service';

@NgModule({
  declarations: [
    HomeComponent,
    CreateRecordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CommonService],
  bootstrap: [HomeComponent]
})
export class AppModule { }
