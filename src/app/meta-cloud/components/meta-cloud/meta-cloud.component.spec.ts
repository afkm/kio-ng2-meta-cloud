import { async, fakeAsync, tick, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaCloudComponent } from './meta-cloud.component';

const TEST_DATA:any[] = [
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

describe('MetaCloudComponent', () => {
  let component: MetaCloudComponent<any>;
  let fixture: ComponentFixture<MetaCloudComponent<any>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetaCloudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaCloudComponent);
    component = fixture.componentInstance;
    component.dataItems = TEST_DATA
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should call "onButtonClick"', fakeAsync(() => {

    spyOn(component,'onButtonClick')

    let button:HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('button')
    button.click()    


    expect(component.onButtonClick).toHaveBeenCalled()

    tick(300)
    
    expect(component.selectedItems).toBe(jasmine.any(Array))
    expect(component.selectedItems.length).toEqual(1)

  }))



});
