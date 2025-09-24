import { useClerk, UserButton } from '@clerk/clerk-react'
import React from 'react'

const Header = () => {
    const user = useClerk()
    // console.log(user)
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'rgba(56, 206, 94, 1)', margin: '0', position: 'sticky', top: 0, zIndex: '10' }}>
            <h4 style={{ marginLeft: 20 }}>  Whats app</h4>
            <UserButton />
        </div>
    )
}

export default Header
