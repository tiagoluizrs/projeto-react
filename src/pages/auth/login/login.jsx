import '../auth.css';

import { useState } from 'react';
import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';
import { Link } from 'react-router-dom';

import Logo from "../../../assets/img/logo.png";


import Button from "../../../components/button/button";
import TextField from "../../../components/textfield/textfield";
import Avatar from "../../../components/avatar/avatar";
import Text from "../../../components/text/text";
import Checkbox from "../../../components/checkbox/checkbox";

const Login = () => {
    const textFieldStyle = {
        width: "100%",
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkedState, setCheckedState] = useState(false);

    const login = () => {
        console.log(email);
        console.log(password);
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
                text="Efetue login"
                type="h2"
                style={{
                    color: "#3498db",
                    textAlign: 'center',
                    textTransform: 'uppercase'
                }}/>
            <TextField
                fullWidth={true}
                value={email}
                type="email"
                label="E-mail"
                id="email"
                onChange={(e) => setEmail(e.target.value) }
                textFieldStyle={textFieldStyle}
            />
            <TextField
                fullWidth={true}
                value={password}
                type="password"
                label="Senha"
                id="password"
                onChange={(e) => setPassword(e.target.value) }
                textFieldStyle={textFieldStyle}
            />
            <Checkbox 
                id="connected"       
                label={"Manter conectado"}
                checked={checkedState}
                onChange={() => setCheckedState(!checkedState)}
            />
           

            <Link to="/register" style={{
                textDecoration: null
            }}>
                <Button
                    buttonStyle={{
                        marginTop: '16px',
                    }}
                    variant={"text"}
                    uppercase={true}
                    size={"large"}
                    title={"Registrar"}
                    type={"button"}
                    fullWidth={true}/>
            </Link>

            <Button
                buttonStyle={{
                    marginTop: '16px',
                }}
                StartIcon={SendTwoToneIcon}
                uppercase={true}
                size={"large"}
                title={"Entrar"}
                type={"button"}
                fullWidth={true}
                onClick={login}/>
        </div>
}

export default Login;