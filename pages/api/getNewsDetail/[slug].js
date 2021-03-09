// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const db = require('../../../lib/db')
const escape = require('sql-template-strings')

export default  async (req, res) => {

  let slug = req.query.slug
  const data = await db.query(escape`
    select * from news where slug = ${slug}
  `)

  // res.statusCode = 200
  res.json({ data: data})
}
