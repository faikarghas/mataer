import React, { useState } from 'react'

const MainPageLayout = (props) => {
    const [sectionActive, setSectionActive] = useState()
    return (
        <main>
            {props.children}
        </main>

    )
}

export default MainPageLayout
