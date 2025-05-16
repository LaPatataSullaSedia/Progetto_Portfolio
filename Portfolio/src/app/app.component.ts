import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio';

  showCookieBox = true;

  toggleCookieBox() {
    this.showCookieBox = !this.showCookieBox;
  }
  settingsOpen = false;

  toggleSettings() {
    this.settingsOpen = !this.settingsOpen;
  }
  reloadPage() {
    window.location.reload();
  }
}
