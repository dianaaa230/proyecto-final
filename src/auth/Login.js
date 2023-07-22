import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from '../actions/userActions';
import "./estilosAuth.css";



export const Login = () => {
    const { loginWithRedirect, isAuthenticated, user, isLoading } = useAuth0();
    const dispatch = useDispatch();

    const handleLogin = async () => {
        try {
            await loginWithRedirect();
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (isAuthenticated && user) {
            dispatch(login(user));
        }
    }, [isAuthenticated, user, dispatch]);

    if (isLoading) {
        return (
            <main id="cargando">
                <img src="https://usagif.com/wp-content/uploads/loading-1.gif" alt="imagen_cargando"></img>
                <h5>Cargando...</h5>
            </main>
        )
    }

    return (
        <main id="cuerpo_login">
            <div class="row">
                <div id="login" class="col-lg-4 offset-lg-4 col-md-6 offset-md-3
                    col-12">
                    <h2 class="text-center" id="titulo_login">¡BIENVENIDO!</h2>
                    <img class="img-fluid mx-auto d-block rounded"
                        src='https://png.pngtree.com/thumb_back/fh260/background/20210920/pngtree-black-golden-award-ceremony-background-design-with-red-carpet-on-stage-image_905658.png' alt='Celebridad' />
                    <br></br>
                    <h3> <strong>Ingresa para conocer todo sobre celebridades</strong></h3>
                    <br></br>
                    <button type="button" class="btn btn-secondary" id="boton_login" onClick={handleLogin}>Iniciar Sesión</button>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </div>
            {/* <section>
                <h1 id="titulo_login">!BIENVENIDO!</h1>
            </section> */}
        </main>
    );
}

// export default Login