import { useEffect, useState } from "react";
import { get } from "../../services/request";
import Grid from '@mui/material/Grid';

const Catalog = () => {
    const [catalog, setCatalog] = useState([]);

    const loadData = async () => {
        const response = await get("https://demo8462142.mockable.io/products");
        setCatalog(response.data)
    }

    useEffect(() => {
        loadData();
    }, [])

    return <Grid container spacing={2}>
        { catalog.length > 0 ? 
            catalog.map(product => {
                return <Grid item xs={12} sm={6} md={4} lg={3}>
                          <img 
                            src={product.image}
                            style={{
                                width: "100%"
                            }}
                          />
                          <h3>{product.name}</h3>
                          <h4>{product.price}</h4>
                          <h4>{product.promo_price}</h4>
                          <p>{product.description}</p>
                       </Grid>
            })
        : "Nenhum produto encontrado"}
    </Grid>
}

export default Catalog;