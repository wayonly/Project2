import React from "react";
import styles from './Signin.module.css';
import InputControl from "./InputControl/InputControl";
import { Link } from "react-router-dom";



function Signin(){
    return(
        <div className={styles.container}>
        <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>

        <InputControl lebel ="email" placeholder="Enter email address" />
        <InputControl lebel ="Password" placeholder="Enter email Password" />
        
         <div className={styles.footer}>
            <button>Login</button>
            <p>
            Already have an account?{" "}
            <span>
              <Link to="/signup">Sign up</Link>
            </span>
          </p>
         </div>
        </div>
        </div>
  );
}

export default Signin;