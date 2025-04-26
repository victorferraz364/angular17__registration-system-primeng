import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TableModule } from "primeng/table";
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';



@NgModule({
    imports: [
        ButtonModule,
        TableModule,
        FormsModule,
        DialogModule,
        InputTextModule,
        AvatarModule,
        CalendarModule
        
    ],
    exports: [
        ButtonModule,
        TableModule,
        FormsModule,
        DialogModule,
        InputTextModule,
        AvatarModule,
        CalendarModule
    ],
    declarations: [

    ]
})

export class PrimeNgModule {

}
