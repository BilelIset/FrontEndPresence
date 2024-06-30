import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-download',
  template: `<a [href]="safeUrl" download>Click here to download the app</a>`
})
export class DownloadcomponentComponent {
  safeUrl: any;

  constructor(private sanitizer: DomSanitizer) {
    this.safeUrl = this.sanitizer.bypassSecurityTrustUrl('https://www.apirest.tech/downloads/app-release.apk');
  }
}
