import { Component, OnInit } from '@angular/core';
import { sortTypes } from './traverse-organizations/traverse-filter';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-traverse',
  templateUrl: './traverse.component.html',
  styleUrls: ['./traverse.component.css']
})
export class TraverseComponent implements OnInit {

  isInIntelligencePage = false;
  isInTraversePage = false;
  isInOwnershipPage = false;
  isInAccountsPage = false;

  constructor() { }

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

  // Dropdown code
  sortOptionList: any = ['Timestamp', 'Title', 'Reporter']

  // Dropdown code
  filterOptionList: any = ['Title', 'Reporter']

  // Dropdown code
  formatOptionList: any = ['Plaintext', 'JSON']
  
  form = new FormGroup({
    sortControl: new FormControl('', Validators.required),
    filterControl: new FormControl('', Validators.required),
    formatControl: new FormControl('', Validators.required)
  });
  
  get f(){
    return this.form.controls;
  }
}
