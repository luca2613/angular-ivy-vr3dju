import { Component, OnInit, VERSION } from '@angular/core';
import { BitcoinService } from './bitcoin.service';
import { TimerService } from './timer.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Tarefa 11 - Bitcoin';
  intervalo: number;

  constructor(
    public bitcoinService: BitcoinService,
    public timer: TimerService
  ) {
    this.timer.start(this.intervalo);
  }

  updateBitcoinRates() {
    this.bitcoinService.update();
  }

  ngOnInit() {}
}
