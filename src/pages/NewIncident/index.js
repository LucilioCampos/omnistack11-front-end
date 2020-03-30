import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api, { ongId } from '../../services/api'

import logoImage from '../../assets/logo.svg'
import './styles.css'

import Header from '../Header'

export default function NewIncident() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')

    const history = useHistory()

    async function handleNewIncident(e) {
        e.preventDefault();
        try {
            await api.post('incidents', { title, description, value }, {
                headers: {
                    Authorization: ongId
                }
            })
            history.push('/profile')
        } catch (err) {
            alert('Erro ao criar novo incidente!')
        }
    }
    return (
        <>
            <Header />
            <div className="new-incident-container">
                <div className="content">
                    <section>
                        <img src={logoImage} alt="Be The Hero" />
                        <h1>Cadastrar novo caso</h1>
                        <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                        <Link className="back-link" to="/profile">
                            <FiArrowLeft size={16} color="#e02041" />
                            Voltar para home
                    </Link>
                    </section>
                    <form onSubmit={handleNewIncident}>
                        <input
                            placeholder="Título do caso"
                            name="case-title"
                            id="case-title"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            required
                        />
                        <textarea
                            placeholder="Descrição"
                            name="case-description"
                            id="case-description"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            required
                        />
                        <input
                            placeholder="Valor em reais"
                            name="case-value"
                            id="case-value"
                            value={value}
                            onChange={e => setValue(e.target.value)}
                            required
                        />
                        <button className="button" type="submit">Cadastrar</button>
                    </form>
                </div>
            </div>
        </>
    )
}