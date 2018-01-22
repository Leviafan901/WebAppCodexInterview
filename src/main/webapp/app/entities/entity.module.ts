import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TaskmanagerRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { TaskmanagerCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { TaskmanagerLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { TaskmanagerDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { TaskmanagerTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { TaskmanagerEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { TaskmanagerJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { TaskmanagerJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        TaskmanagerRegionMySuffixModule,
        TaskmanagerCountryMySuffixModule,
        TaskmanagerLocationMySuffixModule,
        TaskmanagerDepartmentMySuffixModule,
        TaskmanagerTaskMySuffixModule,
        TaskmanagerEmployeeMySuffixModule,
        TaskmanagerJobMySuffixModule,
        TaskmanagerJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TaskmanagerEntityModule {}
