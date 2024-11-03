import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import * as fullpage from 'fullpage.js';

@Component({
  selector: 'app-full-page-wrapper',
  templateUrl: './full-page-wrapper.component.html',
  styleUrls: ['./full-page-wrapper.component.scss']
})
export class FullPageWrapperComponent implements AfterViewInit, OnDestroy {
  fullpageInstance: any;

  ngAfterViewInit() {
    import('fullpage.js').then((fullpageModule) => {
      this.fullpageInstance = new fullpageModule.default('#fullpage', {
        autoScrolling: true,
        scrollHorizontally: true,
        navigation: true,
      });
    });
  }

  ngOnDestroy() {
    if (this.fullpageInstance) {
      this.fullpageInstance.destroy('all');
    }
  }
}
