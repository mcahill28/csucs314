import React, {useState} from 'react';
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown, ButtonGroup, Popover } from 'reactstrap';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { FaFileUpload, FaHome, FaTrash, FaTrashAlt, FaFileDownload } from 'react-icons/fa';

const MIME_TYPE = {
    JSON: "application/json",
    CSV: "text/csv",
    SVG: "image/svg+xml",
    KML: "application/vnd.google-earth.kml+xml"
};

const tripName = "My Trip";

export function ItineraryActionsDropdown(props) {
    const [savePopover, setSavPopover] = useState(false);
    const [uploadPopover, setUpPopover] = useState(false);

    function saveToggle(){
        setSavPopover(!savePopover);
    }

    function upToggle(){
        setUpPopover(!uploadPopover);
    }

    return (
        <ActionsDropdown {...props}>
            <DropdownItem onClick={() => moveToHome(props)} data-testid='home-button'>
                <FaHome />
            </DropdownItem>
            <DropdownItem onClick={() => removeAll(props)} data-testid='delete-all-button'>
                <FaTrashAlt />
            </DropdownItem>
            <DropdownItem onClick={iconClick} onMouseEnter={upToggle} onMouseLeave={upToggle} data-testid='load-trip-icon'>
                <FaFileUpload id="up"/>
                <Popover style={{backgroundColor: '#D3D3D3'}} target="up" placement="bottom" isOpen={uploadPopover}> <b>Upload</b> </Popover>
            </DropdownItem>
            <DropdownItem onClick={() => handleJSONSave(props)} onMouseEnter={saveToggle} onMouseLeave={saveToggle} data-testid='save-trip-button'>
                <FaFileDownload id="down"/>
                <Popover style={{backgroundColor: '#D3D3D3'}} target="down" placement="bottom" isOpen={savePopover}> <b>Save</b> </Popover>
            </DropdownItem>
        </ActionsDropdown> 
    );
}


function moveToHome(props) { props.placeActions.moveToHome(); }
function removeAll(props) { props.placeActions.removeAll(); }

function iconClick(){
    const input = document.getElementById('file-upload');

    if (input) {
        input.click();
    }
}

function handleJSONSave(props) {
    const tripJSON = props.placeActions.buildTripJSON();
    const fileName = tripName.replace(/ /g, "_").toLowerCase();
    props.placeActions.downloadFile(fileName + ".json", MIME_TYPE.JSON, tripJSON);
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
                <ButtonGroup >
                    {props.children}
                </ButtonGroup>
            </DropdownMenu>
        </UncontrolledDropdown>
    );
}