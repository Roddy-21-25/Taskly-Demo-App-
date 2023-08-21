import { Component } from '@angular/core';
import { format } from 'date-fns';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  currentDate: Date = new Date();

  DateFormat: string = format(this.currentDate, 'HH:mm');
}
