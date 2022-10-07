import Pug from 'pug'
import tmpl from 'bundle-text:./profile.pug'
import './profile.scss'

document.querySelector('#root').innerHTML = tmpl;
