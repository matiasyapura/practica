//no se si esta bien:
let claveCorrecta:string = "eureka";
let pass:string = "";

for (let i=1; i<=3; i++){
  pass = prompt("Ingrese la clave, intento nº "+i);
  if (pass==claveCorrecta){
    console.log("exito");
    i=3
  } else {
    console.log("error clave incorrecta")
  }
}