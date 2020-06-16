import React from 'react'
import { Splash } from '../pages'
import MainApp from './MainNavigationRouter'
import Router from './RegisterLoginRouter'


class InitialRouter extends React.Component{

    //UNTUK SEMENTARA UBAH STATE USER DULU BUAT PINDAH KE PAGE LOGIN REGISTER / MAIN APLIKASI

    state = {
        user : true,
        loading : false
    }

    render(){
            if(this.state.loading) return <Splash/>
            return this.state.user ? <MainApp/> : <Router/>
    }
}

export default InitialRouter