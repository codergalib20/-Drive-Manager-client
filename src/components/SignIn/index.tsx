import styles from './SignIn.module.css';
import authImage from '../../assets/auth.gif';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useSigninMutation } from '../../feature/auth/authApi';

const SignIn = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [signin, { data, isLoading, isError, error }] = useSigninMutation()
    const navigate = useNavigate();
    const handleSubmit = (e: any) => {
        e.preventDefault();
        signin({ email, password });
        clearForm();
    };

    useEffect(() => {
        if (data) {
            toast.success('Signin successful');
            navigate('/');
        }
        if (isError) {
            toast.error(`${(error as any).data?.error}`);
        }
    }, [data, error, isError, navigate])
    const clearForm = () => {
        setEmail('');
        setPassword('');
    };
    return (
        <div>
            <div className={styles.wrapper_container}>
                <div>
                    <img src={authImage} alt="Sign up Images" />
                </div>
                <div className={styles.form_card_parent}>
                    <div className={styles.form_card}>
                        <h1>Sign In</h1>
                        <form onSubmit={handleSubmit} >
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
                                    onChange={e => setPassword(e.target.value)}
                                    type="password" name="password" id="password" />
                            </div>
                            <div className={styles.buttons}>
                                <button disabled={isLoading} type="submit">Sign In</button>
                                <Link to="/signup">Are you new user?</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SignIn;