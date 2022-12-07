import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import CartComponent from '../../components/cart/cart';
import TextField from '../../components/textfield/textfield';
import Button from '../../components/button/button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const navigate = useNavigate();
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

    const finish = () => {
        navigate('/checkout')
    }

    return <Grid container spacing={2} style={{
        padding: '15px',
        boxSizing: 'border-box',
        margin: '0 auto',
        maxWidth: '1190px',
        width:' 100%'
    }}>
        <Grid item xs={12} sm={12} md={8} style={{
                border: '2px solid #ccc',
                boxSizing: 'border-box'
        }}>
            <Grid container spacing={2} style={{
                padding: '10px',
                boxSizing: 'border-box'
            }}>
            { cart.length > 0 ? 
                cart.map((product, idx) => {
                    return <CartComponent product={product}/>
                })
            : "Nenhum produto adicionado ao carrinho"}
            </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={1}/>
        <Grid item xs={12} sm={12} md={3} style={{
                border: '2px solid #ccc',
                boxSizing: 'border-box',
                padding: '10px'
        }}>
            <Stack direction={'column'} justifyContent='space-around' style={{
                height: '100%',
                justifyContent: 'space-between'
            }}>
                <Stack>
                    <TextField 
                        label="Cupom"
                        fullWidth={true} type="text"/>
                    <Button title="Aplicar" size='large' buttonStyle={{
                        marginTop: '8px'
                    }}/>
                </Stack>
                <Stack direction="column" style={{
                    width: '100%',
                    borderTop: '2px solid #ccc'
                }}>
                    <Stack direction={'row'}> 
                        <Stack style={{
                            width: '50%'
                        }}>
                            <ul style={{
                                listStyle: 'none',
                                paddingLeft: '0',
                                width: '100%',
                                textAlign: 'left'
                            }}>
                                <li>Subtotal</li>
                                <li>Desconto</li>
                                <li>Total</li>
                            </ul>
                        </Stack>
                        <Stack style={{
                            width: '50%'
                        }}>
                            <ul style={{
                                listStyle: 'none',
                                paddingLeft: '0',
                                width: '100%',
                                textAlign: 'right'
                            }}>
                                <li>R$ 500,00</li>
                                <li>R$ 50,00</li>
                                <li><strong>R$ 450,00</strong></li>
                            </ul>
                        </Stack>
                    </Stack>
                    <Button title="Finalizar pedido" onClick={finish}/>
                </Stack>
            </Stack>
        </Grid>
    </Grid>
}

export default Cart;