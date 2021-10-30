import React, { useState } from 'react'
import { Search, Notification, Filter } from "@bigbinary/neeto-icons";
import { Button } from "@bigbinary/neetoui/v2";
import ModalCreate from '../common/helper/ModalCreate';
import NotificationModalHeader from '../utils/NotificationModalHeader';
import NotificationModalBody from '../utils/NotificationModalBody';
import NotificationModalFooter from '../utils/NotificationModalFooter';

const HeaderFacilities = ({ setFilterPane }) => {
    const [ showModal , setShowModal ] = useState(false)
    const [ email , setEmail ] = useState("")

    const handleFilter = () => {
        setFilterPane(true)
    }

    return (
        <div className="flex flex-row flex-wrap items-center justify-around gap-8">
            <Button 
                size="large"
                icon={()=><Search/>}
                style="text"
                tooltipProps ={{
                    content : "Search",
                    position : "bottom"
                }}
             />
            <Button
                size="large"
                icon={()=><Notification/>}
                style="text"
                tooltipProps ={{
                    content : "Subscribe",
                    position : "top"
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
        </div>
    )
}

export default HeaderFacilities
