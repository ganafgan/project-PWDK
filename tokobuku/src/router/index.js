import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Splash, GetStarted, Login, Register, UploadPhoto, Home, Cart, Dashboard, Account, ProductList, ProductDetail, Wishlist } from '../pages'
import { BottomNavigator } from '../components';


const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Cart" component={Cart} />
            <Tab.Screen name="Dashboard" component={Dashboard} />
            <Tab.Screen name="Account" component={Account} />
        </Tab.Navigator>
    )
}


const Router = () => {
    return (
        <Stack.Navigator initialRouteName='MainApp'>
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
        </Stack.Navigator>
    )
}

export default Router