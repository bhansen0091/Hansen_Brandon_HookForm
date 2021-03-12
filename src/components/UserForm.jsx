import React, { useState } from 'react';

const UserForm = props => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPass};
        console.log("Welcome", newUser);
    };

    return(
        <div className="container d-flex flex-column justify-content-center">
            <div className="col-6 align-self-center">
                <form onSubmit={ createUser } className="mt-5">
                    <div className="form-group row">
                        <label className="col-4 text-left col-form-label">First Name:</label>
                        <div className="col-8">
                        <input type="text" className="form-control" placeholder="First Name" onChange={ (e) => setFirstName(e.target.value)} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-4 text-left col-form-label">Last Name:</label>
                        <div className="col-8">
                        <input type="text" className="form-control" placeholder="Last Name" onChange={ (e) => setLastName(e.target.value)} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-4 text-left col-form-label">Email:</label>
                        <div className="col-8">
                        <input type="email" className="form-control" placeholder="Email" onChange={ (e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-4 text-left col-form-label">Password:</label>
                        <div className="col-8">
                        <input type="password" className="form-control" placeholder="Password" onChange={ (e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-4 text-left col-form-label">Confirm Password:</label>
                        <div className="col-8">
                        <input type="password" className="form-control" placeholder="Confirm Password" onChange={ (e) => setConfirmPass(e.target.value)} />
                        </div>
                    </div>
                </form>
            </div>
            <div className="align-self-center">
                <div>
                    <h3>Your Form Data</h3>
                    <p>First Name: {firstName}</p>
                    <p>Last Name: {lastName}</p>
                    <p>Email: {email}</p>
                    <p>Password: {password}</p>
                    <p>Confirm Password: {confirmPass}</p>
                </div>
            </div>
        </div>

    )

}

export default UserForm;