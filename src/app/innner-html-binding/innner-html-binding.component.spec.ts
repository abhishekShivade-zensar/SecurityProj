import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnnerHtmlBindingComponent } from './innner-html-binding.component';

describe('InnnerHtmlBindingComponent', () => {
  let component: InnnerHtmlBindingComponent;
  let fixture: ComponentFixture<InnnerHtmlBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnnerHtmlBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnnerHtmlBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
