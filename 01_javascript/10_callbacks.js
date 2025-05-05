const add=(a,b,callback)=>{
    let res = a+b;
    callback(res);
}//async callback function

add(10,20,result => {
    console.log(result);
});
//nested callbacks
add(10,20,result => {
    add(result,10,r => {
        console.log(r);
        add(r,10,result => {
            console.log(result);
        })
    })
});//callback hell