import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <agm-map [latitude]="0" [longitude]="0" height="200">
	  <agm-marker [latitude]="0" [longitude]="0"></agm-marker>
	</agm-map>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'agm-ivy-demo';
}
