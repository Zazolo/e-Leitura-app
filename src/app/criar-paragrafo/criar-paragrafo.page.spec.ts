import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CriarParagrafoPage } from './criar-paragrafo.page';

describe('CriarParagrafoPage', () => {
  let component: CriarParagrafoPage;
  let fixture: ComponentFixture<CriarParagrafoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarParagrafoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CriarParagrafoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
