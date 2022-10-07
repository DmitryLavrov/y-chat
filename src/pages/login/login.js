import Pug from 'pug'
import tmpl from 'bundle-text:./login.pug'
import './login.scss'

//--------------------------
console.log('tmpl:', tmpl)
//--------------------------

document.querySelector('#root').innerHTML = tmpl;
