export class BreadcrumbObject {
  displayText: string;
  hasChildLink: boolean;
  routeUrl: string;  
  constructor() {
    this.displayText = "";
    this.hasChildLink = false;
    this.routeUrl = "";    
  }
}
