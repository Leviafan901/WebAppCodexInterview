import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TaskmanagerSharedModule } from '../../shared';
import {
    TaskMySuffixService,
    TaskMySuffixPopupService,
    TaskMySuffixComponent,
    TaskMySuffixDetailComponent,
    TaskMySuffixDialogComponent,
    TaskMySuffixPopupComponent,
    TaskMySuffixDeletePopupComponent,
    TaskMySuffixDeleteDialogComponent,
    taskRoute,
    taskPopupRoute,
} from './';

const ENTITY_STATES = [
    ...taskRoute,
    ...taskPopupRoute,
];

@NgModule({
    imports: [
        TaskmanagerSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        TaskMySuffixComponent,
        TaskMySuffixDetailComponent,
        TaskMySuffixDialogComponent,
        TaskMySuffixDeleteDialogComponent,
        TaskMySuffixPopupComponent,
        TaskMySuffixDeletePopupComponent,
    ],
    entryComponents: [
        TaskMySuffixComponent,
        TaskMySuffixDialogComponent,
        TaskMySuffixPopupComponent,
        TaskMySuffixDeleteDialogComponent,
        TaskMySuffixDeletePopupComponent,
    ],
    providers: [
        TaskMySuffixService,
        TaskMySuffixPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TaskmanagerTaskMySuffixModule {}
