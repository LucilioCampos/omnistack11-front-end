import React, { useState, useEffect } from 'react';
import { FiTrash2 } from 'react-icons/fi'
import Header from '../Header'

import './styles.css'

import api, { isAuthenticated } from '../../services/api'

export default function Profile() {
    const [incidents, setIncidents] = useState([])


    useEffect(() => {
        console.log(isAuthenticated())
        api.get('profile')
            .then(response => {
                setIncidents(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`)

            setIncidents(incidents.filter(incident => incident.id !== id))
        } catch (err) {
            alert('Erro ao delete incidente')
        }
    }

    return (
        <>
            <Header showCreate={true}/>
            <div className="profile-container">

                <h1>Casos cadastrados</h1>
                <ul>
                    {incidents.map(incident => (
                        <li key={incident.id}>
                            <strong>CASO:</strong>
                            <p>{incident.title}</p>
                            <strong>DESCRIÇÃO:</strong>
                            <p>{incident.description}</p>
                            <strong>VALOR:</strong>
                            <p>{
                                Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
                                    .format(incident.value)
                            }
                            </p>
                            <button type="button" onClick={() => handleDeleteIncident(incident.id)}>
                                <FiTrash2 size={20} color="#A8A8B3" />
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}