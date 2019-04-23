import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { FruitsComponent } from './fruits/fruits.component';
import { FruitsService } from './fruits.service';
import { EmailComponent } from './email/email.component';
import { FormsModule } from '@angular/forms';
import { EmailService } from './email.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    FruitsComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [FruitsService,EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
