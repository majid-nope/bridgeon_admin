import React, { useEffect, useState } from 'react'
import Activity from '../User_Activity/Activity'
import Perform from '../User_Perform/Perform'

export const TabsRoute = ({ index }) => {
    const [activeTab, setTab] = useState();
    const tabs = [, <Activity />, <Perform />]

    useEffect(() => {
        setTab(tabs[index])
    }, [index])


    return (
        <>{activeTab}</>
    )
}
