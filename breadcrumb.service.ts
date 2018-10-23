import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BreadcrumbObject } from './breadcrumb-model';
import { Router } from '@angular/router';

@Injectable()

export class BreadcrumbService {

  private breadcrumbObject: BreadcrumbObject;
  private breadcrumbModel: BreadcrumbObject[];
  breadcrumbs: BehaviorSubject<BreadcrumbObject[]>;

  constructor(private router: Router) {

    this.breadcrumbObject = new BreadcrumbObject();
    //this.breadcrumbObject.displayText = 'Home';
    //this.breadcrumbObject.routeUrl = '/home';

    this.breadcrumbModel = new Array<BreadcrumbObject>();

    //this.breadcrumbModel.push(this.breadcrumbObject);

    this.breadcrumbs = new BehaviorSubject(this.breadcrumbModel);

  }

  //call on ngoninit of every component
  initBreadcrumb(displayText: string) {
    let breadcrumb = new BreadcrumbObject();
    breadcrumb.displayText = displayText;
    breadcrumb.routeUrl = this.router.url;

    this.breadcrumbModel.length = this.breadcrumbModel.findIndex((x) => x.displayText === displayText) !== -1 ?
      this.breadcrumbModel.findIndex((x) => x.displayText === displayText) :
      this.breadcrumbModel.length;

    this.addBreadcrumb(breadcrumb);
  }

  private addBreadcrumb(newBreadcrumb: BreadcrumbObject) {
    let currentBreadcrumb = this.breadcrumbModel.pop();
    if (currentBreadcrumb) {
      currentBreadcrumb.hasChildLink = true;
      this.breadcrumbModel.push(currentBreadcrumb);
    }
    newBreadcrumb.hasChildLink = false;
    this.breadcrumbModel.push(newBreadcrumb);
    this.breadcrumbs.next(this.breadcrumbModel);
  }
}
