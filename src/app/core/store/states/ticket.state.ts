import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { TicketService } from "../../services/ticket.service";
import { GetAllTicketsAction, GetTicketAction } from "../actions/ticket.actions";
import { TicketModel } from '../../../models/ticket/ticket';
import { tap } from 'rxjs/operators';
export interface TicketModelState
{
    tickets: TicketModel[];
}

@State<TicketModelState>({
    name: 'Tickets',
    defaults: {
        tickets: []
    }
})

@Injectable()
export class TicketState
{
    constructor(private ticketService: TicketService){}

    @Selector()
    static tickets(state: TicketModelState): TicketModel[]
    {
        return state.tickets;
    }

    @Action(GetAllTicketsAction)
    getAllTickets(ctx: StateContext<TicketModelState>)
    {
        return this.ticketService.getTickets().pipe(
            tap((result) => {
              const state = ctx.getState();
              ctx.setState({
                ...state,
                tickets: result
              });
            })
        )
    }
    @Action(GetTicketAction)
    deleteTicket(ctx: StateContext<TicketModelState>, action: GetTicketAction)
    {
        return this.ticketService.getTicketById(action.ticketId).subscribe(
            (result) => 
            {
                const state = ctx.getState();
                ctx.setState({
                    ...state,
                    tickets: result
                })

            }
        )
    }

}