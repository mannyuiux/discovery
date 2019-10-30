import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { IonTag } from "./ion-tags-input/ion-tag";
import { IonTagsInput } from "./ion-tags-input/ion-tags-input";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    ReactiveFormsModule,
  ],
  declarations: [
    IonTagsInput, IonTag,
  ],
  exports: [
    IonTagsInput, IonTag,
  ],
  entryComponents: [
    IonTagsInput, IonTag,
  ],
})
export class ComponentsModule {}
