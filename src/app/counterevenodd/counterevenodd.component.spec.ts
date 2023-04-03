import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterevenoddComponent } from './counterevenodd.component';

describe('CounterevenoddComponent', () => {
  let component: CounterevenoddComponent;
  let fixture: ComponentFixture<CounterevenoddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterevenoddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterevenoddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
