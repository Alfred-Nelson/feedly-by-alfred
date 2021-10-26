import React from 'react'
import { Header } from "@bigbinary/neetoui/v2/layouts";
import HeaderFacilities from './HeaderFacilities';
import Line from '../helper/Line';


const Container = ({ children }) => {
    return (
        <div>
            <Header
                actionBlock={<HeaderFacilities />}
                title="Feed.ly"
            />
            <Line/>
            <div className="mt-20 mx-20 px-20">
                {children}
            </div>
        </div>
    )
}

export default Container
