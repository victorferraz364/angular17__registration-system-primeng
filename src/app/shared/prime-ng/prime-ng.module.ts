import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TableModule } from "primeng/table";
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';



@NgModule({
    imports: [
        ButtonModule,
        TableModule,
        FormsModule,
        DialogModule,
        InputTextModule,
        AvatarModule
        
    ],
    exports: [
        ButtonModule,
        TableModule,
        FormsModule,
        DialogModule,
        InputTextModule,
        AvatarModule
    ],
    declarations: [

    ]
})

export class PrimeNgModule {

}
