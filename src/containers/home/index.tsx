import React, { Fragment, useEffect, useState } from "react";
import { getNFTList, NFTItem } from "@apis/nft";
import { Container, Row, Col } from "react-grid-system";
import { useParams } from "react-router-dom";
import NFTCard from "./nft-card";
import NFTModal from "./nft-modal";

const Home = () => {
  const { address } = useParams();
  const [nfts, setNfts] = useState<NFTItem[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedNft, setSelectedNft] = useState<NFTItem>()

  useEffect(() => {
    if (address) {
      getNFTList(address)
        .then(ntfs => {
          setNfts(ntfs)
        })
    }
  }, [address])

  const openNftModal = (nft: NFTItem) => {
    setSelectedNft(nft)
    setIsModalOpen(true)
  }

  const closeNftModal = () => {
    setIsModalOpen(false)
    setSelectedNft(undefined)
  }

  return (
    <Fragment>
      <Container style={{ marginTop: 40 }}>
        <Row>
          {
            nfts.map((nft, idx) => {
              return (
                <Col sm={2} md={3} lg={4} key={idx} style={{ marginBottom: 20 }}>
                  <NFTCard onClick={openNftModal} nft={nft}></NFTCard>
                </Col>
              )
            })
          }
        </Row>
      </Container>,
      <NFTModal visible={isModalOpen} nft={selectedNft} onClose={closeNftModal}></NFTModal>
    </Fragment>
  );
};

export default Home;
