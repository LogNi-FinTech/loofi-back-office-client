

import { Component, OnInit } from "@angular/core";
import { IncomeStatement } from "../../models/incomeStatement.model";
import { BalanceSheetService } from "../../services/balanceSheet.service";

@Component({
    // selector: 'app-tutorials-list',
    templateUrl: './incomeStatement.component.html',
    styleUrls: ['./incomeStatement.component.css']
})
export class IncomeStatementComponent implements OnInit {
    balanceList?: IncomeStatement[];

    listIncome?: IncomeStatement[] = [];
    listExpense?: IncomeStatement[] = [];
    totaleIncomeBalance = 0;
    totalExpenseBalance = 0;
    balanceAt = "";
    isBalance = false;
    isloding = false

    constructor(private balanceSheetService: BalanceSheetService) { }

    ngOnInit(): void {
        //this.getAllTypeSystem();
    }

    getAllTypeSystem() {
        this.listIncome = [];
        this.listExpense = [];
        this.isloding = true;

        let temp = new Date(this.balanceAt);
        let payload = temp.getFullYear() + "-" + (temp.getMonth() + 1) + "-" + temp.getDate();
        this.balanceSheetService.getBalanceAt(payload).subscribe((r) => {
            this.isloding = false
            this.isBalance = true
            this.balanceList = r;
            console.log(this.balanceList)
            this.balanceList?.forEach(e => {
                if (e.head != null) {
                    if (e.head == "INCOME") {
                        this.listIncome?.push(e);
                        console.log(this.listIncome)
                        if (e.balance != null) {
                            this.totaleIncomeBalance = this.totaleIncomeBalance + e.balance
                        }
                        else {
                            this.totaleIncomeBalance = this.totaleIncomeBalance + 0;
                        }

                    }
                    else if (e.head == "EXPENSE") {
                        this.listExpense?.push(e);
                        if (e.balance != null) {
                            this.totalExpenseBalance = this.totalExpenseBalance + e.balance
                        }
                        else {
                            this.totalExpenseBalance = this.totalExpenseBalance + 0;
                        }
                    }

                }
            })

        })

    }

}