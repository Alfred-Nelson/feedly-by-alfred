import React, { useState } from 'react'
import { Search, Notification, Filter } from "@bigbinary/neeto-icons";
import { Button } from "@bigbinary/neetoui/v2";
import ModalCreate from '../common/helper/ModalCreate';
import NotificationModalHeader from '../utils/NotificationModalHeader';
import NotificationModalBody from '../utils/NotificationModalBody';
import NotificationModalFooter from '../utils/NotificationModalFooter';
import SearchModal from '../common/helper/SearchModal';

const HeaderFacilities = ({ setFilterPane }) => {
    const [ showModal , setShowModal ] = useState(false)
    const [ email , setEmail ] = useState("")
    const [showSearchModal, setSearchModal] = useState(false)

    const handleFilter = () => {
        setFilterPane(true)
    }

    return (
        <div className="flex flex-row flex-wrap items-center justify-around gap-8">
            <Button 
                size="large"
                icon={()=><Search/>}
                style="text"
                onClick={() => setSearchModal(true)}
                tooltipProps ={{
                    content : "Search",
                    placement : "bottom"
                }}
             />
            <Button
                size="large"
                icon={()=><Notification/>}
                style="text"
                tooltipProps ={{
                    content : "Subscribe",
                    placement : "bottom"
                }}
                onClick={
                   () => setShowModal(true)
                }
             />
            <Button
                size="large"
                label="Filter"
                style="secondary"
                icon={Filter}
                onClick={handleFilter}
              />
            <ModalCreate
                    size ="xs"
                    setShowModal={setShowModal}
                    showModal = {showModal}
                    header ={<NotificationModalHeader /> }
                    body = { <NotificationModalBody email = {email } setEmail = {setEmail} /> }
                    footer = { <NotificationModalFooter email = {email } setEmail = {setEmail} setShowModel = {setShowModal} /> }
            />
            <SearchModal showSearchModal ={showSearchModal} setSearchModal={setSearchModal} />
            
        </div>
    )
}

export default HeaderFacilities
