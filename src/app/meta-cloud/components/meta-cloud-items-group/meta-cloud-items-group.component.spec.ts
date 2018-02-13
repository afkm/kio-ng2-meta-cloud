import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaCloudItemsGroupComponent } from './meta-cloud-items-group.component';

describe('MetaCloudItemsGroupComponent', () => {
  let component: MetaCloudItemsGroupComponent;
  let fixture: ComponentFixture<MetaCloudItemsGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetaCloudItemsGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaCloudItemsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
