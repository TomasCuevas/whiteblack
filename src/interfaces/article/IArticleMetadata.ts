//* INTERFACE *//
import { ICategories } from "@/interfaces";

export interface IArticleMetadata {
  author: string;
  cardDescription: string;
  category: ICategories;
  date: string;
  description: string;
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
