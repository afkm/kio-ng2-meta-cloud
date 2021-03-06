import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { IDataItem } from '../../interfaces/data-item'
import { IDataGroup } from '../../interfaces/data-group'
import { IEvent } from '../../interfaces/event'
import { IComponentOptions } from '../../interfaces/options'

@Component({
  selector: 'kio-meta-cloud-items-group',
  templateUrl: './meta-cloud-items-group.component.html',
  styleUrls: ['./meta-cloud-items-group.component.css']
})
export class MetaCloudItemsGroupComponent <T> implements OnInit {

  constructor() { }

  @Input() selectedIndex:number=-1

  @Input('group') dataGroup:IDataGroup<T>

  @Input('items') dataItems:IDataItem<T>[]=[]
  
  @Output('itemclick') click:EventEmitter<IEvent<T>>=new EventEmitter()

  @Output() select:EventEmitter<IDataItem<T>[]>=new EventEmitter()

  public ngOnInit() {

    this.dataItems = this._dataItemsFromGroup(this.dataGroup)

  }

  public isItemSelected ( item:IDataItem<T> ):boolean {

    return this.selectedIndex === item.index

  }

  public selectItem ( item?:IDataItem<T> ) {
    this.selectedIndex = item ? item.index : -1
  }

  public onItemClick (item:IDataItem<T>) {

    this.selectItem(item)

    this.click.emit({
      group: this.dataGroup,
      item
    })

  }


  private _dataItemsFromGroup ( group:IDataGroup<T> ):IDataItem<T>[] {

    return group.items.map ( (item:T, index:number) => {
      return {
        label: `${item}`,
        index,
        data: item
      }
    } )

  }

}
