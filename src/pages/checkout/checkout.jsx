import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import CartComponent from '../../components/cart/cart';
import Button from '../../components/button/button';
import TextField from "../../components/textfield/textfield";

const Checkout = () => {
    const [cart, setCart] = useState([]);

    const loadData = async () => {
        let cartLocal = window.localStorage.getItem('cart');
        if(cartLocal){
            cartLocal = JSON.parse(cartLocal)
            setCart(cartLocal)
        }
    }

    useEffect(() => {
        loadData();
    }, [])

    return <Grid container spacing={2} style={{
                padding: '15px',
                boxSizing: 'border-box',
                margin: '0 auto',
                maxWidth: '1190px',
                width:' 100%'
            }}>
            <Grid item xs={12} sm={12} md={7} style={{
                    border: '2px solid #ccc',
                    boxSizing: 'border-box',
            }}>
                <Grid container spacing={2} style={{
                    padding: '14px'
                }}>
                    <Grid xs={12} sm={12} md={6} style={{
                        padding: '2px',
                        boxSizing: 'border-box',
                    }}>
                        <TextField 
                            type="text"
                            label="Nome"
                            fullWidth={true}
                        />
                    </Grid>
                    <Grid xs={12} sm={12} md={6} style={{
                        padding: '2px',
                        boxSizing: 'border-box',
                    }}>
                        <TextField 
                            type="text"
                            label="Sobrenome"
                            fullWidth={true}
                        />
                    </Grid>
                    <Grid xs={12} style={{
                        padding: '2px',
                        boxSizing: 'border-box',
                    }}>
                        <TextField 
                            label="E-mail"
                            type="email"
                            fullWidth={true}
                        />
                    </Grid>
                    <Grid xs={12} style={{
                        padding: '2px',
                        boxSizing: 'border-box',
                    }}>
                        <TextField 
                            type="tel"
                            label="Celular"
                            fullWidth={true}
                        />
                    </Grid>
                    <Grid xs={12} sm={12} md={9} style={{
                        padding: '2px',
                        boxSizing: 'border-box',
                    }}>
                        <TextField 
                            type="text"
                            label="Endereço"
                            fullWidth={true}
                        />
                    </Grid>
                    <Grid xs={12} sm={12} md={3} style={{
                        padding: '2px',
                        boxSizing: 'border-box',
                    }}>
                        <TextField 
                            type="text"
                            label="Número"
                            fullWidth={true}
                        />
                    </Grid>
                    <Grid xs={12} sm={12} md={3} style={{
                        padding: '2px',
                        boxSizing: 'border-box',
                    }}>
                        <Button title="Pagar" buttonStyle={{
                            marginTop: '14px'
                        }}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={5} style={{
                    border: '2px solid #ccc',
                    boxSizing: 'border-box',
                    padding: '10px'
            }}>
                <Grid container spacing={2} style={{
                    padding: '10px',
                    boxSizing: 'border-box'
                }}>
                    { cart.length > 0 ? 
                        cart.map((product, idx) => {
                            return <CartComponent quantity={false} del={false} product={product}/>
                        })
                    : "Nenhum produto adicionado ao carrinho"}
                </Grid>
            </Grid>
        </Grid>
}

export default Checkout;