import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CriarHistoriaPage } from './criar-historia.page';

describe('CriarHistoriaPage', () => {
  let component: CriarHistoriaPage;
  let fixture: ComponentFixture<CriarHistoriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarHistoriaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CriarHistoriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
