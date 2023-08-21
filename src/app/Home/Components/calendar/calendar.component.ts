import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  // This is for to get de Current Date in
  currentDate: Date = new Date();

  // This is for to get the Actual Month
  currentMonth: number = this.currentDate.getMonth();

  // This is for to get the Actual Year
  currentYear: number = this.currentDate.getFullYear();

  // This array is for to iterate with a For loop and put in the Calendar 
  dayNames: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // This will have all the elements.
  // The (number | null)[][] Define the Type.
  // The Numbers of the Day will be in type Number and the Blank with null
  weeks: (number | null)[][] = [];

  // This is for to show the Correct month
  monthNames: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  constructor() {
    // Di of the Method.
    this.generateCalendar();
  }

  generateCalendar() {
    this.weeks = [];
    // This will get the Firts day of the Month
    const firstDayOfMonth = new Date(this.currentYear, this.currentMonth, 1).getDay();
    // This will get all the Days of the Next Month
    const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    // Define the Current day As 1.
    let currentDay = 1;

    // This is the Logic of the Calendar

    // The firstDayOfMonth = will count the days from 1 to 7.
    for (let week = 0; week < 6; week++) {
      // This will have the Days
      const days: (number | null)[] = [];
      for (let day = 0; day < 7; day++) {

        if (week === 0 && day < firstDayOfMonth) {
          days.push(null);

        } else if (currentDay > daysInMonth) {
          days.push(null);

        } else {
          days.push(currentDay);
          currentDay++;
        }
      }
      this.weeks.push(days);
    }
  }

  prevMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.generateCalendar();
  }

  nextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.generateCalendar();
  }
}
