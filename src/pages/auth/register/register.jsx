import '../auth.css';
import { useState } from 'react';
import SendTwoToneIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';

import Logo from "../../../assets/img/logo.png";

import Button from "../../../components/button/button";
import TextField from "../../../components/textfield/textfield";
import Avatar from "../../../components/avatar/avatar";
import Text from "../../../components/text/text";

const Register = () => {
    const textFieldStyle = {
        width: "100%",
    }

    const [username, setUsername] = useState({
        value: '',
        error: null
    });
    const [email, setEmail] = useState({
        value: '',
        error: null
    });
    const [password, setPassword] = useState({
        value: '',
        error: null
    });
    const [confirmPassword, setConfirmPassword] = useState({
        value: '',
        error: null
    });

    const verifyIsEmpty = (field, setState, state, message) => {
        if(field === ""){
            setState({ ...state, error: [message] })
            return true;
        }
        setState({ ...state, error: null })
        return false;
    }

    const validaEmail = (email) => {
        console.log(email)
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    const register = () => {
        let isEmptyUsername = verifyIsEmpty(username.value, setUsername, username, { text: "O campo username é obrigatório.", type: "warning"});
        let isEmptyEmail = verifyIsEmpty(email.value, setEmail, email, {text: "O campo e-mail é obrigatório.", type: "warning"});
        let isEmptyPassword = verifyIsEmpty(password.value, setPassword, password, {text:"O campo senha é obrigatório.", type: "warning"});
        let isEmptyPasswordConfirm = verifyIsEmpty(confirmPassword.value, setConfirmPassword, confirmPassword, {text: "O campo confirme sua senha é obrigatório.", type: "warning"});
        if(!isEmptyUsername){
            setUsername({
                ...username,
                error: username.value.length >= 6 ? null : [{
                    text: "O nome de usuário precisa ter mais de 5 dígitos",
                    type: "error"
                }, {
                    text: "Teste",
                    type: "warning"
                }]
            })
        }
        
        if(!isEmptyEmail){
            setEmail({
                ...email,
                error: validaEmail(email.value) ? null : [{text: "E-mail inválido", type: "warning"}]
            })
        }

        if(!isEmptyPassword && !isEmptyPasswordConfirm){
            setConfirmPassword({
                ...confirmPassword,
                error: password.value === confirmPassword.value ? null : [{text: "As senhas não coincidem", type: "warning"}]
            })
        }
    }

    return <div style={{
        width: "100%",
        maxWidth: "400px",
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '1em',
        paddingRight: '1em',
        boxSizing: 'border-box',
        marginTop: '3em'
    }}> 
            <Avatar
                image={Logo}
                style={{
                    width: '100px',
                    margin: '2em auto',
                    display: 'block'
                }}
            />
            <Text
                text="Efetue registro"
                type="h2"
                style={{
                    color: "#3498db",
                    textAlign: 'center',
                    textTransform: 'uppercase'
                }}/>
            <TextField
                fullWidth={true}
                value={username.value}
                type="username"
                label="Usuário"
                id="username"
                onChange={(e) => {
                    setUsername({
                        ...username,
                        value: e.target.value,
                    })
                }}
                textFieldStyle={textFieldStyle}
                error={username.error}
            />
            
            <TextField
                fullWidth={true}
                value={email.value}
                type="email"
                label="E-mail"
                id="email"
                onChange={(e) => {
                    setEmail({
                        ...email,
                        value: e.target.value
                    })
                } }
                textFieldStyle={textFieldStyle}
                error={email.error}
            />
            <TextField
                fullWidth={true}
                value={password.value}
                type="password"
                label="Senha"
                id="password"
                onChange={(e) => {
                    setPassword({
                        ...password,
                        value: e.target.value
                    })
                } }
                textFieldStyle={textFieldStyle}
                error={password.error}
            />
            <TextField
                fullWidth={true}
                value={confirmPassword.value}
                type="password"
                label="Confirme sua senha"
                id="confirm-password"
                onChange={(e) => {
                    setConfirmPassword({
                        ...confirmPassword,
                        value: e.target.value
                    })
                } }
                textFieldStyle={textFieldStyle}
                error={confirmPassword.error}
            />
            <Link to="/login" style={{
                textDecoration: null
            }}>
                <Button
                    buttonStyle={{
                        marginTop: '16px',
                    }}
                    variant={"text"}
                    uppercase={true}
                    size={"large"}
                    title={"Entrar"}
                    type={"button"}
                    fullWidth={true}/>
            </Link>
            <Button
                buttonStyle={{
                    textTransform: "uppercase",
                    color: "#fff",
                    backgroundColor: "#3498db",
                    width: "100%",
                    marginTop: '16px',
                    padding: '10px 5px'
                }}
                // StartIcon={SendTwoToneIcon}
                uppercase={true}
                title={"Registrar"}
                type={"button"}
                onClick={register}/>
        </div>
}

export default Register;