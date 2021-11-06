import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Contact.module.css'

export default function Contact() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [industry, setIndustry] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            name,
            email,
            industry,
            message,
        };
        fetch('/api/contact', {
            method: 'post',
            body: JSON.stringify(data),
        })
            .then(router.push('/Thanks'));
    };
    return (
        <main className={styles.root}>
            <h2 className={styles.heading}>
                Request a free consultation.
            </h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    type="text"
                    onChange={e => setName(e.target.value)}
                    required
                />
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    type="email"
                    onChange={e => setEmail(e.target.value)}
                    required

                //needs form validations
                />
                <label htmlFor="industry">Industry:</label>
                <input
                    id="industry"
                    type="text"
                    onChange={e => setIndustry(e.target.value)}
                    required
                />
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    type="text"
                    rows="8"
                    onChange={e => setMessage(e.target.value)}
                    required
                />
                <button type="submit">Send</button>
            </form>


        </main>
    )
}
