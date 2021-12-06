export interface IdatoCms {
  short: string;
  opis: string;
  _seoMetaTags: [
    { attributes: { property: string; content: string } },
    { attributes: { property: string; content: string } },
    { attributes: { property: string; content: string } },
    { attributes: { property: string; content: string } }
  ];
}

export interface IshortInfo {
  photo: string;
  title: string;
  content: string;
  color: string;
}
export interface Iworks {
  title: string;
  content: string;
  photo: string;
}
