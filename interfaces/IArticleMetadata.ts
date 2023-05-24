export interface IArticleMetadata {
  author: string;
  cardDescription: string;
  category: string;
  date: string;
  description: string;
  image?: string;
  keywords: string;
  link: string;
  readingTime: IReadingTime;
  slug: string;
  tags: string[];
  title: string;
}

interface IReadingTime {
  minutes: number;
  text: string;
  time: number;
  words: number;
}
