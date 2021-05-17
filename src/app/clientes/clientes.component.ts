import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[] = [];
  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(
    clientes => this.clientes = clientes //AnonFunc
    //obseervador, actualiza la lista de clientes y la pasa a la vista
    );
  }
}
