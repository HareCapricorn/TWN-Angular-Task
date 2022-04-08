export interface Article {
  id: string,
  title: string,
  email: string,
  firstname: string,
  surname: string,
  author: string,
  sex: string,
  personal_code: number,
  phone: string,
  date: number,
  image: {
    large: string,
    medium: string,
    small: string,
    title: string,
    alt: string
  },
  images: [
    {
      large: string,
      medium: string,
      small: string,
      title: string,
      alt: string
    }
  ],
  intro: string,
  body: string,
  tags: string[]
  boolean: boolean
}

export interface ArticleArray extends Array<Article> {}