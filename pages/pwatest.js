import React from 'react'

const Pwatest = (props) => {
    return (
        <div>
            PWA
            <br/>
            {props.data.title}
        </div>
    )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
    const data = await res.json()
    // Pass data to the page via props
    return { props: { data } }
  }

export default Pwatest
