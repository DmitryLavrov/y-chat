import Pug from 'pug'
import tmpl from 'bundle-text:./404.pug'
import './404.scss'

document.querySelector('#root').innerHTML = tmpl;
