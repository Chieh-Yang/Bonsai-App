import { 
  Component, 
  OnInit,
  Input,
  Output,
  EventEmitter 
} from '@angular/core';

import { Bonsai } from './bonsai';

@Component({
  selector: 'app-bonsai',
  templateUrl: './bonsai.component.html',
  styleUrls: ['./bonsai.component.css']
})
export class BonsaiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() bonsai!: Bonsai;
  @Output() edit = new EventEmitter<Bonsai>();

}
