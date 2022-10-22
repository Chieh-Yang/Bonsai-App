import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonsaiDialogComponent } from './bonsai-dialog.component';

describe('BonsaiDialogComponent', () => {
  let component: BonsaiDialogComponent;
  let fixture: ComponentFixture<BonsaiDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonsaiDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BonsaiDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
