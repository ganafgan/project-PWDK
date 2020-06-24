import React, { useEffect, useState } from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Splash, GetStarted, Login, Register, UploadPhoto, Home, Cart, Dashboard, Account, ProductList, ProductDetail, Wishlist, About, Help, TransactionDetail, Transaction, EditProfile, Otp, ForgotPassword, ResetPassword } from '../pages'
import { BottomNavigator } from '../components';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux'
import { saveUserData } from './../redux/actions/userAction'


const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();
const TabTop = createMaterialTopTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Cart" component={Cart} />
            <Tab.Screen name="Dashboard" component={MyTab} />
            <Tab.Screen name="Account" component={Account} />
        </Tab.Navigator>
    )
}

const MyTab = () => {
    return(
        <TabTop.Navigator>
            <TabTop.Screen name='Wishlist' component={Wishlist} />
            <TabTop.Screen name='Transaction' component={Transaction} />
        </TabTop.Navigator>
    )
}

const InitialRouter = () => {
    return(
        
        <Stack.Navigator initialRouteName='GetStarted' >
            <Stack.Screen name='Splash' component={Splash} options={{headerShown: false}} />
            <Stack.Screen name='GetStarted' component={GetStarted} options={{headerShown: false}} />
            <Stack.Screen name='Login' component={Login} options={{headerShown: false}} />
            <Stack.Screen name='Register' component={Register} options={{headerShown: false}} />
            <Stack.Screen name='UploadPhoto' component={UploadPhoto} options={{headerShown: false}} />
            <Stack.Screen name='MainApp' component={MainApp} options={{headerShown:false}} />
            <Stack.Screen name='Cart' component={Cart} options={{headerShown: false}} />
            <Stack.Screen name='Account' component={Account} options={{headerShown: false}} />
            <Stack.Screen name='ProductList' component={ProductList} options={{headerShown: false}} />
            <Stack.Screen name='ProductDetail' component={ProductDetail} options={{headerShown: false}} />
            <Stack.Screen name='Wishlist' component={Wishlist} options={{headerShown: false}} />
            <Stack.Screen name='About' component={About} options={{headerShown: false}} />
            <Stack.Screen name='Help' component={Help} options={{headerShown: false}} />
            <Stack.Screen name='MyTab' component={MyTab} options={{headerShown: false}} />
            <Stack.Screen name='TransactionDetail' component={TransactionDetail} options={{headerShown: false}} />
            <Stack.Screen name='Transaction' component={Transaction} options={{headerShown: false}} />
            <Stack.Screen name='EditProfile' component={EditProfile} options={{headerShown: false}} />
            <Stack.Screen name='Otp' component={Otp} options={{headerShown: false}} />
            <Stack.Screen name='ForgotPassword' component={ForgotPassword} options={{headerShown: false}} />
            <Stack.Screen name='ResetPassword' component={ResetPassword} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}


const Router = (props) => {

    const [splash, setSplash] = useState(false)


    useEffect(()=>{
        setSplash(true)
        AsyncStorage.getItem('data_user', (err,result) => {
            if(err) console.log(err)
            if(result){
                var data = JSON.parse(result)
                props.saveUserData(data)
                console.log(props.user)
                setSplash(false)
            }else{
                setSplash(false)
            }
        })
        },[] )



    if(splash) return <Splash/>
    if(props.user){
        return InitialRouter('MainApp')
    }else{
        return InitialRouter('GetStarted')}
    
}

const mapStateToProps = (state) => {
    return{
        user : state.user
    }
}

export default connect(mapStateToProps,{saveUserData})(Router)