import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { IDataItem } from '../../interfaces/data-item'
import { IComponentOptions } from '../../interfaces/options'



@Component({
  selector: 'kio-meta-cloud',
  templateUrl: './meta-cloud.component.html',
  styleUrls: ['./meta-cloud.component.css']
})
export class MetaCloudComponent <T> implements OnInit, IComponentOptions {

  constructor() { }

  @Input() selectedItems:IDataItem<T>[]=[]

  @Input('items') dataItems:IDataItem<T>[]=[]

  @Input() multiple:boolean=true

  @Output() select:EventEmitter<IDataItem<T>[]>=new EventEmitter()

  ngOnInit() {

  }

  public isItemSelected ( item:IDataItem<T> ):boolean {

    return this.selectedItems.findIndex ( (selItem:IDataItem<T>) => selItem.index === item.index ) > -1

  }

  public onButtonClick(event:Event,item:IDataItem<T>){

    if ( this.isItemSelected(item) ) {

      this._updateSelection(this.selectedItems.filter ( selItem => selItem.index !== item.index ))

    } else {

      if ( this.multiple ) {

        this._updateSelection(this.selectedItems.concat([item]))

      } else {

        this._updateSelection([item])

      }

    }

  }

  private _updateSelection ( items:IDataItem<T>[] ) {

    this.selectedItems = items.slice()
    this.select.emit(items)

  }

}
