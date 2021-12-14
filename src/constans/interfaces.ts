export interface INewsItem {
  short: string;
  opis: string;
  _seoMetaTags: [
    { atributes: { content: string } },
    { atributes: { content: string } },
    { atributes: { content: string } },
    { attributes: { property: string; content: string } }
  ];
}
export interface IShortInfoItem {
  photo: string;
  title: string;
  content: string;
}
export interface IWorkItem {
  title: string;
  content: string;
  photo: string;
}
