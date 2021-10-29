import React from 'react'
import { Modal, Button } from "@bigbinary/neetoui/v2";


const ModalCreate = (props) => {
    return (
        <div>
            <Modal isOpen={props.showModal} onClose={() => props.setShowModal(false)} size="md">
                <Modal.Header>
                    { props.header }
                </Modal.Header>
                <Modal.Body>
                    { props.body }
                </Modal.Body>
                <Modal.Footer className="space-x-2">
                    { props.footer }
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalCreate
