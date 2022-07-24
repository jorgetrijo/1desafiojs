let nombre = prompt("Cual es tu nombre?");
console.log("Hola " + nombre)
prompt("Cómo estás " + nombre + "?");
console.log("Que bueno, " + nombre);
let accion = prompt("Vamos a lo que vinimos. Querés sumar o multiplicar?")
if (accion == "sumar"){
    console.log("Empecemos a sumar");
    let valor = parseInt (prompt("Querés sumar de a 1 o de a 2?"));
    if (valor == 1){
        console.log("Vamos a sumar de a 1:");
        let comienzo = parseInt (prompt("Desde qué número comenzamos a sumar?"));
        console.log("Bueno, vamos a sumar de a 1 desde el " + comienzo );
        let final = parseInt (prompt("Hasta qué número querés sumar?"));
        console.log("Vamos a contar desde el " + comienzo + " hasta el " + final)
        for ( let i = comienzo; i <= final; i++){
        console.log(i)};
    }
    else if (valor == 2){
        console.log("Vamos a sumar de a 2");
        let comienzo = parseInt (prompt("Desde qué comenzamos a sumar?"));
        console.log("Buenos, vamos a sumar de a 2 desde el " + comienzo );
        let final = parseInt (prompt("Hasta qué numero querés sumar?"));
        console.log("Vamos a contar desde el " + comienzo + " hasta el " + final);
        for ( let i = comienzo; i <= final; i+=2){
            console.log(i);
        }
    }
    else {
        console.log("No te entendí. volvamos a empezar")
    }
}
else if (accion == "multiplicar"){
    console.log("Empecemos a multiplicar");
    let valor = parseInt (prompt("Querés que te de la table del 2 o del 3?"));
    if (valor == 2){
        console.log("Te voy a mostrar la tabla del 2.");
        for ( let i = 2; i <= 20; i+= 2){
            console.log(i);
        }
    }
    else if (valor == 3){
        console.log("Te voy a mostrar la tabla del 3.");
        for ( let i = 3; i <= 30; i+= 3){
            console.log(i);
        }
    }
    else {
        console.log("No te entendí. Volvamos a empezar.");
    
    }
}
else {
    console.log("No te entendí. Volvamos a empezar.");

}