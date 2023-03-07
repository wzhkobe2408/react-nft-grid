import Button from '@components/button';
import React, { FC, useCallback } from 'react'
import Modal from 'react-modal';
import './index.scss'

interface NFTModalProps extends Modal.Props {
  contractAddress: string,
  index: number
}

const OPENSEA_ASSETS_PREURL = 'https://opensea.io/assets/ethereum'

const NFTModal: FC<NFTModalProps> = (props) => {
  const { contractAddress, index } = props

  const navigateToOpenSea = useCallback(() => {
    window.open(`${OPENSEA_ASSETS_PREURL}/${contractAddress}/${index}`)
  }, [contractAddress, index])

  return (
    <Modal
        isOpen={props.isOpen}
        style={{}}
    >
        <div className=''></div>
        <div className=''>
          <div className=''></div>
        </div>
        <Button onClick={navigateToOpenSea}>Purchase</Button>
    </Modal>
  )
}

export default NFTModal