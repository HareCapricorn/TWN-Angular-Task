import { ArticleArray } from "./article";

export interface TableSortSettings {
  originalArray: ArticleArray,
  activeArray: ArticleArray,
  sortType: string,
  sortDescending: boolean
}