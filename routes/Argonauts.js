const argonautsRouter = require('express').Router()
const mysql = require('../db-config')


argonautsRouter.get('/', (req, res) => {
    mysql.query('SELECT * FROM argonauts', (err, result) => {
      if(err) {
        res.status(500).send('Error connect to datab')
      } else {
        res.status(200).json(result)
      }
    })
  })


  argonautsRouter.post('/', (req, res) => {
      const argoData = req.body.argo_name
      console.table(req.body)
      const sql = 'INSERT INTO argonauts (argo_name) VALUES (?)'
      mysql.query(sql, argoData, (err, result) => {
          if (err) {
              res.status(500).send('Error Post to the database')
          } else {
              console.log(result)
              res.status(200).json(result)
          }
      })
  })

  module.exports = argonautsRouter