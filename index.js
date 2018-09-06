import React from 'react'
import { render } from 'react-dom'
import Media from './src/playlist/components/media'


const app = document.getElementById('app')
// const holaMundo = <h1>Hola Mundo Como estas</h1>
render(<Media title="¿Qué es Responsive Design?" author="raulfbgomez" image="./images/covers/responsive.jpg" /> ,app)
