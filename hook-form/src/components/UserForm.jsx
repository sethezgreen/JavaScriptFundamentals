import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [firstNameError, setFirstNameError] = useState("")
    const [lastNameError, setLastNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")

    const createUser = (e) => {
        e.preventDefault()

        const newUser = {firstName, lastName, email, password, confirmPassword}
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
    }

    const handleFirstName = (e) => {
        setFirstName(e.target.value)
        if(e.target.value.length < 1) {
            setFirstNameError("First Name must not be blank!")
        } else if(e.target.value.length < 2) {
            setFirstNameError("First Name must be at least 2 characters")
        } else {
            setFirstNameError("")
        }
    }

    return (
        <>
            <form onSubmit={createUser}>
                <div>
                    <label>First Name:</label>
                    <input type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value)}/>
                    { firstNameError ? <p>{firstNameError}</p> : null}
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value)}/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" value={email} onChange={ (e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="text" value={password} onChange={ (e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="text" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value)}/>
                </div>
                <div>
                    {
                        firstNameError ?
                        <input type="submit" value="Submit" disabled/> :
                        <input type="submit" value="Submit" />
                    }
                </div>
            </form>

            <div>
                <p>Your Form Data</p>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </>
    )
}

export default UserForm