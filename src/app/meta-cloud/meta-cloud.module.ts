import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetaCloudComponent } from './components/meta-cloud/meta-cloud.component';

import { IDataItem } from './interfaces/data-item'
import { IComponentOptions } from './interfaces/options'

export { IDataItem } from './interfaces/data-item'
export { IComponentOptions } from './interfaces/options'

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
