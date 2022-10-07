import Pug from 'pug'
import tmpl from 'bundle-text:./register.pug'
import './register.scss'

document.querySelector('#root').innerHTML = tmpl;
