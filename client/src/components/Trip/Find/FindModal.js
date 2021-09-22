/* 
Approach for FindModal.js

Renders input box in the Modal (keeps it contained external to the main page)
Renders result (potentially use list component)
- Progressive Disclosure
Getting data for Planner
- callback function to get parent
- Button - use ReactStract 
LOOK INTO "useState" as a form of managing places
Questions:
    What is the setModal() component doing?
*/

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';


const FindModal = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (

        <div className="searchButton">
            <Button className = "mx-1" outline-color="secondary" onClick={toggle}> Search </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader>Find Places</ModalHeader>
                <ModalBody>
                    <InputGroup>
                        <InputGroupAddon addonType="append">
                            <Button onClick={toggle}>Search</Button>
                        </InputGroupAddon>
                        <Input>Search</Input>
                    </InputGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={toggle}>Done</Button>{' '}
                    <Button color="danger" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default FindModal;