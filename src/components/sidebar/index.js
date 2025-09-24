import React from 'react'
import "../sidebar/sidebar.css"

const SideBar = ({ onSelect }) => {

    // console.log(currentUser)
    const contacts = ["Akash Gowda D H", "Abhi Gowda Ar", "Anil Gowda B"]
    const currentUser = "Abhi Gowda Ar"
    const avaibaleContacts = contacts.filter((c) => c != currentUser)

    console.log(avaibaleContacts)
    return (
        <div className='sidebarContainer'>
            <div>
                <h4 className='sidebarHeading'> Recent Contacts</h4>

                {
                    avaibaleContacts?.map((ct, i) => {
                        return (
                            <ul key={i} className='sidebarOl'  >

                                <li className='sidebarli' onClick={() => onSelect(ct)} >{ct}

                                </li>
                            </ul>
                        )

                    })
                }
            </div>

        </div>
    )
}

export default SideBar
