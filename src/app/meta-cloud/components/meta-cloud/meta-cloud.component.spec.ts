import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaCloudComponent } from './meta-cloud.component';

describe('MetaCloudComponent', () => {
  let component: MetaCloudComponent;
  let fixture: ComponentFixture<MetaCloudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetaCloudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
