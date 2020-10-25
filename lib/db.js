const mysql = require('serverless-mysql')

const db = mysql({
  config: {
    host: '103.129.220.10',
    database: 'mataer',
    user: 'mataerdb',
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
