import styles from "./Signup.module.css";
import authImage from '../../assets/auth.gif';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useSignupMutation } from "../../feature/auth/authApi";
const Signup = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [signup, { data, isLoading, isError, error }] = useSignupMutation()
    const navigate = useNavigate();
    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error('Password does not match');
            return;
        }
        signup({ email, password, name });
        clearForm();
    };

    useEffect(() => {
        if (data) {
            toast.success('Signup successful');
            navigate('/');
        }
        if (isError) {
            toast.error(`${(error as any).data?.error}`);
        }
    }, [data, error, isError, navigate])
    const clearForm = () => {
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setName('');
    };

    return (
        <div>
            <div className={styles.wrapper_container}>
                <div>
                    <img src={authImage} alt="Sign up Images" />
                </div>
                <div className={styles.form_card_parent}>
                    <div className={styles.form_card}>
                        <h1>Sign Up</h1>
                        <form onSubmit={handleSubmit} >
                            <div className={styles.input_group}>
                                <label htmlFor="name">Name</label>
                                <input
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    type="text" name="name" id="name" />
                            </div>
                            <div className={styles.input_group}>
                                <label htmlFor="email">Email</label>
                                <input
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    type="email" name="email" id="email" />
                            </div>
                            <div className={styles.input_group}>
                                <label htmlFor="password">Password</label>
                                <input
                                    value={password}
                                    onChange={e => setPassword(e.target.value)} type="password" name="password" id="password" />
                            </div>
                            <div className={styles.input_group}>
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input
                                    value={confirmPassword}
                                    onChange={e => setConfirmPassword(e.target.value)} type="password" name="confirmPassword" id="confirmPassword" />
                            </div>
                            <div className={styles.buttons}>
                                <button disabled={isLoading} type="submit">Sign Up</button>
                                <Link to="/signin">Already user?</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Signup;