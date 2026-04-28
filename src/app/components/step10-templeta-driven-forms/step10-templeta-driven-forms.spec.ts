import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step10TempletaDrivenForms } from './step10-templeta-driven-forms';

describe('Step10TemplateDrivenForms', () => {
  let component: Step10TempletaDrivenForms;
  let fixture: ComponentFixture<Step10TempletaDrivenForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step10TempletaDrivenForms],
    }).compileComponents();

    fixture = TestBed.createComponent(Step10TempletaDrivenForms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});