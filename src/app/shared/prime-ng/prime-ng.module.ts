import { NgModule } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";

@NgModule({
    imports:[
        ButtonModule,
        TableModule
    ],
    exports:[
        ButtonModule,
        TableModule
    ],
    declarations:[

    ]
})

export class PrimeNgModule {

}