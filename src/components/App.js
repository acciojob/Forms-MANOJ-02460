import React, { useRef, useState } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

const inputStyle = {
    width: '100%',
    padding: '0.85rem 1rem',
    marginBottom: '1rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    boxSizing: 'border-box'
};

const formStyle = {
    width: '100%',
    maxWidth: '420px',
    padding: '2rem',
    borderRadius: '1rem',
    backgroundColor: '#ffffff',
    boxShadow: '0 10px 30px rgba(15, 23, 42, 0.08)'
};

const buttonStyle = {
    width: '100%',
    padding: '0.9rem',
    border: 'none',
    borderRadius: '0.5rem',
    background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
    color: '#ffffff',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer'
};

const baseFields = (
    <>
        <input id='full_name' name='full_name' type='text' placeholder='Full Name' style={inputStyle} />
        <input id='email' name='email' type='email' placeholder='Email' style={inputStyle} />
        <input id='password' name='password' type='password' placeholder='Password' style={inputStyle} />
        <input id='password_confirmation' name='password_confirmation' type='password' placeholder='Confirm Password' style={inputStyle} />
    </>
);

const SectionOneForm = () => (
    <form id='info-form' style={formStyle}>
        {baseFields}
        <button type='submit' style={buttonStyle}>Submit</button>
    </form>
);

const SectionTwoForm = () => {
    const fullNameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            full_name: fullNameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: confirmPasswordRef.current.value
        };
        console.log(data);
    };

    return (
        <form id='info-form' onSubmit={handleSubmit} style={formStyle}>
            <input ref={fullNameRef} id='full_name' name='full_name' type='text' placeholder='Full Name' style={inputStyle} />
            <input ref={emailRef} id='email' name='email' type='email' placeholder='Email' style={inputStyle} />
            <input ref={passwordRef} id='password' name='password' type='password' placeholder='Password' style={inputStyle} />
            <input ref={confirmPasswordRef} id='password_confirmation' name='password_confirmation' type='password' placeholder='Confirm Password' style={inputStyle} />
            <button type='submit' style={buttonStyle}>Submit</button>
        </form>
    );
};

const SectionThreeForm = () => {
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <form id='info-form' onSubmit={handleSubmit} style={formStyle}>
            <input id='full_name' name='full_name' type='text' placeholder='Full Name' value={formData.full_name} onChange={handleChange} style={inputStyle} />
            <input id='email' name='email' type='email' placeholder='Email' value={formData.email} onChange={handleChange} style={inputStyle} />
            <input id='password' name='password' type='password' placeholder='Password' value={formData.password} onChange={handleChange} style={inputStyle} />
            <input id='password_confirmation' name='password_confirmation' type='password' placeholder='Confirm Password' value={formData.password_confirmation} onChange={handleChange} style={inputStyle} />
            <button type='submit' style={buttonStyle}>Submit</button>
        </form>
    );
};

const App = () => (
    <BrowserRouter>
        <div style={{ minHeight: '100vh', background: '#f3f4f6', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem 1rem' }}>
            <nav style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                <Link to='/' id='form-link' style={{ textDecoration: 'none', color: '#1f2937', fontWeight: '600' }}>Section 1</Link>
                <Link to='/form-ref' id='form-ref-link' style={{ textDecoration: 'none', color: '#1f2937', fontWeight: '600' }}>Section 2</Link>
                <Link to='/form-state' id='form-state-link' style={{ textDecoration: 'none', color: '#1f2937', fontWeight: '600' }}>Section 3</Link>
            </nav>

            <Switch>
                <Route exact path='/' component={SectionOneForm} />
                <Route path='/form-ref' component={SectionTwoForm} />
                <Route path='/form-state' component={SectionThreeForm} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default App;