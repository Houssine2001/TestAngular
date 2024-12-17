import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/modele/Menu';
import { CrudService } from 'src/services/crud.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {
  menu: Menu;
  menus: Menu[] = [];

  constructor(private crud: CrudService) {
    this.menu = new Menu();
  }


  ngOnInit(): void {

  }
 /* onSubmit(): void {
    this.menu.approuved = false;
    this.menu.mark = 0;
    this.menus.push({ ...this.menu });
    this.menu = new Menu(); // Reset the form
    console.log(this.menus);

  }*/


    onSubmit(menu:Menu){
      menu.approuved = false;
      menu.mark = 0;
      menu.reservations=[];
     this.crud.postMenus(menu).subscribe();
      
    }

 
}
