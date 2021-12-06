export const apiToken: string = "4ae5a61b1ff196a96d8e8ea08d3d0e";
export const apiLink: string = "https://graphql.datocms.com/";
export const request: string = ` {
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
  }
`;
