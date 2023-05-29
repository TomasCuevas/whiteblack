export interface ICategoryMetadata {
  category: ICategories;
  description: string;
  subtitle: string;
  title: string;
}

export type ICategories =
  | "javascript"
  | "typescript"
  | "react"
  | "nodejs"
  | "nextjs"
  | "nestjs"
  | "html"
  | "git"
  | "css"
  | "vscode";
