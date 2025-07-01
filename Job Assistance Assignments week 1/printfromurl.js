let url = "http://leaftaps.com/opentaps/control/login"
output =url.split('/')
console.log(output)
console.log(output[3])
console.log(output[5])
let replaceurl = url.replace("login","main")
console.log(replaceurl)