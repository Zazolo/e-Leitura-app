import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerHistoriaPage } from './ver-historia.page';

describe('VerHistoriaPage', () => {
  let component: VerHistoriaPage;
  let fixture: ComponentFixture<VerHistoriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerHistoriaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerHistoriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
