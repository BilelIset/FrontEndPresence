import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadcomponentComponent } from './downloadcomponent.component';

describe('DownloadcomponentComponent', () => {
  let component: DownloadcomponentComponent;
  let fixture: ComponentFixture<DownloadcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DownloadcomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DownloadcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
