import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BitcoinService } from './bitcoin.service';
import { HttpClientModule } from '@angular/common/http';
import { TimerService } from './timer.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [BitcoinService, TimerService],
})
export class AppModule {}
