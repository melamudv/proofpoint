import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {IUsers} from '../shared/interfaces';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss']
})
export class RightComponent implements OnInit, OnChanges  {
  @Input() pickedUser: IUsers;
  @Output() delete: EventEmitter<IUsers> = new EventEmitter<IUsers>();
  @Output() add: EventEmitter<IUsers> = new EventEmitter<IUsers>();
  @Output() save: EventEmitter<IUsers> = new EventEmitter<IUsers>();
  constructor() { }
  form = new FormGroup({
    full_name: new FormControl(null, [Validators.required]),
    telephone: new FormControl(null, [Validators.required]),
  });
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if(this.pickedUser){
      this.form.controls['full_name'].setValue(this.pickedUser?.first_name + ' ' + this.pickedUser?.last_name);
      this.form.controls['telephone'].setValue(this.pickedUser?.phone_number);
    }

  }

  onDelete(): void {
    this.delete.emit(this.pickedUser);
    this.clear();
  }

  addUser(): void {
    let fullName = this.form.get('full_name').value;
    let splited = fullName.split(" ");
    let sendData = {
      _id: ((Math.floor(100000 + Math.random() * 900000))).toString(),
      first_name: splited[0],
      last_name: splited[1],
      phone_number: this.form.get('telephone').value,
    };
    this.add.emit(sendData);
    this.clear();
  }

  onSave(): void {
    let fullName = this.form.get('full_name').value;
    let splited = fullName.split(" ");
    let sendData = {
      _id: this.pickedUser._id,
      first_name: splited[0],
      last_name: splited[1],
      phone_number: this.form.get('telephone').value,
    };
    this.save.emit(sendData);
    this.clear();
  }
  clear(): void {
    this.form.reset();
  }
}
