import React from 'react'
import "../content/content.css"

const Content = ({ currentUser, selectedUser }) => {

    if (!selectedUser) {
        return <div style={{ backgroundColor: "rgba(211, 63, 63, 1)", flex: 1 }} >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 15, fontWeight: 800 }}>
                Select a Contact to start chatting
            </div></div>
    }
    return (

        <div className='contentContainer'>
            Text with {selectedUser}
        </div>
    )
}

export default Content
