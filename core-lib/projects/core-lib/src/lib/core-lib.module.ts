import { NgModule, ModuleWithProviders } from '@angular/core';
import { CoreLibComponent } from './core-lib.component';
import { ShowDirective } from './directive/show.directive';
import { TextHighLight } from './directive/text-higlight/text-higlight.directive';
import { FilterPipe } from './pipes/filter-pipe';
import { DropdownDirective } from './directive/dropdown/dropdown.directive';
import { ShortenPipe } from './pipes/shorten.pipe';
import { HttpClientModule } from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';


@NgModule({
  declarations: [
    CoreLibComponent,
    FilterPipe,
    ShortenPipe,
    ShowDirective,
    TextHighLight,
    DropdownDirective
  ],
  imports: [
    // BrowserModule,
    HttpClientModule
  ],
  providers:[
    
  ],
  exports: [
    CoreLibComponent,
    FilterPipe,
    ShortenPipe,
    ShowDirective,
    TextHighLight,
    DropdownDirective
  ]
})
export class CoreLibModule {
  // staticforRoot(conf: ModuleConfig): ModuleWithProviders{
  //   return{
  //     ngModule:CoreLibModule,
  //     providers:[{provide:CONFIG, useClass: conf}]
   
  //   };
   
  //  }
 }
