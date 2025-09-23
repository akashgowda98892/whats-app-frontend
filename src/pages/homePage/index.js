import React, { useState } from 'react'
import Header from '../../components/header'
import SideBar from '../../components/sidebar'
import Content from '../../components/content'
import { useClerk, useUser } from '@clerk/clerk-react'

const HomePage = () => {
    const { user } = useUser()
    const userName = user.firstName
    console.log(user)

    const [selectedUser, setSelectedUser] = useState(null)
    return (
        <div >
            <div >
                <Header />
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <SideBar currentUser={userName} onSelect={setSelectedUser} />
                    <Content currentUser={userName} selectedUser={selectedUser} />
                </div>
            </div>
        </div >
    )
}

export default HomePage
