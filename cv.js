//se hace la peticion a la api
const listUser=async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const users = await response.json();
    console.log(users);

    document.getElementById("name").innerHTML = `<h2>${users.name}</h2>`;
    document.getElementById("phone").innerHTML = `<span>${users.phone}</span>`;
    document.getElementById("email").innerHTML = `<span>${users.email}</span>`;
    document.getElementById("website").innerHTML = `<span>${users.website}</span>`;
    document.getElementById("address").innerHTML = `<span>${users.address.street} ${users.address.suite} ${users.address.city}</span>`;
    document.getElementById("company").innerHTML = `<h5>${users.company.name}</h5>`;
    document.getElementById("catchPhrase").innerHTML = `<h4>${users.company.catchPhrase}</h4>`;
    document.getElementById("bs").innerHTML = `<p>${users.company.bs}</p>`;
};

//segunda api para obtener mas datos
const listaUsuario=async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users/2");
    const usuario = await response.json();
    console.log(usuario);

    document.getElementById("compania").innerHTML = `<h5>${usuario.company.name}</h5>`;
    document.getElementById("ocupacion").innerHTML = `<h4>${usuario.company.catchPhrase}</h4>`;
    document.getElementById("puesto").innerHTML = `<p>${usuario.company.bs}</p>`;
};
//comprueba si se cargo la pagina
window.addEventListener("load",function(){
    console.log("Documento cargado");
    listUser();
    listaUsuario();
});
