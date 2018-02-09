import { Component } from '@angular/core';
import { IDataItem, IComponentOptions } from './meta-cloud/meta-cloud.module'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  testData:IDataItem<string>[]=[
    {
      index: 0,
      label: "Hello",
      data: "Hello"
    },
    {
      index: 1,
      label: "World",
      data: "World"
    },
    {
      index: 2,
      label: "Foobar",
      data: "Foobar"
    }
  ]

}
