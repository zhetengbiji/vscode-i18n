const path = require('path')
const i18n = require('../out/index')
const init = i18n.init
const locale = i18n.locale
const localize = i18n.localize

init(path.join(__dirname, 'i18n'))

console.log(`locale: ${locale}`)
console.log('hello:', localize('hello'))

