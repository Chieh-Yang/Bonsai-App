import { Component } from '@angular/core';
import { Bonsai } from './bonsai/bonsai';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { BonsaiDialogComponent } from './bonsai-dialog/bonsai-dialog.component';
import { BonsaiDialogResult } from './bonsai-dialog/bonsai-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bonsai-store';

  constructor(private dialog: MatDialog) {}

  bonsaiCollection: Bonsai[] = [
    {
      id: 1,
      title: 'Bonsai 1',
      description: 'Descrition of Boansai 1',
      pictureLink: 'https://images.pexels.com/photos/8913408/pexels-photo-8913408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      title: 'Bonsai 2',
      description: 'Descrition of Boansai 2',
      pictureLink: 'https://images.pexels.com/photos/8280957/pexels-photo-8280957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 3,
      title: 'Bonsai 3',
      description: 'Descrition of Boansai 3',
      pictureLink: 'https://images.pexels.com/photos/2149105/pexels-photo-2149105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  shoppingCart: Bonsai[] = [];

  addBonsai(): void {
    const dialogRef = this.dialog.open(
      BonsaiDialogComponent,
      {
        width: '270px',
        data: {
          bonsai: {},
        }
      }
    );
    dialogRef
      .afterClosed()
      .subscribe(
        (result: BonsaiDialogResult | undefined) => {
          if (!result) {
            return;
          }
          this.bonsaiCollection.push(result.bonsai);
        }
      )
  }

  editBonsai (list: 'bonsaiCollection' | 'shoppingCart', bonsai: Bonsai): void {
    const dialogRef = this.dialog.open(BonsaiDialogComponent, {
      width: "270px",
      data: {
        bonsai,
        enableDelete: true,
      },
    });
    dialogRef.afterClosed().subscribe(
      (result: BonsaiDialogResult|undefined) => {
        if (!result) {
          return;
        }
        const dataList = this[list];
        const bonsaiIndex = dataList.indexOf(bonsai);
        if (result.delete) {
          dataList.splice(bonsaiIndex, 1);
        } else {
          dataList[bonsaiIndex] = bonsai;
        }
      }
    )
  }

  drop(event: CdkDragDrop<Bonsai[]>): void {
    if (event.previousContainer === event.container) {
      return;
    } 
    if (!event.container.data || !event.previousContainer.data) {
      return;
    }
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }
}
