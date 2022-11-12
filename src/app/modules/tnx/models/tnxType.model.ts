import { Ledger } from "./ledger.model";

export class TnxType{
    id?:number;
    fromType?:Ledger;
    toType?:Ledger;
    txnCode?: number;
    name?: string;
    description?: string;
    enabled?: boolean;  
}