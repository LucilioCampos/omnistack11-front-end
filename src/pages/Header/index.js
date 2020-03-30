import React from 'react';
import { Link, useHistory } from 'react-router-dom'

import { FiPower } from 'react-icons/fi'

import logoImage from '../../assets/logo.svg'

import { getOngName } from '../../services/api'

import './styles.css'

export default function Header({ showCreate=false }) {

    const history = useHistory()

    async function handleLogout() {
        localStorage.clear();
        history.push('/')        
    }

    return (
        <div className="header-container">
            <header>
                <img src={logoImage} alt="Be The Hero" />
                <span>Bem vindo, {getOngName}</span>

                { showCreate && (
                    <>
                     <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                     <button onClick={handleLogout} type="button">
                         <FiPower size={18} color="#e02041" />
                     </button>
                     </>
                )}
               
            </header>
        </div>

    )
}