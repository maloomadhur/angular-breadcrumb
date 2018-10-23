import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../shared-module/components/breadcrumb/breadcrumb.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private breadcrumbService: BreadcrumbService) {
  }

  ngOnInit() {
    this.breadcrumbService.initBreadcrumb('Home')
  }
}
