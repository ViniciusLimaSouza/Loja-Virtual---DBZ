function dados() {
 
    const ds = [
                  {id:1, login:"lindinha", password:"1234", email:"lindinha@gmail.com"}, //[0]
                  {id:2, login:"docinho", password:"1234", email:"docinho@gmail.com"}, //[1]
                  {id:3, login:"florzinha", password:"1234", email:"florzinha@gmail.com"}, //[2]
               ]
 
    return ds
 
}
 
 
console.log (dados())

function login() {
 
    let log = document.querySelector("#login").value
    let senha = document.querySelector("#password").value

    const usuarios = dados()

   //laço for
       for(let i = 0; i < usuarios.length; i++) {
           if (log == usuarios[i].login && senha == usuarios[i].password) {
               console.log("Você logou!")
               alert("Você logou!")
            return;
           }
       } alert( "login ou senha incorretos");
   }