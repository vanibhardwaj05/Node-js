import {EventEmitter} from 'events'
let myEmitter=new EventEmitter()
myEmitter.setMaxListeners(25)// is we dont write by default it will only allow only 10 listners
for(let i=0;i<25;i++){
    myEmitter.on('event',()=>{
        console.log('Listener ${i} called')
    })
}