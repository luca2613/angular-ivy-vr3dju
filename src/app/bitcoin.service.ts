import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Response {
  time: {
    updated: string;
  };
  bpi: {
    USD: {
      rate_float: number;
    };
    BRL: {
      rate_float: number;
    };
  };
}

@Injectable()
export class BitcoinService {
  current: Response;
  list: Array<Response> = [];
  vl_dolar: number;
  vl_real: number;
  vl_antigo;

  constructor(private http: HttpClient) {}

  update() {
    this.http
      .get<Response>('https://api.coindesk.com/v1/bpi/currentprice/BRL.json')
      .subscribe((data) => {
        this.current = data;
        this.vl_antigo =
          this.list.length > 0 ? this.list[this.list.length - 1] : null;

        if (this.vl_antigo) {
          if (
            this.current.bpi.USD.rate_float ==
              this.vl_antigo.bpi.USD.rate_float ||
            this.current.bpi.BRL.rate_float == this.vl_antigo.bpi.BRL.rate_float
          ) {
            this.list.push(this.current);
          }
        } else {
          this.list.push(this.current);
        }
      });
  }
}
