import React from 'react'
import { Button } from "@bigbinary/neetoui/v2";
import { postMessage } from '../../api/NewsApi';

const NoNewsModalFooter = ({ setShowModal, email, name, message, setName, setEmail, setMessage }) => {

    const handleClick = async () => {
        postMessage({email, name, message})
        setName("")
        setEmail("")
        setMessage("")
    }

    return (
        <div>
            <Button
                label="Submit"
                onClick={() => {
                    handleClick()
                    setShowModal(false)
                }}
                size="large"
                className = "mr-3"
            />
            <Button
                style="text"
                label="Cancel"
                onClick={() => setShowModal(false)}
                size="large"
            />
        </div>
    )
}

export default NoNewsModalFooter
