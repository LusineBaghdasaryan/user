import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import useRoutes from "./components/routes";
import {ToastContainer, toast} from 'react-toastify';
import {useSelector} from "react-redux";

const App = () => {
    const {successMessage, error} = useSelector(state => state);
    const isAuth = !!localStorage.getItem('userData');

    const routes = useRoutes(isAuth);

    !!successMessage && toast.success(`${successMessage}`);

    !!error && toast.error(`${error}`);

    return (
        <div className="App d-flex justify-content-center mt-5">
            {routes}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover/>
        </div>

    );
}

export default App;
