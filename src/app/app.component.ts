import { Component } from '@angular/core';
import { IDataItem, IDataGroup, IComponentOptions } from '../../module/meta-cloud.module'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  testData:IDataGroup<string>[]=[
    {
      index: 0,
      items: [ "Hello", "World", "Foobar" ]
    },
    {
      index: 1,
      items: [ "Hello1", "World1", "Foobar1" ]
    }
  ]

  onSelect(event:any){
    console.log('did select', event)
  }

}
