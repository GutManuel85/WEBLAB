import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class ReloadRouteService {

  constructor(
    private router: Router,
  ) { }

  redirectTo(url: string): void {
    console.log("Redirect was called")
    // When skipLocationChange true, navigates without pushing a new state into history.
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([url]);
    });
  }
}
