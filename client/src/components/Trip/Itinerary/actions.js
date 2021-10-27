import React from 'react';
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown, Input, InputGroup } from 'reactstrap';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { FaFileUpload, FaHome, FaTrash, FaTrashAlt } from 'react-icons/fa';

const FILE_FORMATS = ".json, .csv, application/json, text/csv";

export function ItineraryActionsDropdown(props) {

    const iconClick = () => {
        const input = document.getElementById('file-upload');

        if (input) {
            console.log('clicked' + input);
            input.click();
        }
    }

    return (
        <ActionsDropdown {...props}>
            <DropdownItem onClick={() => props.placeActions.moveToHome()} data-testid='home-button'>
                <FaHome />
            </DropdownItem>
            <DropdownItem onClick={() => props.placeActions.removeAll()} data-testid='delete-all-button'>
                <FaTrashAlt />
            </DropdownItem>
            <DropdownItem onClick={iconClick}>
                <FaFileUpload/>
            </DropdownItem>
        </ActionsDropdown> //need parent tag, react fragment doesnt change the formatting & in line
    );
}

export function PlaceActionsDropdown(props) {
    return (
        <ActionsDropdown {...props}>
            <DropdownItem onClick={() => props.placeActions.removeAtIndex(props.index)} data-testid={`delete-button-${props.index}`}>
                <FaTrash />
            </DropdownItem>
        </ActionsDropdown>
    );
}

function ActionsDropdown(props) {
    return (
        <UncontrolledDropdown direction="left" >
            <DropdownToggle tag="div" data-testid={`row-toggle-${props.index}`} >
                <BiDotsVerticalRounded size="1.5em" />
            </DropdownToggle >
            <DropdownMenu>
                {/*<ButtonGroup >
                    {props.children}
                </ButtonGroup> */}
                <InputGroup >
                    {props.children}
                </InputGroup>
            </DropdownMenu>
        </UncontrolledDropdown>
    );
}