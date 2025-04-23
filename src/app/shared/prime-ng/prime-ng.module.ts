import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";



@NgModule({
    imports:[
        ButtonModule,
        TableModule,
        FormsModule 
    ],
    exports:[
        ButtonModule,
        TableModule,
        FormsModule 
    ],
    declarations:[

    ]
})

export class PrimeNgModule {

}