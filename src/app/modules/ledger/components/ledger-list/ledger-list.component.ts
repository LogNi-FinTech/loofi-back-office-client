import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SnakBarService } from 'app/shared/service/snak-bar.service';
import { UserService } from 'app/shared/service/user.service';
import { CreateLedgerComponent } from '../../modals/create-ledger/create-ledger.component';
import { LedgerService } from '../../services/ledger.service';

@Component({
  selector: 'app-ledger-list',
  templateUrl: './ledger-list.component.html',
  styleUrls: ['./ledger-list.component.scss']
})
export class LedgerListComponent implements OnInit {

  public displayedColumns: string[] = ['name', 'description', 'type', 'head', 'ledgerCode', 'onlyParent', 'showAccountsInChart', 'update'];
  public dataSource;
  public isLoading = false;

  constructor(private ledgerService: LedgerService,
    private userService: UserService,
    private snakBarService: SnakBarService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.fetchMfsLedger();
  }

  fetchMfsLedger() {
    this.isLoading = true;
    this.ledgerService.fetchMfsLedger().subscribe(data => {
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

  openDialog(ledgerData) {
    this.isLoading = true;
    let dialogRef = this.dialog.open(CreateLedgerComponent, {
      width: '480px',
      panelClass: 'app-full-bleed-dialog',
      data: {
        ledgerData: ledgerData
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      debugger;
      if (result != null) {
        if (!ledgerData)
          this.createLedger(result);
        else {
          let data = {
            id: ledgerData.id,
            ...result
          };
          this.updateLedger(data);
        }
      }
      else {
        this.isLoading = false;
      }
    });
  }

  updateLedger(data) {
    console.log('data :>> ', data);
    this.ledgerService.update(data).subscribe(async data => {
      await this.fetchMfsLedger();
      this.snakBarService.showMessage("Successfully Updated");
    },
      error => {
        this.isLoading = false;
      });
  }

  createLedger(data) {
    console.log('data :>> ', data);
    this.ledgerService.create(data).subscribe(async data => {
      await this.fetchMfsLedger();
      this.snakBarService.showMessage("Successfully Saved");
    },
      error => {
        this.isLoading = false;
      });
  }
}
