import {Component, OnInit} from '@angular/core';
import {DataService} from './core/data.service';
import {ArraySortPipe} from './shared/sortBy.pipe';
import {IUsers} from './shared/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private dataService: DataService, private pipe: ArraySortPipe) {}
  users: IUsers[] = [];
  pickedUser: IUsers;
  title = 'proofpoint';
  ngOnInit() {
    this.dataService.getUsers()
      .subscribe((users: IUsers[]) => this.users = users);
  }

  onSubmitted($event: IUsers): void {
    this.pickedUser = $event;
  }

  onDelete($event: IUsers): void {
    this.users = this.users.filter((user: IUsers) => {
      return user._id !== $event._id;
    });
  }

  onSave($event: IUsers): void {
    let existUser = false;
    this.users.map((user: IUsers) => {
      if(user._id === $event._id){
        existUser = true;
        user.first_name = $event.first_name;
        user.last_name = $event.last_name;
        user.phone_number = $event.phone_number;
        return user;
      }
    });
    if(!existUser){
      this.onAdd($event);
    }
  }

  onAdd($event: IUsers): void {
    this.users.push($event);
  }
}
