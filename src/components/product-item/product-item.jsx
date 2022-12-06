import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Text from '../text/text';
import Rating from '@mui/material/Rating';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Select from "../select/select";
import { useState } from 'react';
import Button from '../button/button';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
    const [value, setValue] = useState(4);
    const [size, setSize] = useState([]);
    const [color, setColor] = useState([]);

    return <Grid 
                sx={{
                    maxWidth: '1080px',
                    margin: '0 auto'
                }}
                container spacing={2}>
                <Grid xs={12} md={6}>
                    <Box
                        sx={{
                            width: '100%',
                            padding: '5%',
                            boxSizing: 'border-box'
                        }}
                    >
                        <img 
                            style={{
                                width: '100%',
                            }}
                            src={product.image}/>
                    </Box>
                </Grid>
                <Grid xs={12} md={6}>
                    <Box
                        sx={{
                            width: '100%',
                            padding: '5%',
                            boxSizing: 'border-box'
                        }}
                    >
                        <Text
                            variant='h4'
                            component='h1'
                            text={product.name}
                        />
                        <Stack direction="row" spacing={1} sx={{
                            marginTop: 1,
                            marginBottom: 1
                        }}>
                            <Chip label="Roupas" />
                            <Chip label="Vestidos" />
                        </Stack>
                        <Stack direction="row" spacing={1}>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                        </Stack>

                        {
                            product.promo_price ? <span style={{
                                color: '#1976d2',
                                fontSize: '2em',
                                fontWeight: '500'
                            }}>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.promo_price)}</span> : ''
                        }
                        
                        <span style={{
                            color: product.promo_price ? '' : '#1976d2',
                            fontSize: product.promo_price ? '' : '2em',
                            fontWeight: product.promo_price ? '400' : '500',
                            marginLeft: product.promo_price ? '10px' : '',
                            textDecoration: product.promo_price ? 'line-through' : ''
                        }}>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}</span>

                        <Text
                            variant='p'
                            component='p'
                            text={product.description}
                            boxStyle={{
                                margin: '20px 0 0',
                            }}
                        />

                        <Stack direction="column" sx={{
                            marginTop: 1,
                            marginBottom: 1
                        }}>
                            <span style={{
                                marginTop: '15px'
                            }}>
                                <Select
                                    id="select-size"
                                    label={"Cores"}
                                    chips={true}
                                    value={size}
                                    onChange={setSize}
                                    options={[ 'PP', 'P', 'M', 'G', 'GG', 'XG', 'XXG' ]}
                                />
                            </span>
                            <span style={{
                                marginTop: '15px'
                            }}>
                                <Select
                                    id="select-color"
                                    label={"Tamanhos"}
                                    chips={false}
                                    value={color}
                                    onChange={setColor}
                                    options={[ 'Azul', 'Vermelho', 'Amarelo', 'Verde', 'Laranja' ]}
                                />
                            </span>
                        </Stack>
                        <Stack direction="row">
                            <Link to={`/cart`} style={{
                                width: '50%'
                            }}>
                                <Button
                                    title={'Comprar'}
                                    fullWidth={true}
                                    buttonStyle={{
                                        borderRadius: '0',
                                        margin: '0',
                                        float: 'left',
                                    }}
                                />
                            </Link>
                            <Link to={`/cart`} style={{
                                width: '50%'
                            }}>
                                <Button
                                    fullWidth={true}
                                    variant="outlined"
                                    title={'Adicionar'}
                                    buttonStyle={{
                                        borderRadius: '0',
                                        margin: '0',
                                        float: 'left'
                                    }}
                                />
                            </Link>
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
}

export default ProductItem;