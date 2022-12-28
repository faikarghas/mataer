const mysql = require('serverless-mysql')

const db = mysql({
  config: {
    host: '103.28.53.75',
    database: 'mataerc1_mataer',
    user: 'mataerc1_dev',
    password: 'hAueqH8z^Y)5',
    port: '3306'
  }
})

exports.query = async query => {
  try {
    const results = await db.query(query)
    await db.end()
    return results
  } catch (error) {
    return { error }
  }
}
