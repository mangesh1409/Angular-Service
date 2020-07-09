import { Component, OnInit } from '@angular/core';
import { BatchDetailsService } from '../batch-details.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent implements OnInit {
  public data: any = [];
  haveData = false;

  constructor(private batchDetalis: BatchDetailsService) {}

  ngOnInit(): void {
    this.data = this.batchDetalis.GetBatchDetails();
  }
  getData(): void {
    this.haveData = true;
    this.data = this.batchDetalis.GetBatchDetails();
  }
}
