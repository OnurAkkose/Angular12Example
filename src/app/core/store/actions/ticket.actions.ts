import { TicketModel } from '../../../models/ticket/ticket';
export class GetAllTicketsAction {
    static readonly type = '[Tickets] Get All Tickets';
    constructor(){}
}    
export class DeleteTicketAction {
    static readonly type = '[Tickets] Delete Ticket';
    constructor(public ticketId: number) {}
}
export class GetTicketAction {
    static readonly type = '[Tickets] Get Ticket';
    constructor(public ticketId: number) {}
}
export class AddTicketAction
{
    static readonly type = '[Tickets] Add Ticket';
    constructor(public ticket: TicketModel){}
}
export class UpdateTicketAction
{
    static readonly type = '[Tickets] Update Ticket';
    constructor(public ticket: TicketModel){}
}
  