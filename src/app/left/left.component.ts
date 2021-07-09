import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IUsers} from '../shared/interfaces';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent implements OnInit {
  @Input() users: IUsers[];
  @Output() submitted: EventEmitter<IUsers> = new EventEmitter<IUsers>();
  query: string;
  constructor() { }

  ngOnInit(): void {
  }

  checkUser(user: IUsers): void {
    this.submitted.emit(user);
  }
}
