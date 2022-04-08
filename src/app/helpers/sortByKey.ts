import { Article } from "../interfaces/article";

export function sortByKey(array: Array<Article>, key: string, desc: boolean): void {
  const typedKey = key as keyof Article;
  const returnValue: number = desc ? -1 : 1
  array.sort((firstItem, secondItem) => {
      if (firstItem[typedKey] < secondItem[typedKey]) return -1 * returnValue;
      if (firstItem[typedKey] > secondItem[typedKey]) return 1 * returnValue;
      return 0;
  })
}