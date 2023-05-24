import { Account } from './account';

export interface User {
  id: String;
  cpf: String;
  name: String;
  status: String;
  accounts: Account[];
}
