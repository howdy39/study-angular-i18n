import { Component } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  languageSelector;

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit() {
    this.languageSelector = {
      languages: [
        {code: 'ja', name: '日本語'},
        {code: 'en', name: 'English'},
      ],
      selected: this.localStorageService.getSelectorLanguage()
    };
  }

  selectLanguage() {
    this.localStorageService.setSelectorLanguage(this.languageSelector.selected);
    location.reload();
  }
}
