import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetaCloudComponent } from './components/meta-cloud/meta-cloud.component';

export let MetaCloudComponents = [MetaCloudComponent]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...MetaCloudComponents],
  exports: [...MetaCloudComponents],
  entryComponents: [...MetaCloudComponents]
})
export class MetaCloudModule { }
