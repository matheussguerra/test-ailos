import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ButtomComponent } from './shared/components/buttom/buttom.component';
import { SidenavComponent } from './shared/layout/sidenav/sidenav.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { ComponentsComponent } from './pages/components/components.component';
import { CardComponent } from './shared/components/card/card.component';
import { CardInfoComponent } from './shared/components/card-info/card-info.component';
import { InputMaskModule } from '@ngneat/input-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ButtomComponent,
    HomeComponent,
    SidenavComponent,
    HeaderComponent,
    ComponentsComponent,
    CardComponent,
    CardInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputMaskModule.forRoot({
      isAsync: false, // set to true if native input is lazy loaded
      inputSelector: 'input',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
