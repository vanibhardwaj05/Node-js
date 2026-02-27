import zlib from 'zlib'
import fs from 'fs'
let gzip = zlib.createGunzip()
let r = fs.createReadStream('pizza.txt.gz')
let w = fs.createWriteStream('burger.txt')
r.pipe(gzip).pipe(w)
