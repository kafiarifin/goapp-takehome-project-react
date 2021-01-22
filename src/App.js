import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  ChakraProvider,
  Box,
  Grid,
} from '@chakra-ui/react';

import customTheme from "./styles/theme";
import Navbar from './components/molecules/Navbar/Navbar';
import { WithErrors } from './hocs/WithErrors';
import { HomeContainer } from './containers/HomeContainer';
import { LoginContainer } from './containers/LoginContainer';
import { CatalogContainer } from './containers/CatalogContainer';
import { ProductDetailContainer } from './containers/ProductDetailContainer';

export const App = () => (

  <ChakraProvider theme={customTheme}>
    <Navbar />
    <Box fontSize="xl">
      <Grid minH="80vh" p={3}>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/catalog" component={CatalogContainer} />
          <Route exact={false} path="/product/:id" component={ProductDetailContainer} />
          <Route exact path="/login" component={LoginContainer} />
        </Switch>
      </Grid>
    </Box>
  </ChakraProvider>
)

export default WithErrors(App)