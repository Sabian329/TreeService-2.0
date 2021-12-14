export const LINK: string = "https://graphql.datocms.com/";

export const gqlMethod: string = "POST";

const token: string = "4ae5a61b1ff196a96d8e8ea08d3d0e";

export const gqlHeaders: {
  "Content-Type": string;
  Accept: string;
  Authorization: string;
} = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer ${token}`,
};

export const gqlQuery: string = `{
    allImgs {
      id
      _firstPublishedAt
      _createdAt
      short
      opis
      _seoMetaTags {
        attributes
      }
    }
    _allImgsMeta {
      count
    }
  }`;
