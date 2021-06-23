import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPathComponent } from './header-path.component';

describe('HeaderPathComponent', () => {
  let component: HeaderPathComponent;
  let fixture: ComponentFixture<HeaderPathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderPathComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
