import React, { useEffect, useState } from "react";
import { Heading } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import { NewsItem } from "../newsItem";
import { Iframe, News, ShowMoreBtn, Wrapper } from "./styled";
import { Button, ButtonGroup } from "@chakra-ui/button";
import { MobileBaner } from "../mobileBaner";

export const ApiNews = () => {
  const [apiDataNews, setApiDataNews] = useState([]);
  const [pageNumber, setPageNumber] = useState(3);

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
        setApiDataNews(res.data.allImgs);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const showMore = (moreLess: boolean) => {
    moreLess
      ? apiDataNews.length !== pageNumber - 1 && setPageNumber(pageNumber + 4)
      : pageNumber !== 3 && setPageNumber(pageNumber - 4);
  };

  return (
    <>
      <MobileBaner />
      <motion.div animate={{ opacity: [0, 1], y: [-300, 0] }}>
        <News>
          <Heading>Aktualności</Heading>
        </News>
      </motion.div>
      <Wrapper>
        {apiDataNews.map(
          (items, index) =>
            index <= pageNumber && <NewsItem {...items} key={index} />
        )}
      </Wrapper>
      <ButtonGroup marginTop="3rem">
        <ShowMoreBtn onClick={() => showMore(true)}>Pokaż więcej</ShowMoreBtn>
        <ShowMoreBtn onClick={() => showMore(false)}>Pokaż mniej</ShowMoreBtn>
      </ButtonGroup>

      <Iframe
        src="https://www.youtube.com/embed/-GX_D2CLaxg"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></Iframe>
    </>
  );
};
