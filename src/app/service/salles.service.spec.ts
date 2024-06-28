import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SallesService } from './salles.service';
import { Salle } from '../model/Salle';

describe('SallesService', () => {
  let service: SallesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SallesService]
    });
    service = TestBed.inject(SallesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  

  it('Doit trouver les donnée de de sallles via post', () => {
    const dummySalles: Salle[] = [
      
    ];

    service.getSalles().subscribe(salles => {
      expect(salles.length).toBe(2);
      expect(salles).toEqual(dummySalles);
    });

    const req = httpMock.expectOne(service.url);
    expect(req.request.method).toBe('POST');
    req.flush(dummySalles);
  });
});
