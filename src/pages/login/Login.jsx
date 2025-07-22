import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import supabase from '../../../supabaseClient.js';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: formData.email,
                password: formData.password,
            });

            if (error) {
                setError(error.message);
                setSuccess('');
            } else {
                console.log('User session:', data);
                setSuccess('Login successful!');
                setError('');
                localStorage.setItem('authToken', data.session.access_token);
                navigate('/dashboard'); // Change this to your home/dashboard route
            }
        } catch (err) {
            console.error(err);
            setError('Login failed. Please try again.');
            setSuccess('');
        }
    };

    return (
        <>
            <section className="login-innerbanner">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="login-banner-text">
                                <h2>Login</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="login-sec">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={6}>
                            <div className="login_register">
                                <h3>Login</h3>
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Email"
                                        required
                                        aria-label="Email"
                                    />
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        placeholder="Password"
                                        required
                                        aria-label="Password"
                                    />
                                    <button type="submit" className="theme_dark">
                                        Login
                                    </button>
                                    {error && (
                                        <p style={{ color: 'red', textAlign: 'center' }} aria-live="polite">
                                            {error}
                                        </p>
                                    )}
                                    {success && (
                                        <p style={{ color: 'green', textAlign: 'center' }} aria-live="polite">
                                            {success}
                                        </p>
                                    )}
                                    <div className="text-center">
                                        <a href="#" className="right_link">
                                            Forgot Your Password?
                                        </a>
                                    </div>
                                    <div className="text-center">
                                        <Link to="/signup" className="create-account-link">
                                            Create an Account
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Login;
