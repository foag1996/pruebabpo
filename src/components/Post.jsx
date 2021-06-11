import React from 'react'

export const Post = () => {

    const [equipo, setEquipo] = React.useState([])

    React.useEffect(()=>{
        console.log('useEffect')
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const data = await fetch ('https://jsonplaceholder.typicode.com/posts')
        const post = await data.json()
        console.log(post)
        setEquipo(post)

    }


    return (
        <div>
            <h1>Post</h1>

            <ul>
                {
                    equipo.map (item => (
                        
                        <li key={item.id}>{item.userId} - {item.title} - {item.body} <hr/></li>
                        
                        
                    ))
                }
            </ul>
        </div>
    )
}
