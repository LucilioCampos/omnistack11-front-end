import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'
import logoImage from '../../assets/logo.svg'
import './styles.css'


export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [city, setCity] = useState('')
    const [uf, setUf] = useState('')

    const history = useHistory()

    async function handleRegister(e) {
        e.preventDefault()
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        }

        try {
            const response = await api.post('ongs', data)
            alert(`Seu ID de acesso: ${response.data.id}`)
            history.push('/')
        } catch (err) {
            console.log(err)
            alert(`Erro no cadastro: ${err.message}`)
        }
    }



    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImage} alt="Be The Hero" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#e02041" />
                        Voltar para o logon
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input
                        placeholder="Nome da ONG"
                        name="ong-name"
                        id="ong-name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />

                    <input
                        placeholder="Email"
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <input
                        placeholder="WhatsApp"
                        type="phone"
                        name="whatsapp"
                        id="whatsapp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input
                            placeholder="UF"
                            name="uf" id="uf"
                            style={{ width: 80 }}
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />
                        <input
                            placeholder="Cidade"
                            name="city"
                            id="city"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>

                </form>
            </div>
        </div>
    )
}