import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';

@NgModule({
    imports: [
        ButtonModule,
        TableModule,
        FormsModule,
        DialogModule,
        InputTextModule,
        AvatarModule,
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
