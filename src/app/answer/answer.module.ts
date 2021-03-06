import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AnswerComponent} from './answer.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
    {path: '', component: AnswerComponent},
];

@NgModule({
    declarations: [
        AnswerComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
})
export class AnswerModule {
}
