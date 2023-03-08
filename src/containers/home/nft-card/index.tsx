import { NFTItem } from '@apis/nft'
import React, { FC } from 'react'
import './index.scss'

interface NFTCardProps {
  nft: NFTItem
  onClick: (nft: NFTItem) => any
}

const NFTCard: FC<NFTCardProps> = (props) => {
  const { nft, onClick } = props

  return (
    <div className='nft-card-container' onClick={() => onClick(nft)}>
      <div className='nft-card-thumbnail' style={{
        backgroundImage: `url('${nft.thumbnail}')`,
      }}></div>
      <div className='nft-card-meta'>
        <div className='nft-card-meta-title'>{nft.title}</div>
        <div className='nft-card-meta-currentPrice'>
              {nft.currentPrice}
          </div>
          <div className='nft-card-meta-lastsale'>
              Last sale: {nft.lastSale}
          </div>
      </div>
    </div>
  )
}

export default NFTCard
