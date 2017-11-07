import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  SELECTOR_LANGUGE_KEY = 'selectorLanguage';

  constructor() { }

  setSelectorLanguage(language: string) {
    localStorage.setItem(this.SELECTOR_LANGUGE_KEY, language);
  }

  getSelectorLanguage() {
    const langugage = localStorage.getItem(this.SELECTOR_LANGUGE_KEY);

    if (langugage === null) {
      return 'ja';
    } else {
      return langugage;
    }
  }

}
