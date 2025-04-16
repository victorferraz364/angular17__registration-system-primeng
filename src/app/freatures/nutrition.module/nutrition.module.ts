import { NgModule } from "@angular/core";
import { NutritionPageComponent } from "./pages/nutrition.page/nutrition.page.component";
import { TableTestComponent } from "../../tests/table-test/table-test.component";

@NgModule({
    imports:[
        TableTestComponent
    ],
    declarations:[
        NutritionPageComponent
    ],
    exports:[
        NutritionPageComponent
    ]
})
export class NutritionModule {
    
}