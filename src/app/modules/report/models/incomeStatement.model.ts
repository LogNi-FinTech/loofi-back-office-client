export class IncomeStatement{

    id?:number;
    ledgerCode?: string;
    name?: string;
    onlyParent?:boolean;
    type?: string; 
    head?: string;
    parentLedgerDto?: string;
    balance?: number;
    balanceAt?: string;
}