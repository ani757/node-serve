/**
 * node.js的serve
 */
const http =require('http')
class serve_http
{
    constructor(err,html,some)
    {
        this._err=err,
        this._html=html,
        this._some=some
    }
    start()
    {
        console.log(544646)
        console.log(this._err)
        http.createServer((e,w)=>
        {
            console.log(544646)
            
        }).listen('8000')
    }
}
module.exports=serve_http