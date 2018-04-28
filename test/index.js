const path = require('path')
const i18n = require('../out/index')
const locale = i18n.locale
const localize = i18n.Localize(path.join(__dirname, 'i18n'))

console.log(`locale: ${locale}`)
console.log('hello:', localize('hello'))
