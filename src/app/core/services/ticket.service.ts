import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { TicketModel } from '../../models/ticket/ticket';
@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  getTickets()
  {
    return this.http.get<TicketModel[]>(`${environment.dev.apiUrl}/Ticket`);
  }
  getTicketById(id: number)
  {
    return this.http.get<TicketModel[]>(`${environment.dev.apiUrl}/Ticket/${id}`);
  }
  postTicket(ticket: TicketModel)
  {
    return this.http.post(`${environment.dev.apiUrl}/Ticket/Add`,ticket);   
  }
  updateTicket(ticket: TicketModel)
  {
    return this.http.put(`${environment.dev.apiUrl}/Ticket/Add`,ticket);   
  }
}
