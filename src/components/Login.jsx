import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {auth} from "./firebase";
import {toast} from "react-toastify";

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit =async (e) =>{
        e.preventDefault();
        try{
            await signInWithEmailAndPassword(auth,email,password);
            console.log("User logged in successfully!");
            window.location.href="/profile";
            toast.success("User logged in successfully!!",{
                            position:"top-center",
                        });
        }
        catch(err){console.log(err.message);
        toast.success(err.message,{
                            position:"bottom-center",
                        });

        }

    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card shadow p-4" style={{ minWidth: "400px", borderRadius: "1rem" }}>
                <h2 className="text-center mb-4 text-primary">Login</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3 d-flex align-items-center">
                        <label htmlFor="email" className="form-label me-3 mb-0" style={{ width: "120px" }}>
                            Email:
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-3 d-flex align-items-center">
                        <label htmlFor="password" className="form-label me-3 mb-0" style={{ width: "120px" }}>
                            Password:
                        </label>
                        <input
                            id="password"
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="d-grid mt-3">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>

                    <p className="mt-3 text-center">
                        Don’t have an account? <Link to="/register">Register here</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
