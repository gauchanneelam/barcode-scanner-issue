import { Component, OnInit } from "@angular/core";
import {RouterExtensions} from 'nativescript-angular/router'

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
    items: Array<Item>;
    
    constructor(private router: RouterExtensions) { }

    ngOnInit(): void {
    }
    openCamera(){
        this.router.navigate(["scanComponent"],
        {
            transition :{
                name:'slide'
            }
        });
    }
}
