import { NFTItem } from '@apis/nft';
import Button from '@components/button';
import { formatAddress } from '@helpers/format';
import React, { FC, useCallback } from 'react'
import Dialog from 'rc-dialog'
import { IDialogPropTypes } from 'rc-dialog/lib/IDialogPropTypes';
import { useParams } from 'react-router-dom';
import 'rc-dialog/assets/index.css'
import './index.scss'

interface NFTModalProps extends IDialogPropTypes {
  nft: NFTItem | undefined
}

const OPENSEA_ASSETS_PREURL = 'https://opensea.io/assets/ethereum'

const NFTModal: FC<NFTModalProps> = (props) => {
  const { nft } = props
  const { address } = useParams()

  const navigateToOpenSea = useCallback(() => {
    if (nft) {
      window.open(`${OPENSEA_ASSETS_PREURL}/${address}/${nft.id}`)
    }
  }, [nft, address])

  return (
    <Dialog
       visible={props.visible}
       title={'NFT Details'}
       onClose={props.onClose}
    >
        <div className='nft-modal-container'>
          <div className='nft-modal-thumbnail' style={{ backgroundImage: `url('${nft?.thumbnail}')` }}></div>
          <div className='nft-modal-meta'>
            <div className='nft-modal-meta-title'>{nft?.title}</div>
            <div className='nft-modal-meta-info'>Current Price: {nft?.currentPrice}</div>
            <div className='nft-modal-meta-info'>Last Sale: {nft?.lastSale}</div>
            <div className='nft-modal-meta-info'>Owner: {nft?.ownerName}</div>
            <div className='nft-modal-meta-info'>Owner Address: {formatAddress(nft?.ownerAddress ?? '')}</div>
            <div style={{ height: '1px', backgroundColor: 'rgb(228, 228, 228)', margin: '16px 0' }}></div>
            <Button onClick={navigateToOpenSea}>Purchase</Button>
          </div>
        </div>
        
    </Dialog>
  )
}

export default NFTModal