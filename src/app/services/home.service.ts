import { Injectable } from '@angular/core';
import { Account } from '../models/account';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor() {}

  public getData(cpf: any): User {
    const accounts: Account[] = [
      {
        accountType: 'Conta aplicação',
        bankName: 'Cooperativa Viacredi',
        accountNumber: '557932-4',
      },
      {
        accountType: 'Conta corrente',
        bankName: 'Cooperativa Viacredi',
        accountNumber: '778461-8',
      },
    ];
    const user: User = {
      id: '1',
      cpf,
      name: 'Mariane de Sousa Oliveira',
      status: 'Regular',
      accounts,
    };

    return user;
  }
}
