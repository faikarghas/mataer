import React from 'react'

const Index = () => {

    function _scrollToTop() {
        window.scrollTo(0, 0)
    }

    return (
        <div className="scrollToTop" onClick={_scrollToTop}><img src="/arrowup.png"/></div>
    )
}

export default Index
