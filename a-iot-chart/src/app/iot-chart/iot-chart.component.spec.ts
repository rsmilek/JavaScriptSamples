import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IotChartComponent } from './iot-chart.component';

describe('IotChartComponent', () => {
  let component: IotChartComponent;
  let fixture: ComponentFixture<IotChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IotChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IotChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
