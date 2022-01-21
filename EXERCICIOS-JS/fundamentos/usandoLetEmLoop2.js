const funcs =[]

for (let i =0; i< 10; i++){
    funcs.push(function (){
        console.log(i)
    })
}
funcs[2]()//valor 2
funcs[6]()//valor 6
funcs[8]()//valor 8 