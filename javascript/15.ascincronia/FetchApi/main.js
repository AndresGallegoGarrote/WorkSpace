const extraerAPI=document.querySelector("#extraer");
extraerAPI.addEventListener("click", obtenerDatosDelApi);

function obtenerDatosDelApi(){
    const url="https://picsum.photos/list";
    fetch(url)
    .then((respuesta)=>respuesta.json())
    //.then((resultado)=>console.log(resultado))
    .then((resultado)=>mostrarHTML(resultado));
}
function mostrarHTML(datos){
   const contenido =document.querySelector('.contenido')
   let renderizar="";
    datos.forEach((creador)=>{
        const{author,post_url, author_url}=creador;
        renderizar+= `Autor:
        ${author}<p/>  Post:<a href="${post_url}"></a><p/> <p>url:<a href="${author_url}"</a></p>`
    });
    contenido.innerHTML=renderizar;

}