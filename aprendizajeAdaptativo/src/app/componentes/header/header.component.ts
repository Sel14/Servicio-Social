import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginbtn: boolean;
  logoutbtn: boolean;
constructor(){
  this.loginbtn = false;
  this.logoutbtn = true;
}

  /* constructor(private dataService: LoginServiceService) {
    dataService.getLoggedInName.subscribe(name => this.changeName(name));
    if (this.dataService.isLoggedIn()) {
      this.loginbtn = false;
      this.logoutbtn = true;
    }
    else {
      this.loginbtn = true;
      this.logoutbtn = false;
    }
  }
  */

  private changeName(name: boolean): void {
    this.logoutbtn = name;
    this.loginbtn = !name;
  }

  /*logout() {
    this.dataService.deleteToken();
    window.location.href = "";
  }*/

  ngOnInit(): void {
  }

}
