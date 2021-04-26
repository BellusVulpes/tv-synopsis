const { response } = require('express')
const express = require('express')
const { seasons } = require('./showdata')
const showData = require('./showdata')

const app = express()

app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/', (request, response) => {
  response.render('index', { showData })
})

app.get('/season/:number', (request, response) => {
  const season = seasons.find((seasons) => { return seasons.number === parseInt(request.params.number) })

  return response.render('seasons', { season })
})

app.all('*'), (request, response) => {
  return request.sendStatus(404)
}

app.listen(8080, () => {
  console.log('listening on 8080...') // eslint-disable-line no-console
})
