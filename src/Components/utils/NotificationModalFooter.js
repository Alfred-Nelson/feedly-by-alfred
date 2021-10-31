import React from 'react'
import { Button } from "@bigbinary/neetoui/v2";
import { postMessage } from "../../api/NewsApi"

const NotificationModalFooter = ({ email, setEmail, setShowModel }) => {

    const handleClick = () => {
        postMessage(email)
        setEmail("")
        setShowModel(false)
    }

    return (
        <div>
            <Button 
                style="primary" 
                label="Sign Up" 
                className="mr-5"
                onClick = {handleClick}
            />
            <Button 
                style="secondary" 
                label="Cancel" 
                onClick = {() => setShowModel(false)}
            />
        </div>
    )
}

export default NotificationModalFooter
