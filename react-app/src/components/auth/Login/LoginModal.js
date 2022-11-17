import React from 'react';
import { useState } from 'react';
import { Modal } from '../../../context/Modal';
import LoginForm from './LoginForm';
import "./LoginModal.css";

export default function LoginFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div id="login-button" onClick={() => setShowModal(true)}>Log in</div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)} >
                    <LoginForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}