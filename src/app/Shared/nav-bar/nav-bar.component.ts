import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  buttonsDisabled: { [key: string]: boolean } = {
    home: false,
    task: false,
    notes: false,
    tiger: false,
    trash: false
  };

  constructor(private router: Router) {}

  disableButton(buttonName: string, event: Event) {
    if (!this.buttonsDisabled[buttonName]) {
      this.buttonsDisabled[buttonName] = true;

    // Aquí puedes personalizar la navegación para cada botón
    if (buttonName === 'task') {
      this.router.navigateByUrl('/task'); // Usar navigateByUrl para una URL absoluta
    } else if (buttonName === 'notes') {
      this.router.navigateByUrl('/note'); // Usar navigateByUrl para una URL absoluta
    }else if (buttonName === 'mood') {
      this.router.navigateByUrl('/mood'); // Usar navigateByUrl para una URL absoluta
    }
      event.preventDefault();
    }
  }
}
