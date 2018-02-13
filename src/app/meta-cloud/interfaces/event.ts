import { IDataGroup } from './data-group'
import { IDataItem } from './data-item'

export interface IEvent <T> {

  group: IDataGroup<T>

  item: IDataItem<T>

}