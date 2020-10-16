/**
 * auther : 619 
 * time :2020/10/15
 * connection : node.js server start and sever redis ,but me no need it ,in order to learn js
 * compiler : vs code  
 * tips: my github is not gitee.com ，my github is updata to github.com ;name is ani- 619; if you love me code ellint ,you can see me github ,l will git you a chuajian ,you can week  in vscode and hbuilderx ; 
 */
//this is some  frame 
console.log("node.js脚本启动成功");
const serve_http = require('../src/serve/index.js');
let a=new serve_http(12,45,78)
a.start()
