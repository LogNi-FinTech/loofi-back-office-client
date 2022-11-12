

import { Component, OnInit } from "@angular/core";
import moment from "moment";
import { BalanceSheet } from "../../models/balanceSheet.model";
import { BalanceSheetService } from "../../services/balanceSheet.service";

@Component({
    // selector: 'app-tutorials-list',
     templateUrl: './balance.component.html',
     styleUrls: ['./balanceSheet.component.css']
   })

   export class BalanceSheetComponent implements OnInit{ 
    
    balanceList?:BalanceSheet[]
    listAsset?:BalanceSheet[]=[]
    lisLiability?:BalanceSheet[]=[]
    totalAssetBalance=0;
    totalLiabitilyBalance=0
    totaleExpenseBalance=0
    totaleIncomeBalance=0
    totalAsset=0
    totalLiability=0
    balanceAt=""
    isBalance=false
    balanceSheets?:BalanceSheet[];
    totaleBalance=0;
    isLoding=false;
    
    ngOnInit(): void {    
       
    }
    
    constructor(private balanceSheetService:BalanceSheetService) { }
    
    getAllAsist(){
        this.listAsset=[]
        this.lisLiability=[]
       
        debugger;
        this.isLoding=true
        let temp = new Date(this.balanceAt);
        let payload = temp.getFullYear() + "-" + (temp.getMonth() + 1) + "-" + temp.getDate();
        this.balanceSheetService.getBalanceAt(payload).subscribe((r)=>{
            this.isLoding=false
            this.isBalance=true;
            this.balanceList=r;
            console.log(this.balanceList)
            this.balanceList?.forEach(e=>{
               
                if(e.head!=null){
                    console.log(e.name)
                    console.log(e.head)
                    if(e.head == "ASSET"){
                        console.log("at asset")
                        console.log(e.name)
                        this.listAsset?.push(e);
                        if(e.balance!=null){
                            this.totalAssetBalance=this.totalAssetBalance+e.balance
                        }
                        else{
                            this.totalAssetBalance=this.totalAssetBalance+0;
                        }
                            
                    }
                    else if(e.head=="LIABILITY"){
                        this.lisLiability?.push(e);
                        if(e.balance!=null){
                            this.totalLiabitilyBalance=this.totalLiabitilyBalance+e.balance
                        }
                        else{
                            this.totalLiabitilyBalance=this.totalLiabitilyBalance+0;
                        }
                    }

                    else if (e.head=="EXPENSE"){
                        if(e.balance!=null){
                            this.totaleExpenseBalance=this.totaleExpenseBalance+e.balance
                        }
                        else{
                            this.totaleExpenseBalance=this.totaleExpenseBalance+0;
                        }
                    }
                    else if (e.head=="INCOME"){
                        if(e.balance!=null){
                            this.totaleIncomeBalance=this.totaleIncomeBalance+e.balance
                        }
                        else{
                            this.totaleIncomeBalance=this.totaleIncomeBalance+0;
                        }
                    }
                }
            })

            this.totalAsset=this.totalAssetBalance+this.totaleExpenseBalance;
            this.totalLiability=this.totalLiabitilyBalance+this.totaleIncomeBalance;
           
        })
    }
    // show(){
    //     console.log(this.balanceAt)
    // }

    
    
    // showBalanceAt(){
    //     this.balanceSheetService.getBalanceAt(this.balanceAt).subscribe((r)=>{
    //         //this.isBalance=true;
    //        // this.listBalanceAt=r;
    //         //console.log(this.listBalanceAt)
    //     })
    // }

    // getAllBalanceSheet(){
       
    //     this.balanceSheetService.getAll().subscribe((data)=>{
           
    //         this.balanceSheets=data;
    //         console.log(this.balanceSheets);
    //         this.balanceSheets?.forEach(e=>{  
    //             if(e.balance!=null){

    //                 this.totaleBalance=this.totaleBalance+ e.balance; 
    //             }
    //             else{
    //                 this.totaleBalance=this.totaleBalance+ 0;
    //             }
                           
    //         })

    //       })
  
    // }
    // dateChanged($event:any){
    //     console.log($event.target.value);
    // }

   }