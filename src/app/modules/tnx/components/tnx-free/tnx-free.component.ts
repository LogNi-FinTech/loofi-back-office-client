import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SnakBarService } from 'app/shared/service/snak-bar.service';
import { CreateTnxFreeComponent } from '../../modals/create-tnx-free/create-tnx-free.component';
import { TnxService } from '../../services/tnx.service';

@Component({
  selector: 'app-tnx-free',
  templateUrl: './tnx-free.component.html',
  styleUrls: ['./tnx-free.component.scss']
})
export class TnxFreeComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'name', 'description', 'type', 'payer', 'receiver', 'enabled', 'originalTxnType', 'generatedTxnType', 'chargeType', 'fixedAmount', 'percentage', 'channel', 'deductAmount', 'update'];
  public dataSource;
  public isLoading = false;

  constructor(private tnxService: TnxService,
    private snakBarService: SnakBarService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.fetchTnx();
  }

  fetchTnx() {
    this.isLoading = true;
    this.tnxService.fetchTnxFree().subscribe(data => {
      debugger;
      this.dataSource = data.content;;
      this.isLoading = false;
      console.log('data.content; :>> ', data.content);
    },
      error => {
        this.isLoading = false;
        this.snakBarService.showMessage("An error has occured");
      });
  }

  openDialog(tnxData) {
    this.isLoading = true;
    let dialogRef = this.dialog.open(CreateTnxFreeComponent, {
      width: '480px',
      panelClass: 'app-full-bleed-dialog',
      data: {
        tnxData: tnxData,
        tnxDataSource: this.dataSource
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      debugger;
      if (result != null) {
        if (!tnxData)
          this.createTnx(result);
        else {
          let data = {
            id: tnxData.id,
            ...result
          };
          this.updateTnx(data);
        }
      }
      else {
        this.isLoading = false;
      }
    });
  }

  updateTnx(data) {
    console.log('data :>> ', data);
    console.log('data :>> ', data);
    let payload = {
      ...data,
      originalTxnType: { id: data.originalTxnType },
      generatedTxnType: { id: data.generatedTxnType }
    };
    if (data.chargeType == 'FIXED') {
      payload = {
        ...payload,
        fixedAmount: 0
      }
    } else {
      payload = {
        ...payload,
        percentage: 0
      }
    }
    this.tnxService.update(payload).subscribe(async data => {
      await this.fetchTnx();
      this.snakBarService.showMessage("Successfully Updated");
    },
      error => {
        this.isLoading = false;
      });
  }

  createTnx(data) {
    debugger;
    console.log('data :>> ', data);
    let payload = {
      ...data,
      originalTxnType: { id: data.originalTxnType },
      generatedTxnType: { id: data.generatedTxnType }
    };
    if (data.chargeType == 'FIXED') {
      payload = {
        ...payload,
        fixedAmount: 0
      }
    } else {
      payload = {
        ...payload,
        percentage: 0
      }
    }
    this.tnxService.create(payload).subscribe(async data => {
      await this.fetchTnx();
      this.snakBarService.showMessage("Successfully Saved");
    },
      error => {
        this.isLoading = false;
      });
  }
}
