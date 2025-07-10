import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarExpandedComponent } from './sidebar-expanded.component';

describe('SidebarExpandedComponent', () => {
  let component: SidebarExpandedComponent;
  let fixture: ComponentFixture<SidebarExpandedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarExpandedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarExpandedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
