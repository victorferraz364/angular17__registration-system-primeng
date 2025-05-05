import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TableModule } from "primeng/table";
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';




@NgModule({
    imports: [
        ButtonModule,
        TableModule,
        FormsModule,
        DialogModule,
        InputTextModule,
        AvatarModule,
        CalendarModule,
        ConfirmDialogModule,
        ToastModule
    ],
    exports: [
        ButtonModule,
        TableModule,
        FormsModule,
        DialogModule,
        InputTextModule,
        AvatarModule,
        CalendarModule,
        ConfirmDialogModule,
        ToastModule
    ],
    declarations: [
    ],
    providers: [
        ConfirmationService,
        MessageService
    ]
})

export class PrimeNgModule {

}
