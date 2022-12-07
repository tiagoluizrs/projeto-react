import Text from "../text/text";
import Grid from '@mui/material/Grid';
import Select from "../select/select";
import Button from "../button/button";
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = ({ product, key, quantity, del }) => {
    const {name, image, price} = product;
    return <Grid item xs={12} style={{
            padding: '5px',
            boxSizing: 'border-box'
        }}>
            <Stack direction={"row"}>
                <Stack style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    width: '100px',
                    height: '100px',
                    marginRight: '10px'
                }}/>
                <Stack style={{
                    justifyContent: 'center',
                    width: quantity && del ? '35%' : '70%'
                }}>
                    <Text
                        variant='h5'
                        component='p'
                        text={name}
                    />
                    <Text
                        variant='p'
                        component='p'
                        text='Size: G, Color: Blue'
                    />
                </Stack>
                {
                    quantity ? <Stack style={{
                        justifyContent: 'center',
                        width: '20%'
                    }}>
                        <Select
                            label="Quantidade"
                            chips={false} 
                            options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                        />
                    </Stack> : ""
                }
                <Stack style={{
                    justifyContent: 'center',
                    width: quantity && del ? '15%' : '20%',
                    alignItems: 'center'
                }}>
                    <Text
                        variant='p'
                        component='p'
                        text={new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)}
                    />
                </Stack>

                {
                    del ? <Stack style={{
                        justifyContent: 'center',
                        width: '10%',
                        alignItems: 'center'
                    }}>
                        <Button 
                            buttonStyle={{
                                width: '16px',
                            }}
                            color="error" 
                            Icon={DeleteIcon}/>
                    </Stack> : "" 
                }
            </Stack>
        </Grid>
}

Cart.defaultProps = {
    quantity: true,
    del: true
}

export default Cart;