import React, { useEffect, useState } from 'react'
import "../content/content.css"

const Content = ({ currentUser, selectedUser }) => {
    const [newMessage, setNewMessage] = useState("")
    const [oldMessages, setOldMessages] = useState([])

    const handleMessage = (e) => {
        e.preventDefault()
        const oldMessage = JSON.parse(localStorage.getItem("messages")) || {}
        console.log("old", oldMessage)
        const userMessage = oldMessage[selectedUser] || []
        console.log("new", userMessage)

        const currentMessage = [...userMessage, newMessage]
        // console.log(currentMessage)
        setOldMessages(currentMessage)

        oldMessage[selectedUser] = currentMessage

        localStorage.setItem("messages", JSON.stringify(oldMessage))
        setNewMessage("")
    }
    useEffect(() => {
        const oldMessage = JSON.parse(localStorage.getItem("messages")) || {}
        setOldMessages(oldMessage[selectedUser])
    }, [selectedUser])

    if (!selectedUser) {
        return <div style={{ backgroundColor: "rgba(221, 41, 41, 1)", flex: 1, width: "100vw" }} >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 15, fontWeight: 800 }}>
                Select a Contact to start chatting
            </div></div>
    }



    return (

        <>
            <div className='contentContainer'>
                <div className='contentHeader'>
                    <p> text with {selectedUser}</p>
                </div>
                <div style={{ paddingLeft: "80%", height: '5%', }}>
                    {
                        oldMessages?.map((old, i) => {
                            return (
                                <ul key={i} style={{ listStyleType: 'none', backgroundColor: 'grey', marginRight: '30%', borderRadius: '50px' }}>
                                    <li style={{ fontSize: '24px' }}>
                                        {old}
                                    </li>
                                </ul>
                            )

                        })
                    }
                </div>

                <form onSubmit={handleMessage} className='contentForm'>
                    <div className='contentInput'>
                        <input className='contentSub' type='text'
                            placeholder={`chat with ${selectedUser}`}
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                        />
                        <button type='submit'>
                            send
                        </button>
                    </div>

                </form>

            </div>
        </>


    )
}

export default Content
