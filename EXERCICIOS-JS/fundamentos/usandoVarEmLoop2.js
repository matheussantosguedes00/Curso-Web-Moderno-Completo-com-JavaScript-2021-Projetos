const funcs =[]

for (var i =0; i< 10; i++){
    funcs.push(function (){
        console.log(i)
    })
}
funcs[2]()//valor 10 
funcs[8]()//valor 10 