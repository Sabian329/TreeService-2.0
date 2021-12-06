import React, { useEffect, useState } from "react";
import { NewsItem } from "../newsItem";
import { Wrapper } from "./styled";

export const ApiNews = () => {
  const [apiDataNews, setApiDataNews] = useState([]);

  const token = "4ae5a61b1ff196a96d8e8ea08d3d0e";

  useEffect(() => {
    fetch("https://graphql.datocms.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        query: ` {
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
      `,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
        setApiDataNews(res.data.allImgs);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Wrapper>
      {apiDataNews.map((items) => (
        <NewsItem {...items} />
      ))}
    </Wrapper>
  );
};
