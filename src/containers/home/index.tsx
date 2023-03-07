import React, { Fragment, useEffect, useState } from "react";
import { getNFTList, NFTItem } from "@apis/nft";
import { Container, Row, Col } from "react-grid-system";
import { useParams } from "react-router-dom";
import NFTCard from "./nft-card";
import NFTModal from "./nft-modal";
import "./index.scss";

const Home = () => {
  const { address } = useParams();
  const [nfts, setNfts] = useState<NFTItem[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedNft, setSelectedNft] = useState(null)

  useEffect(() => {
    if (address) {
      getNFTList(address)
        .then(ntfs => {
          setNfts(ntfs)
        })
    }
  }, [address])

  const openNftModal = () => {
    setIsModalOpen(true)
  }

  return (
    <Fragment>
      <Container>
        <Row>
          {
            nfts.map((nft, idx) => {
              return (
                <Col sm={2} md={3} lg={4} key={idx}>
                  <NFTCard onClick={openNftModal} thumbnail={""} title={""} bestOffer={""} description={""} ownerAddress={""}></NFTCard>
                </Col>
              )
            })
          }
        </Row>
      </Container>,
      <NFTModal isOpen={false} contractAddress={""} index={0}></NFTModal>
    </Fragment>
  );
};

export default Home;
