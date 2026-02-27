import zlib from 'zlib'
import fs from 'fs'
let gzip = zlib.createGzip()
let r = fs.createReadStream('pizza.txt')
let w = fs.createWriteStream('pizza.txt.gz')
r.pipe(gzip).pipe(w)


