import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CardComponent } from './card/card.component';
import { RatingModule } from 'ngx-bootstrap/rating';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    RatingModule.forRoot(),
    FormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CardComponent,

  ]
})
export class SharedModule { }
