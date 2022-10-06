import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente_Medicamento } from '../dto/Cliente_Medicamento.dto';
import { ICliente_MedicamentoService } from '../interfaces/ICliente_MedicamentoService';
import { Response } from '../models/Response.dto';

@Injectable({
  providedIn: 'root'
})
export class ClienteMedicamentoService implements ICliente_MedicamentoService<Cliente_Medicamento>{

  
  getAllUrl: string = "http://localhost:8084/api/proyecto/clientes_medicamentos/getAll";
  getByIdUrl: string = `http://localhost:8084/api/proyecto/clientes_medicamentos/getById`; // aqui falta el id
  createOrUpdateUrl: string = `http://localhost:8084/api/proyecto/clientes_medicamentos/createOrUpdate`;
  deleteByIdUrl: string = `http://localhost:8084/api/proyecto/clientes_medicamentos/deleteById`; // aqui falta el id

  constructor(private httpClient: HttpClient) {  }


  getAll(): Observable<Response<Cliente_Medicamento[]>> {
    return this.httpClient.get<Response<Cliente_Medicamento[]>>(`${this.getAllUrl}`);
  }
  getById(id: number): Observable<Response<Cliente_Medicamento>> {
    return this.httpClient.get<Response<Cliente_Medicamento>>(`${this.getByIdUrl}/${id}`);
  }
  createOrUpdate(entity: Cliente_Medicamento): Observable<Response<Cliente_Medicamento>> {
    return this.httpClient.post<Response<Cliente_Medicamento>>(`${this.createOrUpdateUrl}`, entity);
  }
  deleteById(id: number): Observable<Response<Cliente_Medicamento>> {
    return this.httpClient.delete<Response<Cliente_Medicamento>>(`${this.deleteByIdUrl}/${id}`);
  }



  

}
