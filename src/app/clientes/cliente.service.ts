import { Injectable } from '@angular/core';
import { CLIENTES } from './clientes.json';
import { Cliente } from './cliente';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ClienteService {
  constructor() {}
  getClientes(): Observable<Cliente[]> { //string
    return of(CLIENTES); //flujo observable  a partir de los objetos clientes
  }
}
