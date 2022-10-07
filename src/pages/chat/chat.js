import Pug from 'pug'
import tmpl from 'bundle-text:./chat.pug'
import './chat.scss'

document.querySelector('#root').innerHTML = tmpl;
