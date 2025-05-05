import { NgModule } from "@angular/core";
import { NutritionPageComponent } from "./nutrition.page.component";
import { TableTestComponent } from "../../tests/table-test/table-test.component";
import { FeedRecordTableComponent } from "./components/feed-record-table/feed-record-table.component";
import { PrimeNgModule } from "../../shared/prime-ng/prime-ng.module";
import { CommonModule, DatePipe } from "@angular/common";
import { FeedRecordDialogComponent } from "./components/feed-record-dialog/feed-record-dialog.component";
import { HttpClientModule } from "@angular/common/http";
import { ButtonModule } from 'primeng/button';
import { CoreModule } from "../../core/core.module";


@NgModule({
    imports:[
        TableTestComponent,
        PrimeNgModule,
        DatePipe,
        CommonModule,
        HttpClientModule,
        ButtonModule,
        CoreModule

    ],
    declarations:[
        NutritionPageComponent,
        FeedRecordTableComponent,
        FeedRecordDialogComponent
    ],
    exports:[
        NutritionPageComponent,
        FeedRecordTableComponent, 
        FeedRecordDialogComponent,
        ButtonModule
      
    ]
})
export class NutritionModule {
    
}