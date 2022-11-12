import { TnxType } from "./tnxType.model";

export class TnxFree{
    id?:number;  
    name?: string;
    description?: string;
    type?:string;
    payer?: string;
    receiver?: string;
    enabled?: boolean;
    originalTxnType?: TnxType;
    generatedTxnType?: TnxType;
    chargeType?: string;
    fixedAmount?: number;
    percentage?:number;
    channel?: string;
    deductAmount?: boolean;
  }