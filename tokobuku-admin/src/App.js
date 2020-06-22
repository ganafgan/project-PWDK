import React from 'react';
import { Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

import Login from './pages/Login';
import Register from './pages/Register'
import VerificationSuccess from './pages/VerificationSuccess';
import ProductList from './pages/ProductList';

class App extends React.Component{
	render(){
		return(
			<BrowserRouter>
			
				<Route  exact path='/'>
					<Login/>
				</Route>

				<Route path='/register'>
					<Register/>
				</Route>

				<Route path='/verification-success'>
					<VerificationSuccess/>
				</Route>

				<Route path='/product-list'>
					<ProductList/>
				</Route>
			</BrowserRouter>
	)
	}
}

export default App