import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Home, Cart, Dashboard, Account } from '../pages';


const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Cart" component={Cart} />
            <Tab.Screen name="Dashboard" component={Dashboard} />
            <Tab.Screen name="Account" component={Account} />
        </Tab.Navigator>
    )
}

export default MainApp