var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  CONTENTFUL_SPACE_ID: '"st2w4t2u7h9u"',
  CONTENTFUL_ACCESS_TOKEN:
    '"6ea446be4294a1b10532d55ce88067fef62df2c0d636240b524a25da7d93a353"'
})
