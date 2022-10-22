import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Bonsai } from '../bonsai/bonsai'

@Component({
  selector: 'app-bonsai-dialog',
  templateUrl: './bonsai-dialog.component.html',
  styleUrls: ['./bonsai-dialog.component.css']
})
export class BonsaiDialogComponent implements OnInit {

  private backupBonsai: Partial<Bonsai> = {...this.data.bonsai};

  constructor(
    public dialogRef: MatDialogRef<BonsaiDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BonsaiDialogData
  ) {}

  ngOnInit(): void {
  }

  cancel(): void {
    this.data.bonsai.id = this.backupBonsai.id;
    this.data.bonsai.title = this.backupBonsai.title;
    this.data.bonsai.description = this.backupBonsai.description;
    this.data.bonsai.pictureLink = this.backupBonsai.pictureLink;
    this.dialogRef.close(this.data);
  }
}

export interface BonsaiDialogData {
  bonsai: Partial<Bonsai>;
  enableDelete: boolean;
}

export interface BonsaiDialogResult {
  bonsai: Bonsai;
  delete?: boolean;
}
