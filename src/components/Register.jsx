import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth , db} from "./firebase";
import { Link } from "react-router-dom";
import {setDoc, doc} from "firebase/firestore";
import { toast } from "react-toastify";


export function Register() {
    const [fName, setFname] = useState("");
    const [lName, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();  // fixed typo here
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            console.log(user);
            if(user){
                await setDoc(doc(db, "Users",user.uid),{
                    email:user.email,
                    firstName: fName,
                    lastName:lName
                });
            }
            console.log("User is registered successfully");
            toast.success("User Registered successfully!!",{
                position:"top-center",
            });
            }catch (err) {
            console.log(err.message);
             toast.success(err.message,{
                position:"bottom-center",
            });
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card shadow p-4" style={{ minWidth: "500px", borderRadius: "1rem" }}>
                <h2 className="text-center text-primary mb-4">Sign Up</h2>

                <form onSubmit={handleRegister}>
                    <div className="mb-3 d-flex align-items-center">
                        <label className="me-3 mb-0" style={{ width: "120px" }}>First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter first name"
                            onChange={(e) => setFname(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3 d-flex align-items-center">
                        <label className="me-3 mb-0" style={{ width: "120px" }}>Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter last name"
                            onChange={(e) => setLname(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3 d-flex align-items-center">
                        <label className="me-3 mb-0" style={{ width: "120px" }}>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3 d-flex align-items-center">
                        <label className="me-3 mb-0" style={{ width: "120px" }}>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="d-grid mt-3">
                        <button type="submit" className="btn btn-primary">Register</button>
                    </div>

                    <p className="mt-3 text-center">
                        Already have an account? <Link to="/login">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
