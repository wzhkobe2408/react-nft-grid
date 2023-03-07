import React, { useEffect, useState } from "react";
import { getNFTList, NFTItem } from "@apis/nft";
import { Container, Row, Col } from "react-grid-system";
import { useParams } from "react-router-dom";
import NFTCard from "./nft-card";
import "./index.scss";

const Home = () => {
  const { address } = useParams();
  const [nfts, setNFTs] = useState<NFTItem[]>([])

  useEffect(() => {
    if (address) {
      getNFTList(address)
        .then(ntfs => {
          setNFTs(ntfs)
        })
    }
  }, [address])

  return (
    <Container>
      <Row>
        {/* {
          nfts.map(nft => {
            return (
              <Col sm={4}>
                <NFTCard thumbnail={""} title={""} bestOffer={""} description={""} ownerAddress={""}></NFTCard>
              </Col>
            )
          })
        } */}

        <Col sm={4}>One of three columns</Col>
        <Col sm={4}>One of three columns</Col>
        <Col sm={4}>One of three columns</Col>
      </Row>
    </Container>
  );
};

export default Home;
