import { Component, OnInit } from '@angular/core';
import { BatchDetailsService } from '../batch-details.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  public data: any = [];
  sno = 0;
  haveData = false;

  constructor(private batchDetalis: BatchDetailsService) {}

  ngOnInit(): void {
    // this.data = this.batchDetalis.GetBatchDetails();
  }
  getData(): void {
    this.haveData = true;
    this.data = this.batchDetalis.GetBatchDetails();
  }
}
