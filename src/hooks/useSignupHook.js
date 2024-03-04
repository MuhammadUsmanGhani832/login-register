import { useState } from 'react';
import toast from 'react-hot-toast';
import useAuthContext from '../context/authContext';
import { useSaveUserContext } from '../context/saveDataContext';

const useSignupHook = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();
    const { usersStorage, setUsersStorage } = useSaveUserContext();

    const run = ({ firstName, lastName, email, username, password, confirmPassword }) => {
        const success = handleErrors({ firstName, lastName, email, username, password, confirmPassword });
        if (!success) return setLoading(false);

        const findUser = usersStorage.find((user) => user.username === username);
        if (findUser) {
            setLoading(false)
            toast.error('username already exist');
            return
        }
        try {
            const data = { firstName, lastName, email, username, password, confirmPassword, auth: true }
            setUsersStorage(data, usersStorage);
            setAuthUser(data);
            localStorage.setItem('user', JSON.stringify(data));
            toast.success('signup Successfuly')
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    const signup = async (d) => {
        setLoading(true);
        setTimeout(() => run(d), 1000);
    };

    return { loading, signup };
};

export default useSignupHook;



const handleErrors = ({ firstName, lastName, email, username, password, confirmPassword }) => {
    if (!firstName || !lastName || !email || !username || !password || !confirmPassword) {
        toast.error('Please fill all fields')
        return false;
    }
    if (password !== confirmPassword) {
        toast.error("Password does not match!")
        return false;
    }
    if (username.length < 6) {
        toast.error("username must be 6 charactor")
        return false;
    }
    if (password.length < 6) {
        toast.error("username must be 6 charactor")
        return false;
    }
    return true;
}