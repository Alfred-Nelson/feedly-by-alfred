import React, { useState } from 'react'
import Group from "../../src/assets/Group.png"
import {Typography, Button} from  "@bigbinary/neetoui/v2";
import { Home } from "@bigbinary/neeto-icons";
import { setState } from 'expect/build/jestMatchersObject';
import { Redirect } from 'react-router';

const Unknown = () => {
    const [state, setState] = useState(false)
    return (
        <div className = "flex flex-col items-center mt-40">
            {state? <Redirect to="/" />: null}
            <img src={Group} />
            <Typography style="h2" className="my-8">You landed somewhere unknown</Typography>
            <Button 
                label="Take me home"
                size="large"
                style="secondary"
                icon={Home} 
                iconPosition="left" 
                onClick={() => setState(true)}/>
        </div>
    )
}

export default Unknown
