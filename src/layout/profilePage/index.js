import Handlebars from 'handlebars'

import tmpl from 'bundle-text:./profilePage.hbs'
import './profilePage.scss'

export const render = Handlebars.compile(tmpl)
