import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { LazyLoadImageModule, scrollPreset } from 'ng-lazyload-image'; // <-- include scrollPreset
// import {
//   NgxSocialButtonModule,
//   SocialServiceConfig, 
// }from "ngx-social-button";
import { ShareButtonsModule } from '@ngx-share/buttons';
import { JwSocialButtonsModule } from 'jw-angular-social-buttons';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { AppComponent } from './app.component';
import { JqryxamplesComponent } from './jqryxamples/jqryxamples.component';
import { CheckboxgotitComponent } from './checkboxgotit/checkboxgotit.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AnalyticsCounterComponent } from './analytics-counter/analytics-counter.component';
import { SearchComponent } from './search/search.component';
import { SearcPipe } from './searc.pipe';
import { Es2019Component } from './es2019/es2019.component';
import { JsonformscompComponent } from './jsonformscomp/jsonformscomp.component';
import { ScrollingComponent } from './scrolling/scrolling.component';
import { RxjsplatformComponent } from './rxjsplatform/rxjsplatform.component';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';
// export function getAuthServiceConfigs() {
//   let config = new SocialServiceConfig()
//       .addFacebook("507829409739001")
//       .addGoogle("Your-Google-Client-Id")
//       .addLinkedIn("Your-LinkedIn-Client-Id");
//   return config;
// }
import { ReactiveFormsModule } from '@angular/forms';
import { FacebookModule } from 'ng2-facebook-sdk';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ParentComponent } from './parent/parent.component';
import { ChildcomopComponent } from './childcomop/childcomop.component';
import { DicodeComponent } from './dicode/dicode.component';
import { LazyloadComponent } from './lazyload/lazyload.component';
import { FilterComponent } from './filter/filter.component';
import { CaluclatorComponent } from './caluclator/caluclator.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { ObservablepipesComponent } from './observablepipes/observablepipes.component';
import { FilterPipe } from './filter.pipe';
import { ParamruteComponent } from './paramrute/paramrute.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { GrooceeryComponent } from './grooceery/grooceery.component';
import { PatchcompComponent } from './patchcomp/patchcomp.component';
import { LoadertutComponent } from './loadertut/loadertut.component';


@NgModule({
  declarations: [
    AppComponent,
    JqryxamplesComponent,
    CheckboxgotitComponent,
    HomepageComponent,
    AnalyticsCounterComponent,
    SearchComponent,
    SearcPipe,
    Es2019Component,
    JsonformscompComponent,
    ScrollingComponent,
    RxjsplatformComponent,
    SocialmediaComponent,
    ParentComponent,
    ChildcomopComponent,
    DicodeComponent,
    LazyloadComponent,
    FilterComponent,
    CaluclatorComponent,
    AddtocartComponent,
    ObservablepipesComponent,
    FilterPipe,
    ParamruteComponent,
    ProductListComponent,
    ProductDetailsComponent,
    GrooceeryComponent,
    PatchcompComponent,
    LoadertutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng4LoadingSpinnerModule,
    HttpClientModule,
    JwSocialButtonsModule,
    // NgxSocialButtonModule,
    ReactiveFormsModule,
    ShareButtonsModule.withConfig({
      debug: true
    }),
    FacebookModule.forRoot(),
    FontAwesomeModule,
    LazyLoadImageModule.forRoot({
      preset: scrollPreset // <-- tell LazyLoadImage that you want to use scrollPreset
    })
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
