import React, { FC } from 'react'
import './index.scss'

interface NFTCardProps {
  thumbnail: string
  title: string
  bestOffer: string
  description: string
  ownerAddress: string
  onClick?: () => any
}

const NFTCard: FC<NFTCardProps> = (props) => {
  const { title, bestOffer, thumbnail } = props

  return (
    <div className='nft-card-container'>
      <div className='nft-card-thumbnail' style={{
        backgroundImage: `url(${thumbnail})`,
      }}></div>
      <div className='nft-card-meta'>
        <div className='nft-card-meta-title'>{title}</div>
        {
          bestOffer && (
            <div className='nft-card-meta-offer'>
              {bestOffer}
            </div>
          )
        }
      </div>
    </div>
  )
}

export default NFTCard
