import { Injectable } from '@angular/core';
import { CLIENTES } from './clientes.json';
import { Cliente } from './cliente';
import { Observable, of } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root',
})

export class ClienteService {
  private urlEndPoint: string = "http://localhost:8080/api/clientes";

  constructor(private http: HttpClient) {} 

  getClientes(): Observable<Cliente[]> { //string
    //return of(CLIENTES); //flujo observable  a partir de los objetos clientes
    //return this.http.get<Cliente[]> (this.urlEndPoint) -> sin rxjs
    return this.http.get(this.urlEndPoint).pipe(
      map( (response) => response as Cliente[])
    );
    

    // create(cliente: Cliente) : Observable<Cliente>{
    //   map( (response) => response as Cliente[])

    // }


    
  }
}
