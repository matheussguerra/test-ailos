import { Account } from './account';

export interface User {
  id: string;
  cpf: string;
  name: string;
  status: string;
  accounts: Account[];
}
