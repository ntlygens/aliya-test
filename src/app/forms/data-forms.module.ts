import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';
import { AddFormComponent } from './add-form.component';

// import { FormsRoutingModule } from './forms-routing.module';

@NgModule({
  imports: [
    CommonModule,
    // FormsRoutingModule
  ],
  declarations: [FormsComponent, AddFormComponent],
  exports: [FormsComponent, AddFormComponent]
})
export class DataFormsModule { }
