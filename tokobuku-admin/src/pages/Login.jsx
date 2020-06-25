import React, { Component } from 'react'
import Axios from 'axios'

export default class Login extends Component {

    state = {
        loading : false
    }

    onLoginBtn = () => {
        this.setState({loading : true})

        const username = this.refs.username.value
        const password = this.refs.password.value
        const data = {
            username,
            password
        }
        if(username && password){
            Axios.post(`http://localhost:4000/auth/login`, data)
            .then((res)=>{
                console.log(res.data)
                localStorage.setItem('token', res.data.token)
                alert(res.data.message)
                window.location = `/product-list`
            })
            .catch((err)=>{
                alert(err.message)
            })
        }else{
            alert(`All form must be filled`)
        }
        this.setState({loading : false})
        this.refs.username.value = ''
        this.refs.password.value = ''
    }


    render() {
        return (
            <div className='container'>
                <div className='row mt-5 mb-5'>
                    <h2 className='mx-auto'>Selamat datang</h2>
                </div>
                <div className='row mt-5'>
                        <div className="card mb-3 mx-auto" style={{maxWidth: '540px'}}>
                            <div className="row no-gutters">
                                <div className="col-md-6">
                                    <img src={require('../assets/Logo/BookStoreLogo.png')} 
                                    className="" 
                                    style={{height:'100%',width:'300px'}}
                                    alt="..."/>
                                    {/* <img src="https://image.freepik.com/free-vector/group-young-people-posing-photo_52683-18823.jpg" 
                                    className="" 
                                    style={{height:'100%',width:'300px'}}
                                    alt="..."/> */}
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <h5 className="card-title ml-5 mb-5">Admin Login</h5>
                                        <input ref='username' type="text" className='form-control mb-3' placeholder='Input username'/>
                                        <input ref='password' type="text" className='form-control mb-5'placeholder='Input password'/>
                                        {
                                            this.state.loading === false ?
                                            <input onClick={this.onLoginBtn} type="button" className='btn btn-primary' value='Login' style={{width:'100%'}}/>
                                            :
                                            <input disabled type='button' className='btn btn-primary' value='Loading ...' style={{width:'100%'}}/>
                                        }
                                        {/* <div className='row mt-3'>
                                            <p className='mx-auto'>
                                                <Link to='/register'>
                                                    Register
                                                </Link>    
                                            </p>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}
