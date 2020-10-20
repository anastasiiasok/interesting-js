require('dotenv').config()
const express = require('express')

const app = express()
const path = require('path')
const hbs = require('hbs')
const dbConnect = require('./src/config/db')
const postRouter = require('./src/routes/posts') // Получили роутер новостей
const logger = require('./src/middleware/log')

// const seed = require('./seed')

const PORT = process.env.PORT || 3000
dbConnect()
// seed()

// Настройки
app.set('view engine', 'hbs') // Установили движок
// app.set('views', path.join(__dirname, 'src', 'views')) // Переопределили путь к hbs
app.set('views', path.join(process.env.PWD, 'src', 'views')) // Переопределили путь к hbs
hbs.registerPartials(path.join(process.env.PWD, 'src', 'views', 'partials')) // Переопределили путь к hbs partials

// Мидлвары
app.use(express.static('public')) // Научили express раздавать статику
app.use(logger)

// Роуты
app.use('/posts', postRouter) // Подключили роутер на новости

app.get('/', (req, res) => {
  res.render('main')
})

// Если запрос прошел все, то отдаем 404 страницу
app.use((req, res) => {
  res.render('404')
})

app.listen(PORT, () => {
  console.log('Server has been started on port: ', PORT)
})
