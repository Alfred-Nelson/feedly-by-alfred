import React from 'react'
import { Search, Notification, Filter } from "@bigbinary/neeto-icons";
import { Button } from "@bigbinary/neetoui/v2";



const HeaderFacilities = () => {
    return (
        <div className="flex flex-row flex-wrap items-center justify-around gap-8">
            <Button 
                size="large"
                icon={Search}
                style="text"
             />
            <Button
                size="large"
                icon={Notification}
                style="text"
             />
            <Button
                size="large"
                label="Filter"
                style="secondary"
                icon={Filter}
              />
        </div>
    )
}

export default HeaderFacilities
