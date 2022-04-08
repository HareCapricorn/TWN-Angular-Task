import { Component, OnInit } from '@angular/core';
import { sortByKey } from 'src/app/helpers/sortByKey';
import { ArticleArray } from 'src/app/interfaces/article';
import { TableSortSettings } from 'src/app/interfaces/tablesortsettings';
import { TableFetchService } from 'src/app/services/table-fetch/table-fetch.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  settings: TableSortSettings = {
    originalArray: [],
    activeArray: [],
    sortType: '',
    sortDescending: false
  };
  pageNumber: number = 0;
  activeRowId: string = '';

  constructor(
    private tableFetch: TableFetchService
  ) {}

  ngOnInit(): void {
    this.tableFetch.getTable().subscribe(result => {
      this.settings['originalArray'] = result.list.slice();
      this.settings['activeArray'] = result.list;
      this.settings['sortType'] = 'none';
    });
  }

  getSortSvgSrc(sortType: string): string {
    const src: string = '/assets/graphics/';
    if (sortType === this.settings.sortType) {
      if (this.settings.sortDescending) {
        return src + 'sort-up-solid.svg';
      } else {
        return src + 'sort-down-solid.svg';
      }
    } else {
      return src + 'sort-solid.svg';
    }
  }

  getCurrentPageRows(): ArticleArray {
    const sliceIndex: number = this.pageNumber * 10;
    return this.settings.activeArray.slice(sliceIndex, sliceIndex + 10);
  }

  getShortDescription(body: string): string {
    return body.split('</p>')[0].substring(0, 300).concat('...</p>');
  }

  changeActiveRow(rowId: string): void {
    this.activeRowId = rowId === this.activeRowId ? '' : rowId;
  }

  isPageArrowInactive(side: string): boolean {
    const maxPages: number = Math.ceil(this.settings.activeArray.length / 10 - 1);
    if ((side === 'left' && this.pageNumber === 0) ||
      (side === 'right' && this.pageNumber === maxPages)) {
      return true;
    }
    return false;
  }

  getPageButtons(): Array<number> {
    const maxPages: number = this.settings.activeArray.length / 10;
    const maxPageNumber: number = Math.max(Math.min(5, maxPages), Math.min(this.pageNumber + 3, Math.ceil(maxPages)));
    const minPageNumber: number = Math.max(maxPageNumber - 5, 0);
    const numbers: Array<number> = [];
    for (let i = minPageNumber; i < maxPageNumber; i++) {
        numbers.push(i);
    }
    return numbers;
  }

  setPageNumber(page: number): void {
    this.pageNumber = page;
  }

  sortTable(key: string): void {
    if (key === this.settings.sortType && this.settings.sortDescending) {
      this.settings.sortType = '';
      this.settings.sortDescending = false;
      this.settings.activeArray = this.settings.originalArray.slice();
    } else if (key === this.settings.sortType) {
      this.settings.sortDescending = true;
      sortByKey(this.settings.activeArray, key, true);
    } else {
      this.settings.sortType = key;
      sortByKey(this.settings.activeArray, key, false);
    }
  }
}
