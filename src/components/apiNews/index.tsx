import React, { useEffect, useState } from "react";
import { Heading } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import { NewsItem } from "../newsItem";
import { Iframe, News, ShowMoreBtn, Wrapper } from "./styled";
import { ButtonGroup } from "@chakra-ui/button";
import { MobileBaner } from "../mobileBaner";
import { gqlHeaders, gqlMethod, gqlQuery, LINK } from "../../api/graphQl";

export const ApiNews = () => {
  const [apiDataNews, setApiDataNews] = useState([]);
  const [pageNumber, setPageNumber] = useState(3);
  useEffect(() => {
    fetch(LINK, {
      method: gqlMethod,
      headers: gqlHeaders,
      body: JSON.stringify({
        query: gqlQuery,
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
