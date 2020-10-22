import React,{useEffect} from 'react'
import Link from 'next/link'



const Sidebar = ({activeMenu,src}) => {

    return (
        <aside className="menu_sidebar menu_sidebar-homeBorder">
            <div className="menu_sidebar-content">
                <div className="menu_sidebar-content--top">
                    <Link href="/"><a><img className="logo" src={src} /></a></Link>
                </div>
                <div className="menu_sidebar-content--bottom">
                </div>
            </div>
        </aside>
    )
}

export default  Sidebar
