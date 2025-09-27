import http from 'http'

const url = process.argv[2] || 'http://127.0.0.1:3005/api/projects/1748573498540'

http.get(url, (res) => {
  console.log('STATUS', res.statusCode)
  console.log('HEADERS', JSON.stringify(res.headers))
  let data = ''
  res.on('data', chunk => data += chunk)
  res.on('end', () => {
    console.log('BODY_START')
    console.log(data.slice(0, 3000))
    console.log('BODY_END')
    process.exit(0)
  })
}).on('error', (e) => {
  console.error('ERROR', e.message)
  process.exit(1)
})
