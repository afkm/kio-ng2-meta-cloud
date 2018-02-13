import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetaCloudComponent } from './components/meta-cloud/meta-cloud.component';
import { MetaCloudItemsGroupComponent } from './components/meta-cloud-items-group/meta-cloud-items-group.component'

import { IDataItem } from './interfaces/data-item'
import { IComponentOptions } from './interfaces/options';
import { IEvent } from './interfaces/event';
import { IDataGroup } from './interfaces/data-group'

export { IDataItem } from './interfaces/data-item'
export { IComponentOptions } from './interfaces/options'
export { IEvent } from './interfaces/event';
export { IDataGroup } from './interfaces/data-group'

export let MetaCloudComponents = [MetaCloudComponent,MetaCloudItemsGroupComponent]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...MetaCloudComponents],
  exports: [...MetaCloudComponents],
  entryComponents: [...MetaCloudComponents]
})
export class MetaCloudModule { }
