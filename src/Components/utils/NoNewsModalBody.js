import React from 'react'
import { Input, Textarea , Typography} from "@bigbinary/neetoui/v2";

const NoNewsModalBody = ({setName, setEmail, email, name, message, setMessage}) => {
    return (
        <>
            <Typography style="body3" lineHeight="normal">
                Write to us about which category interest you and we will fetch them for you daily, for free
            </Typography>
            <div className="flex justify-between mt-2">
                <Input
                    label="name"
                    value={name}
                    placeholder="oliver smith"
                    onChange={e => setName(e.target.value)}
                />
                <Input
                    label="email"
                    placeholder="oliver@example.com"
                    value = {email}
                    onChange = {e=> setEmail(e.target.value)}
                    className="ml-8"
                />
            </div>
            <Textarea
                label="message"
                placeholder="Write your message here"
                value={message}
                onChange={e=> setMessage(e.target.value)}
                className = "mt-3"
            />
        </>
    )
}

export default NoNewsModalBody
