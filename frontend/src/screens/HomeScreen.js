import React from 'react'
import Product from './../components/Product'
import products from './../products'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';


const HomeScreen = () => {
    return (
        <Container maxWidth="lg">
            <h1>Lattest Products</h1>
            <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
            {
                products.map(product => (
                    <Product product={product} />
                ))
            }
            </Grid>
            </Grid>
        </Container>
    )
}

export default HomeScreen
