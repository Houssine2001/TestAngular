import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/modele/Menu';
import { CrudService } from 'src/services/crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listMenus!: Menu[];
  menu!: Menu;
  iduser:number=1;
  constructor(private crud:CrudService) { }

  ngOnInit(): void {
    this.menu = new Menu();

    //get all menus
    this.crud.getMenus().subscribe((data: Menu[]) => {
      this.listMenus = data;
    });
  }

  reserve(menu:Menu){
  
    menu.reservations.push(this.iduser);
    this.crud.updateMenu(menu).subscribe();
    }

}
