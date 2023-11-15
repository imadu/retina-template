import { Model, ModelObject } from 'objection';

export class AccountName extends Model {
  static theTableName() {
    return 'account_name';
  }

  static get tableName() {
    return this.theTableName();
  }

  id?: number;
  wallet_id: number;
  accountName!: string;
  accountNumber!: string;
  bankCode!: string;
  bvn?: string | null;
  sessionId?: string | null;
  provider?: string | null;
}

export type AccountNameModelType = ModelObject<AccountName>;
