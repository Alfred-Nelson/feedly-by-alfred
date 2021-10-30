import React from 'react'
import Rectangle from "../../assets/Rectangle 252.png"
import { Typography } from "@bigbinary/neetoui/v2";

const NotificationModalHeader = () => {
    return (
        <div className = "flex flex-col items-center">
            <img src={Rectangle} />
            <Typography style="h2" className="mt-8" >Subscribe to Feed.ly</Typography>
        </div>
    )
}

export default NotificationModalHeader
