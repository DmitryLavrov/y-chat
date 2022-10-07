import Pug from 'pug'
import tmpl from 'bundle-text:./500.pug'
import './500.scss'

document.querySelector('#root').innerHTML = tmpl;
