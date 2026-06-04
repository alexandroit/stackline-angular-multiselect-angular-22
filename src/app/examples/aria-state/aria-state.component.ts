import { Component, OnInit } from '@angular/core';
import { DropdownSettings } from '@stackline/angular-multiselect-dropdown';

import { ARIA_STATE_COUNTRIES } from './aria-state.data';

type AriaCountry = (typeof ARIA_STATE_COUNTRIES)[number];

@Component({
  standalone: false,
  selector: 'app-aria-state-example',
  templateUrl: './aria-state.component.html',
  styleUrls: ['./aria-state.component.scss']
})
export class AriaStateExampleComponent implements OnInit {
  example = { slug: 'aria-state' };
  itemList: AriaCountry[] = [];
  selectedItems: AriaCountry[] = [];
  settings: DropdownSettings = {};

  ngOnInit() {
    this.itemList = ARIA_STATE_COUNTRIES;
    this.selectedItems = [ARIA_STATE_COUNTRIES[0], ARIA_STATE_COUNTRIES[1]];
    this.settings = {
      text: 'ARIA-tested countries',
      enableSearchFilter: true,
      searchAutofocus: false,
      listboxAriaLabel: 'Country options',
      ariaLabel: 'ARIA state country picker',
      skin: 'material',
      maxHeight: 220
    };
  }
}
