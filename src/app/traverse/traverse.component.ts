import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LogRetrievalService } from './log_retrieval_service/log-retrieval.service';
import { RetrievedLogDetails } from './log_retrieval_service/auditLog';

@Component({
  selector: 'app-traverse',
  templateUrl: './traverse.component.html',
  providers: [ LogRetrievalService ],
  styleUrls: ['./traverse.component.css']
})
export class TraverseComponent implements OnInit {

  isInIntelligencePage = false;
  isInTraversePage = false;
  isInOwnershipPage = false;
  isInAccountsPage = false;

  constructor(private logRetrievalService: LogRetrievalService) { }

  ngOnInit(): void {
  }

  // This is only a test. A button will only be purple if the route is in the right page
  // Or maybe we still need this just in case the app is still loading?
  intelligencePageSelected() {
    this.isInIntelligencePage = true;
    this.isInTraversePage = false;
    this.isInOwnershipPage = false;
    this.isInAccountsPage = false;
  }

  traversePageSelected() {
    this.isInIntelligencePage = false;
    this.isInTraversePage = true;
    this.isInOwnershipPage = false;
    this.isInAccountsPage = false;
  }

  ownershipPageSelected() {
    this.isInIntelligencePage = false;
    this.isInTraversePage = false;
    this.isInOwnershipPage = true;
    this.isInAccountsPage = false;
  }

  accountsPageSelected() {
    this.isInIntelligencePage = false;
    this.isInTraversePage = false;
    this.isInOwnershipPage = false;
    this.isInAccountsPage = true;
  }

  /*
  For Organization Options - maybe put this in its own component?
  */

  // Dropdown code
  sortOptionList: any = ['Timestamp', 'Title', 'Reporter']
  sortOrders: any =['ASCENDING', 'DESCENDING']

  // Dropdown code
  filterOptionList: any = ['Title', 'Reporter']

  // Dropdown code
  formatOptionList: any = ['Plaintext', 'JSON']
  
  form = new FormGroup({
    sortControl: new FormControl('', Validators.required),
    filterControl: new FormControl('', Validators.required),
    formatControl: new FormControl('', Validators.required)
  });

  /*
  For Retrieving Logs - maybe put this in its own component?
  */

  logDateInputValue: string = '';
  logKeyInputValue: string = '';

  logDateInputChanged(newLogDateVal: string): void {
    this.logDateInputValue = newLogDateVal;
  }

  logKeyInputChanged(newLogKeyVal: string): void {
    this.logKeyInputValue = newLogKeyVal;
  }

  retrievedLogs: RetrievedLogDetails =  {} as RetrievedLogDetails;

  public retrieveLogs() {
    console.log('retrieving logs');
    this.logRetrievalService.retrieveLogs(this.logKeyInputValue, this.logDateInputValue)
      .subscribe(
        (response) => {
          console.log('response received');
          console.log(response);
          this.retrievedLogs = response;
          console.log('response outputted');
        },
        (error) => {
          console.error('Request failed with error');
        }
      )
  }
}
