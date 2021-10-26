import React from 'react'
import { Header } from "@bigbinary/neetoui/v2/layouts";
import HeaderFacilities from './HeaderFacilities';


const Container = ({ children }) => {
    return (
        <div>
            <Header
                actionBlock={<HeaderFacilities />}
                title="Layouts"
            />
            <div className="mt-5 my-4 py-4">
                {children}
            </div>
        </div>
    )
}

export default Container
