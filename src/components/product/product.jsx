import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Text from '../text/text';
import Button from '../button/button';
import Chip from '@mui/material/Chip';
import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const {
        id,
        image,
        name,
        price,
        promo_price,
        description
    } = product;


    return <Box
                sx={{
                    position: 'relative'
                }}
            >
             <div style={{
                width: '100%',
                height: '250px',
                backgroundPosition: 'top',
                backgroundSize: 'cover',
                backgroundImage: `url(${image})`
             }}/>
             {
                promo_price ? 
                <Chip 
                    style={{
                        position: 'absolute',
                        right: -10,
                        top: 10,
                    }}
                    label={(100 - (promo_price / price) * 100).toFixed(2) + "%"} 
                    color="primary" /> : ""
             }
             <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center'
             }}>
                {
                    promo_price ? <p style={{
                        fontSize: '1.4em',
                        marginRight: '5px'
                    }}>
                        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(promo_price)}
                    </p> : ''
                }
                <p style={{
                    fontSize: promo_price ? '1.2em' : '1.4em',
                    color: promo_price ? '#aaa' : '#000',
                    textDecoration: promo_price ? 'line-through' : 'none',
                }}>
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)}
                </p>
             </div>
             
             <Text
                variant='h5'
                component='p'
                text={name}
             />
             <Text
                variant='p'
                component='p'
                text={description.substr(0, 255)}
                boxStyle={{
                    margin: '20px 0',
                }}
             />
             <Link to={`/cart`}>
                <Button
                    title={'Comprar'}
                    buttonStyle={{
                        borderRadius: '0',
                        width: '50%',
                        margin: '0',
                        padding: '0',
                        float: 'left',
                        border: '1px solid #1976d2'
                    }}
                />
             </Link>
             <Link to={`/product/${id}`}>
                <Button
                    variant="outlined"
                    title={'VER'}
                    buttonStyle={{
                        borderRadius: '0',
                        width: '50%',
                        margin: '0',
                        padding: '0',
                        float: 'left'
                    }}
                />
             </Link>
            </Box>
}

Product.defaultPros = {
    image: null,
    name: "",
    price: 0.0,
    promo_price: 0.0,
    description: ""
}

Product.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    promo_price: PropTypes.number,
    description: PropTypes.string
}

export default Product;