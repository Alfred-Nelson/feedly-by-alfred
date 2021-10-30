import React from 'react'
import { Typography , Input} from "@bigbinary/neetoui/v2";

const NotificationModalBody = ({ email, setEmail }) => {
    return (
        <div>
            <Typography style="body2" className="mb-5" >We dont spam, but we deliver the latest news in short</Typography>
            <Input 
                placeholder = "oliver@example.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>
    )
}

export default NotificationModalBody
