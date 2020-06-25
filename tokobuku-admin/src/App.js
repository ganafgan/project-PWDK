import React from 'react';
import { Route } from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register'
import TokoBukuNavbar from './components/Navbar';
import VerificationSuccess from './pages/VerificationSuccess';
import ProductList from './pages/ProductList';
import DashBoard from './pages/Dashboard';
import AllProduct from './pages/AllProduct';
import PostProduct from './pages/InputProduct';
import Transaction from './pages/Transaction';
import Payment from './pages/TransactionDetail';

class App extends React.Component{
	render(){
		return(
			
			<div>
				<Route exact path='/'>
					<Login/>
				</Route>

				<Route path='/register'>
					<Register/>
				</Route>

				<Route path='/dashboard'>
					<TokoBukuNavbar/>
					<DashBoard/>
				</Route>

				<Route path='/product'>
					<TokoBukuNavbar/>
					<AllProduct/>
				</Route>

				<Route path='/post'>
					<TokoBukuNavbar/>
					<PostProduct/>
				</Route>

				<Route path='/transaction'>
					<TokoBukuNavbar/>
					<Transaction/>
				</Route>

				<Route path='/payment'>
					<TokoBukuNavbar/>
					<Payment/>
				</Route>
				
			</div>
	)
	}
}

export default App