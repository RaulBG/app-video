import React from 'react'
import { render } from 'react-dom'
// import Playlist from './src/playlist/components/playlist'
import Home from '../pages/containers/home'
import data from '../api.json'


const app = document.getElementById('app')
// const holaMundo = <h1>Hola Mundo Como estas</h1>
render(<Home data={data} />, app)
