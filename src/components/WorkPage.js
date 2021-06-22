import React from 'react'
import { useHistory } from 'react-router-dom'
import Layout from './Layout'

function WorkPage({data}) {
    const history = useHistory()

    return (
        
            <Layout>
            <div className="title">
                <h1> {data.title} </h1>
            </div>
            <div className="text">
                <p> {data.desc} </p>
            </div>

            <div className="card" style={{textAlign: 'center',width: '200px', height: '200px', backgroundColor: data.color, margin: '3rem 0'}}>

            </div>
            <button style={{margin: '3rem 0'}} onClick={() => history.push('./')}>Retour à la page présedante</button>
            
            </Layout>
        
    )
}

export default WorkPage
