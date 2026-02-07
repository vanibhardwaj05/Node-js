import path from 'path'// first path is variable u can wirte anything second p[ath-> module from which variable will import things
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)// converting filr url in path of os 
console.log(import.meta.url)
console.log(__filename)//__why 2 bcoz of built in
console.log(`File name: ${path.basename(__filename)}`)// print the filename
console.log("Directory name: ",path.dirname(__filename))// print the dirname
console.log("Extension : ",path.extname(__filename))// print the extension
console.log("Path object : ",path.parse(__filename))// print the details
// one more is upar se first path hatado and liko basename,extname,pars,bsasename and from downwards remove path. from below
// but this is hectic that why tyhis path. is easy
// 2nd way of url is that remove file url to path instea dthat write url normal then we have to write url.filetoURLTOPATH in 3rd line
//importing particularly funcitonality we have to put{} like fileURLToPath is functionality thats why {} is there
// in 6th line the way we wriute using backtick and dollar it it template literal way 
// but for us below way is easy to print or concat


