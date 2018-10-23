import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from './breadcrumb.service';
import { BreadcrumbObject } from './breadcrumb-model';

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})

export class BreadcrumbComponent implements OnInit {

  breadcrumbs: BreadcrumbObject[];

  constructor(private breadcrumbService: BreadcrumbService) {
    this.breadcrumbs = new Array<BreadcrumbObject>();
  }

  ngOnInit(): void {
    this.breadcrumbService.breadcrumbs.subscribe((breadcrumbs) => {
      this.breadcrumbs = breadcrumbs;
    })
  }

}
