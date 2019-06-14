import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Kategori from './Kategori';
import Anggota from './Anggota';
import Login from './Login';
import AddAnggota from './AddAnggota';


const AppContainer = createStackNavigator(
        {
            Kategori: {
            screen:Kategori,
        },
            Login:{
            screen:Login,
        },
            Anggota:{
            screen:Anggota,
        },
            AddAnggota:{
            screen:AddAnggota,
        },
    },
    {
            initialRouteName: "Login"
        }
        );
        const Menu = createAppContainer(AppContainer);
export default class App extends React.Component{
    render(){
        return <Menu />;
    }
}