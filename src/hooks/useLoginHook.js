import { useState } from 'react';
import toast from 'react-hot-toast';
import useAuthContext from '../context/authContext';
import { useSaveUserContext } from '../context/saveDataContext';

const useLoginHook = () => {
    const [loading, setLoading] = useState(false);

    const { setAuthUser } = useAuthContext();
    const { usersStorage } = useSaveUserContext();


    const run = ({ username, password }) => {
        const success = handleErrors({ username, password });
        if (!success) return setLoading(false);
        try {
            const findUser = usersStorage.find((user) => user.username === username);
            if (!findUser) {
                setLoading(false)
                toast.error('Wrong username or password');
                return
            }
            if (findUser.password !== password) {
                setLoading(false)
                toast.error('Wrong username or passwordd');
                return
            }
            setAuthUser(findUser);
            localStorage.setItem('user', JSON.stringify(findUser));
            toast.success('login Successfuly')
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    const login = async (d) => {
        setLoading(true);
        setTimeout(() => run(d), 1000);
    };

    return { loading, login };
};

export default useLoginHook;



const handleErrors = ({ username, password }) => {
    if (!username || !password) {
        toast.error('Please fill all fields')
        return false;
    }
    return true;
}