import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
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
