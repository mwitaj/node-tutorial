//intro
// const amount = 8;
// if(amount<10){
// 	console.log('small number');
// }else{
// 	console.log('large number');
// }
// console.log('my fist node app');


//globals
// console.log(__filename)
// console.log(__dirname)
// setInterval(()=>{
// 	console.log('hello world')
// }, 2000)


//Modules
// const names = require('./globals')
// const sayHi = require('./utils')

// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)


//built in modules -os
// const os = require('os')
// const user = os.userInfo()
// console.log(user)

// //returns system uptime
// console.log(`System uptime is ${os.uptime()} seconds`)

// const currentOS = {
// 	name:os.type(),
// 	release:os.release(),
// 	totalMem:os.totalmem(),
// 	freeMem:os.freemem()
// }
// console.log(currentOS)


// //built in modules - path
// const path = require('path')
// console.log(path.sep) // separator
// const filePath = path.join('/contents/', 'subfolder', 'test.txt') // join
// console.log(filePath)
// const base = path.basename(filePath) // file name 
// console.log(base)
// const absolute = path.resolve(__dirname,'contents', 'subfolder', 'test.txt') // returns absolute path
// console.log(absolute)


//built in modules - file system - sync

// const {readFileSync, writeFileSync} = require('fs') // destructuring the objects in the module
// const first = readFileSync('./contents/first.txt', 'utf8')
// const second = readFileSync('./contents/second.txt', 'utf8')
// console.log(first)
// console.log(second)

// writeFileSync('./contents/result.txt', `The result is ${first}, ${second}`, {flag: 'a'}) // append


//built in modules - file system - async
// const {readFile, writeFile} = require('fs') // destructuring the objects in the module
// const first = readFile('./contents/first.txt', 'utf8', (err, result)=>{
// 	if(err){
// 		console.log(err)
// 		return
// 	}
// 	console.log(result)
// })

// const second = readFile('./contents/second.txt', 'utf8', (err, result)=>{
// 	if(err){
// 		console.log(err)
// 		return
// 	}
// 	console.log(result)
// })

// readFile('./contents/first.txt', 'utf8', (err, result)=>{
// 	if(err){
// 		console.log(err)
// 		return
// 	}
// 	const first = result
// 	readFile('./contents/second.txt', 'utf8', (err, result)=>{
// 		if(err){
// 			console.log(err)
// 			return
// 		}
// 		const second = result
// 		writeFile('./contents/result-async.txt', `Here is the result: ${first}, ${second}`, {flag:'a'},(err, result)=>{
// 			if(err){
// 				console.log(err)
// 			return
// 			}
// 			console.log(result)
// 		})
// 	})
// })

// //built in modules - http
// const http = require('http')
// const server = http.createServer((req,res)=>{
// 	res.write('Hello from home page')
// 	res.end()
// })
// server.listen(5000)

// external packages
//npm init -y   install package json

// //npm - lodash
// const _ = require('lodash')
// const items = [1,[2,[3,[4]]]]
// const newItems = _.flattenDeep(items)

// console.log(newItems)





