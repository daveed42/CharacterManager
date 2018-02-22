import { Component } from '@angular/core';

@Component({
  selector: 'sideBar',
  templateUrl: '../html/sideBar.component.html',
  styleUrls: ['../css/sideBar.component.css']
})
export class SideBarComponent {

    addCharInfo()
    {
        console.log("test");
    }
}
