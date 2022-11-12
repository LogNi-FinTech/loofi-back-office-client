import { Component, OnInit } from '@angular/core';
import { Ledger } from '../../models/ledger.model';
import { TnxType } from '../../models/tnxType.model';
import { LedgerService } from '../../services/ledger.service';
import { TnxTypeService } from '../../services/tnxType.service';

@Component({
  selector: 'app-tnx-type',
  templateUrl: './tnx-type.component.html',
  styleUrls: ['./tnx-type.component.scss']
})
export class TnxTypeComponent implements OnInit {

  public isLoading = false;
  tnxType: TnxType = {
    "id": 0,
    "fromType": new Ledger(),
    "toType": new Ledger(),
    "txnCode": 0,
    "name": "",
    "description": "",
    "enabled": true,
  };

  tnxTypeUpdate: TnxType = {
    "id": 0,
    "fromType": new Ledger,
    "toType": new Ledger,
    "txnCode": 0,
    "name": "",
    "description": "",
    "enabled": true,
  };

  tnxTypes?: TnxType[];
  ledgers?: Ledger[];
  isUpdate = false;
  dataRecive = false;
  dataLedgerReceive = false;

  ngOnInit(): void {
    this.isLoading = true;
    this.getAllTnxType();
    this.getLeger();
  }
  constructor(private tnxTypeService: TnxTypeService, private ledgerService: LedgerService) { }



  getAllTnxType() {
    this.tnxTypeService.getAll().subscribe(r => {
      debugger;
      this.dataRecive = true;
      console.log(r);
      this.tnxTypes = r.content;
      this.isLoading = false;
      console.log(this.tnxTypes);
    })
  }

  getLeger() {
    this.ledgerService.getAll().subscribe((r) => {
      this.dataLedgerReceive = true;
      console.log(r);
      this.ledgers = r.content;
      console.log(this.ledgers);
    })
  }

  saveTnxType() {
    console.log(this.tnxType);
    this.isLoading = true;
    this.tnxTypeService.create(this.tnxType).subscribe((r) => {
      this.getAllTnxType();
      console.log(r);
    })
  }

  intialUpdateTnxType(item: any) {
    this.tnxTypeUpdate = item;
    this.isUpdate = true;
  }

  finalUpdate() {
    console.log(this.tnxTypeUpdate);
    this.isLoading = true;
    this.tnxTypeService.update(this.tnxTypeUpdate).subscribe((r) => {
      this.getAllTnxType();
      console.log(r);
    })
  }


}
