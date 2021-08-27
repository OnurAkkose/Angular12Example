import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetAllTicketsAction } from 'src/app/core/store/actions/ticket.actions';
import { TicketState } from 'src/app/core/store/states/ticket.state';
import { TicketModel } from '../../../../models/ticket/ticket';
import { InjectableRxStompConfig, RxStompService } from '@stomp/ng2-stompjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {  
  @Select(TicketState.tickets) tickets!: Observable<TicketModel[]>;
  constructor(private store : Store, private rxStompService: RxStompService) {
      this.store.dispatch(new GetAllTicketsAction());
      console.log(this.tickets);  
   }
  ticketData! : TicketModel[];
  ngOnInit(): void {    
    this.tickets.subscribe((t) => {      
      this.ticketData = t;
    });
    
  }
  saleTicket(ticketId: number): void
  {
    console.log(ticketId)
  }
  onSendMessage() {
    const message = `Message generated at ${new Date}`;
    this.rxStompService.publish({destination: '/topic/demo', body: message});
  }
}
