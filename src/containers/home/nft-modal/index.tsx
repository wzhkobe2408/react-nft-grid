import Button from '@components/button';
import React, { FC } from 'react'
import Modal from 'react-modal';
import './index.scss'

interface NFTModalProps extends Modal.Props {}

const NFTModal: FC<NFTModalProps> = (props) => {
  return (
    <Modal
        isOpen={props.isOpen}
        style={{}}
    >
        <Button></Button>
    </Modal>
  )
}

export default NFTModal