
import styles from './Signup.module.css';
import InputControl from "./InputControl/InputControl";
import { Link,useNavigate } from "react-router-dom";
import {createUserWithEmailAndPassword,updateProfile} from "firebase/auth";
import {auth} from "../firebase";
import { useState } from "react";

function Signup(){
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    address: "",
    phone:"",
    email: "",
    pass: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.name || !values.address || !values.phone || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });

        const useraddress = res.useraddress;
        await updateProfile(useraddress, {
          displayName: values.address,
        });

        const userphone = res.userphone;
        await updateProfile(userphone, {
          displayName: values.phone,
        });
        
        navigate("/home");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };
    return(
        <div className={styles.container}>
        <div className={styles.innerBox}>
        <h1 className={styles.heading}>Signup</h1>
         
        <InputControl
          label="Name"
          placeholder="Enter your name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="address"
          placeholder="Enter your address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, address: event.target.value }))
          }
        />
        <InputControl
          label="phones"
          placeholder="Enter your phone"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, phone: event.target.value }))
          }
        />
        <InputControl
          label="Email"
          placeholder="Enter email address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Password"
          placeholder="Enter password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />
        
        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSubmission} disabled={submitButtonDisabled}>
              Login
              </button>
            <p>
            Already have an account?{" "}
            <span>
              <Link to="/signin">Login</Link>
            </span>
          </p>
         </div>
        </div>
        </div>
  );
}

export default Signup;