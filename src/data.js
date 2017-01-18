/**
 * Created by ebinhon on 1/5/2017.
 */
import React from 'react'
import Home from 'material-ui/svg-icons/action/home'
import GridOn from 'material-ui/svg-icons/image/grid-on'
import PermIdentity from 'material-ui/svg-icons/action/perm-identity'
import Web from 'material-ui/svg-icons/av/web'

const data = {
  menus: [
    { text: 'Home', icon: <Home />, link: '/' },
    { text: 'To Do App', icon: <Web />, link: '/todo' },
    { text: 'Menu 1', icon: <GridOn />, link: '/' },
    { text: 'Menu 2', icon: <PermIdentity />, link: '/' }
  ],
}

export default data
