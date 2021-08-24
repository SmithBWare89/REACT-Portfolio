import React, {useState} from 'react';
import '../../App.css';
import { Form, Container, Message } from 'semantic-ui-react';
const { Group, Input, TextArea, Button, Field } = Form;

export default function Contact() {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const {
        firstName,
        lastName,
        email,
        message 
    } = formState;

    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (evt) => {
        if (evt.target.name === 'email') {
            const isValid = re.test(String(evt.target.email).toLowerCase());
            !isValid
                ? setErrorMessage('Your email is invalid.')
                : setErrorMessage('');
        } 

        // If first name selected but input is empty
        evt.target.name === 'firstName' && !evt.target.value.length
            // Set error message
            ? setErrorMessage(`First name is required.`)
            // Else If
            : evt.target.name === 'lastName' && !evt.target.value.length
                ? setErrorMessage(`Last name is required.`)
                // Else If
                : evt.target.name === 'message' && !evt.target.value.length
                    ? setErrorMessage(`A message is required.`)
                    // Else If
                    : evt.target.name === 'email' && !evt.target.value.length
                        ? setErrorMessage(`An email is required.`)
                        // Else
                        : setErrorMessage('');

        setFormState({
            ...formState,
            [evt.target.name]: evt.target.value
        })
    }

    return (
        <Container>
            <h1 id="contact-header">Contact Me</h1>
            <Form
                onSubmit={'@mailto:smithwrestling89@gmail.com'}
            >
                <Group widths='equal'>
                    <Field
                        id='first-name'
                        control={Input}
                        label='First Name'
                        placeholder='First name'
                        name='firstName'
                        defaultValue={firstName}
                        onBlur={handleChange}
                    />
                    <Field
                        id='last-name'
                        control={Input}
                        label='Last Name'
                        name='lastName'
                        placeholder='Last name'
                        defaultValue={lastName}
                        onBlur={handleChange}
                    />
                </Group>
                <Field
                    id='message'
                    control={TextArea}
                    label='Message'
                    name='message'
                    placeholder='Message'
                    defaultValue={message}
                    onBlur={handleChange}
                />
                <Field
                    id='error-email'
                    control={Input}
                    label='Email'
                    name='email'
                    placeholder='joe@schmoe.com'
                    defaultValue={email}
                    onBlur={handleChange}
                />
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>

                )}
                <Message 
                    success
                    header='Form Completed'
                    content='Your information has been sent over!'
                />
                <Field
                    id='form-button-control-public'
                    control={Button}
                    content='Submit'
                    label='Submit'
                />
            </Form>
        </Container>
    )
}