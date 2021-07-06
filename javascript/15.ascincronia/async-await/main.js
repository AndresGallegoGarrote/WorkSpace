function usuarios(){
    return new Promise((resolve,reject)=>{
        const error =false;

        setTimeout(()=>{
            if(!error){
                resolve("usuarios ok")
            } else {
                reject("hay un error")
            }

        })
    }, 3000)
}
//console.log(usuarios())

async function mostrar(){
    try{
        console.log(1+1);
        const respuesta=await usuarios();
        console.log(2+2);
        console.log(respuesta);
    } catch(error){
        console.log(error);
    }
}
mostrar();