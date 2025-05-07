import { NgModule } from "@angular/core";
import { SideMenuComponent } from "./components/side-menu/side-menu.component";
import { PrimeNgModule } from "../shared/prime-ng/prime-ng.module";
import { DeleteButtonComponent } from "./components/delete-button/delete-button.component";
import { ScrollerViewComponent } from "./components/scroller-view/scroller-view.component";

@NgModule({
    imports:[
        PrimeNgModule
    ],
    exports:[
        SideMenuComponent,
        DeleteButtonComponent,
        ScrollerViewComponent
    ],
    declarations:[
        SideMenuComponent,
        DeleteButtonComponent,
        ScrollerViewComponent
    ]
})
export class CoreModule {

}