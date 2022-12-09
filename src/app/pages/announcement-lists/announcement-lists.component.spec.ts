import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementListsComponent } from './announcement-lists.component';

describe('AnnouncementListsComponent', () => {
  let component: AnnouncementListsComponent;
  let fixture: ComponentFixture<AnnouncementListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnouncementListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncementListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
