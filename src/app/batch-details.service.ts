import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BatchDetailsService {

  constructor() { }

  GetBatchDetails()
  {
    return [
              {Name: 'PPA', Fees: 9000, Duration : '4 Month'},
              {Name: 'LB', Fees: 7500, Duration : '4 Month'},
              {Name: 'WEB', Fees: 2500, Duration : '3 Month'},
              {Name: 'Project', Fees: 4000, Duration : '3 Month'},
        ];
  }

}
