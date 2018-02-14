import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { IDataItem } from '../../interfaces/data-item'
import { IDataGroup } from '../../interfaces/data-group'
import { IEvent } from '../../interfaces/event'
import { IComponentOptions } from '../../interfaces/options'



@Component({
  selector: 'kio-meta-cloud',
  templateUrl: './meta-cloud.component.html',
  styleUrls: ['./meta-cloud.component.css']
})
export class MetaCloudComponent <T> implements OnInit, IComponentOptions {

  constructor() { }

  @Input('groups') dataGroups:IDataGroup<T>[]=[]

  @Input() multiple:boolean=true

  @Output() itemclick:EventEmitter<IEvent<T>>=new EventEmitter()

  @Output() select:EventEmitter<IDataItem<T>[]>=new EventEmitter()

  ngOnInit() {

  }

  onItemClick(event:IEvent<T>){
    this.itemclick.emit(event)
  }

}
