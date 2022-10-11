import Handlebars from 'handlebars'

import tmpl from 'bundle-text:./formPage.hbs'
import './formPage.scss'

export const render = Handlebars.compile(tmpl)
