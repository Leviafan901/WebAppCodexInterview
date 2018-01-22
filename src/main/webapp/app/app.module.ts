import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { TaskmanagerSharedModule, UserRouteAccessService } from './shared';
import { TaskmanagerAppRoutingModule} from './app-routing.module';
import { TaskmanagerHomeModule } from './home/home.module';
import { TaskmanagerAdminModule } from './admin/admin.module';
import { TaskmanagerAccountModule } from './account/account.module';
import { TaskmanagerEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        TaskmanagerAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        TaskmanagerSharedModule,
        TaskmanagerHomeModule,
        TaskmanagerAdminModule,
        TaskmanagerAccountModule,
        TaskmanagerEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class TaskmanagerAppModule {}
