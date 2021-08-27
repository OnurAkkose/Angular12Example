import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { tap } from "rxjs/operators";
import { UserModel } from "src/app/models/user/user";
import { AuthService } from "../../services/auth.service";
import { Login } from "../actions/user.actions";

export interface UserState {
    user: UserModel;
  }
  
  @State<UserState>({
    name: 'user',
    })
  @Injectable()
  export class AuthenticationState {
    constructor(private authService: AuthService) {}
  
    @Selector()
    static userInfo(state: UserState) {
      return state.user;
    }
  
    @Action(Login)
    getDailyDuty(
      ctx: StateContext<UserState>,
      action: Login
    ) {
      return this.authService.getToken(action.data).pipe(
        tap(result => {
          const state = ctx.getState();
          ctx.setState({
            ...state,
            user: result        
          });
        })
      );
    }
  }