import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import supabase from '../../../supabaseClient.js';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        password: '',
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data, error } = await supabase.auth.signUp({
                email: formData.email,
                password: formData.password,
                options: {
                    data: {
                        full_name: formData.name,
                        phone: formData.number,
                    },
                },
            });

            if (error) {
                setError(error.message);
                setSuccess('');
            } else {
                // Check if session exists (email confirmation might be required)
                if (data.session) {
                    localStorage.setItem('authToken', data.session.access_token);
                    navigate('/dashboard'); // Redirect if immediately logged in
                } else {
                    setSuccess('Signup successful! Please check your email to verify your account.');
                }
                setError('');
            }
        } catch (err) {
            console.error(err);
            setError('Signup failed. Please try again.');
            setSuccess('');
        }
    };

    return (
        <>
            <section className="signup-innerbanner">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="signup-banner-text">
                                <h2>Signup</h2>
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
                                <h3>Sign Up</h3>
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Full Name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="number"
                                        placeholder="Phone Number"
                                        value={formData.number}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <button type="submit" className="theme_dark">Signup</button>
                                    {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
                                    {success && <p style={{ color: 'green', textAlign: 'center' }}>{success}</p>}
                                    <div className="login-btn text-center">
                                        <p>Already have an Account? <Link to='/login' className="create-account-link">Login</Link></p>
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

export default Signup;
