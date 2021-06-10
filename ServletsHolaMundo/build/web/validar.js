function validar(formulario){
    //obtener los valores del formulario
    if(formulario.nombre.value.length < 4){
        alert("Escribe  más de 4 caracteres en el campo nombre");
        formulario.nombre.focus();
    return false;
    }
    if(formulario.nombre.value.length > 20){
        alert("Escribe  menos de 20 caracteres en el campo nombre");
        formulario.nombre.focus();
        return false;
    }
    if(formulario.appat.value.length < 4){
        alert("Escribe  más de 4 caracteres en el campo paterno");
        formulario.appat.focus();
    return false;
    }
    if(formulario.appat.value.length > 20){
        alert("Escribe  menos de 20 caracteres en el campo paterno");
        formulario.appat.focus();
        return false;
    }
    if(formulario.appmat.value.length < 4){
        alert("Escribe  más de 4 caracteres en el campo apellido materno");
        formulario.appmat.focus();
    return false;
    }
    if(formulario.appmat.value.length > 20){
        alert("Escribe  menos de 20 caracteres en el campo apellido materno");
        formulario.appmat.focus();
        return false;
    }
    if(formulario.email.value.length > 30){
        alert("Escribe  menos de 30 caracteres en el campo email");
        formulario.email.focus();
        return false;
    }
    if(formulario.email.value.length< 2){
        alert("Escribe  mas caracteres en el campo email");
        formulario.email.focus();
        return false;
    }
    if(formulario.edad.value.length < 1){
        alert("No dejes el campo de edad vacío");
        formulario.edad.focus();
        return false;
    }
    
    



//Crear opción para solo ingresar letras


var checkOK = "QWERTYUIOPASDFGHJKLÑZXCVBNM"
+ "qwertyuiopasdfghjklñzxcvbnm"+" ";

var checkStr = formulario.nombre.value;

var allvalid = true;

for(var i = 0; i < checkStr.length; i++){
    var ch = checkStr.charAt(i);
    for(var j = 0; j < checkOK.length; j++)
    if(ch == checkOK.charAt(j))
        break;
    if(j == checkOK.length){
        allvalid = false;
        break;
    }
}
var checkStr2=formulario.appat.value;
for(var i = 0; i < checkStr2.length; i++){
    var ch = checkStr2.charAt(i);
    for(var j = 0; j < checkOK.length; j++)
    if(ch == checkOK.charAt(j))
        break;
    if(j == checkOK.length){
        allvalid = false;
        break;
    }
}
var checkStr3=formulario.appmat.value;
for(var i = 0; i < checkStr3.length; i++){
    var ch = checkStr3.charAt(i);
    for(var j = 0; j < checkOK.length; j++)
    if(ch == checkOK.charAt(j))
        break;
    if(j == checkOK.length){
        allvalid = false;
        break;
    }
}


if(!allvalid){
    alert("Escribe solo letras en el campo nombre/apellido paterno/apellido materno");
    formulario.nombre.focus();
    return false;
}
    //"2"//

    var checkOK = "1234567890";

    var checkStr = formulario.edad.value;

    var allvalid = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOK.length; j++)
        if(ch == checkOK.charAt(j))
            break;
        if(j == checkOK.length){
            allvalid = false;
            break;
        }
    }

    if(!allvalid){
        alert("Escribe solo numeros en el campo edad");
        formulario.edad.focus();
        return false;
    }



    
   var txt = formulario.email.value;

   var b = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;

   alert("Email "+(b.text(txt)?"":" no ")+" valido");
   
   return b.test(txt);
}
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function validareliminacion(formulario){
    var checkOK = "1234567890";

    var checkStr = formulario.ideliminar.value;

    var allvalid = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOK.length; j++)
        if(ch == checkOK.charAt(j))
            break;
        if(j == checkOK.length){
            allvalid = false;
            break;
        }
    }

    if(!allvalid){
        alert("Escribe solo numeros en el campo id a eliminar");
        formulario.ideliminar.focus();
        return false;
    }
    if(formulario.ideliminar.value.length > 8){
        alert("Escribe  menos de 9 caracteres en el campo id a eliminar");
        formulario.ideliminar.focus();
        return false;
    }
    if(formulario.ideliminar.value.length < 1){
        alert("No dejes el campo de id vacío");
        formulario.ideliminar.focus();
        return false;
    }
}


function validaractualizacion(formulario){
  if(formulario.nombreactualizar.value.length < 4){
        alert("Escribe  más de 4 caracteres en el campo nombre");
        formulario.nombreactualizar.focus();
    return false;
    }
    if(formulario.nombreactualizar.value.length > 20){
        alert("Escribe  menos de 20 caracteres en el campo nombre");
        formulario.nombreactualizar.focus();
        return false;
    }
    if(formulario.appatactualizar.value.length < 4){
        alert("Escribe  más de 4 caracteres en el campo paterno");
        formulario.appatactualizar.focus();
    return false;
    }
    if(formulario.appatactualizar.value.length > 20){
        alert("Escribe  menos de 20 caracteres en el campo paterno");
        formulario.appatactualizar.focus();
        return false;
    }
    if(formulario.appmatactualizar.value.length < 4){
        alert("Escribe  más de 4 caracteres en el campo apellido materno");
        formulario.appmatactualizar.focus();
    return false;
    }
    if(formulario.appmatactualizar.value.length > 20){
        alert("Escribe  menos de 20 caracteres en el campo apellido materno");
        formulario.appmatactualizar.focus();
        return false;
    }
    if(formulario.emailactualizar.value.length > 30){
        alert("Escribe  menos de 30 caracteres en el campo email");
        formulario.emailactualizar.focus();
        return false;
    }
    if(formulario.edadactualizar.value.length < 1){
        alert("No dejes el campo de edad vacío");
        formulario.edadactualizar.focus();
        return false;
    }
    if(formulario.idactualizar.value.length < 1){
        alert("No dejes el campo de id vacío");
        formulario.idactualizar.focus();
        return false;
    }
    if(formulario.idactualizar.value.length > 8){
        alert("No pongas más de 8 caracteres en el campo id");
        formulario.idactualizar.focus();
        return false;
    }
     if(formulario.emailactualizar.value.length< 2){
        alert("Escribe  mas caracteres en el campo email");
        formulario.emailactualizar.focus();
        return false;
    }

    var checkOK = "1234567890";

    var checkStr = formulario.idactualizar.value;

    var allvalid = true;

    
for(var i = 0; i < checkStr.length; i++){
    var ch = checkStr.charAt(i);
    for(var j = 0; j < checkOK.length; j++)
    if(ch == checkOK.charAt(j))
        break;
    if(j == checkOK.length){
        allvalid = false;
        break;
    }
}
     if(!allvalid){
        alert("Escribe solo numeros en el campo id");
        formulario.idactualizar.focus();
        return false;
    }
       
    
var checkOK = "QWERTYUIOPASDFGHJKLÑZXCVBNM"
+ "qwertyuiopasdfghjklñzxcvbnm"+" ";

var checkStr = formulario.nombreactualizar.value;

var allvalid = true;

for(var i = 0; i < checkStr.length; i++){
    var ch = checkStr.charAt(i);
    for(var j = 0; j < checkOK.length; j++)
    if(ch == checkOK.charAt(j))
        break;
    if(j == checkOK.length){
        allvalid = false;
        break;
    }
}
var checkStr2=formulario.appatactualizar.value;
for(var i = 0; i < checkStr2.length; i++){
    var ch = checkStr2.charAt(i);
    for(var j = 0; j < checkOK.length; j++)
    if(ch == checkOK.charAt(j))
        break;
    if(j == checkOK.length){
        allvalid = false;
        break;
    }
}
var checkStr3=formulario.appmatactualizar.value;
for(var i = 0; i < checkStr3.length; i++){
    var ch = checkStr3.charAt(i);
    for(var j = 0; j < checkOK.length; j++)
    if(ch == checkOK.charAt(j))
        break;
    if(j == checkOK.length){
        allvalid = false;
        break;
    }
}


if(!allvalid){
    alert("Escribe solo letras en el campo nombre/apellido paterno/apellido materno");
    formulario.nombreactualizar.focus();
    return false;
}
    
    //"2"//

    var checkOK = "1234567890";

    var checkStr = formulario.edadactualizar.value;

    var allvalid = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOK.length; j++)
        if(ch == checkOK.charAt(j))
            break;
        if(j == checkOK.length){
            allvalid = false;
            break;
        }
    }

    if(!allvalid){
        alert("Escribe solo numeros en el campo edad");
        formulario.edadactualizar.focus();
        return false;
    }

    
   var txt = formulario.emailactualizar.value;

   var b = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;

   alert("Email "+(b.text(txt)?"":" no ")+" valido");
   
   return b.test(txt);  
   
   

}



function validarpartes(formulario){
    var checkOK = "1234567890";

    var checkStr = formulario.idactualizar2.value;

    var allvalid = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOK.length; j++)
        if(ch == checkOK.charAt(j))
            break;
        if(j == checkOK.length){
            allvalid = false;
            break;
        }
    }
    if(!allvalid){
        alert("Escribe solo numeros en el campo id actualizar");
        formulario.idactualizar2.focus();
        return false;
    }
    if(formulario.idactualizar2.value.length < 1){
        alert("No dejes el campo de id vacío");
        formulario.idactualizar2.focus();
        return false;
    }
    if(formulario.idactualizar2.value.length > 8){
        alert("No pongas más de 8 caracteres en el campo id");
        formulario.idactualizar2.focus();
        return false;
    }

    var checkcampo=formulario.campoActualizar.value;
    if(checkcampo==="nom_usu"){
        if(formulario.valorActualizar.value.length < 4){
        alert("Escribe  más de 4 caracteres en el campo nombre");
        formulario.valorActualizar.focus();
    return false;
    }
    if(formulario.valorActualizar.value.length > 20){
        alert("Escribe  menos de 20 caracteres en el campo nombre");
        formulario.valorActualizar.focus();
        return false;
    }
    var checkOK = "QWERTYUIOPASDFGHJKLÑZXCVBNM"
    + "qwertyuiopasdfghjklñzxcvbnm"+" ";
    var checkStr = formulario.valorActualizar.value;
    var allvalid = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOK.length; j++)
        if(ch == checkOK.charAt(j))
            break;
        if(j == checkOK.length){
            allvalid = false;
        break;
        }
    }
    if(!allvalid){
    alert("Escribe solo letras en el campo nombre");
    formulario.valorActualizar.focus();
    return false;
    }
    }
    
    if(checkcampo==="appat_usu"){
        if(formulario.valorActualizar.value.length < 4){
        alert("Escribe  más de 4 caracteres en el campo Apellido paterno");
        formulario.valorActualizar.focus();
    return false;
    }
    if(formulario.valorActualizar.value.length > 20){
        alert("Escribe  menos de 20 caracteres en el campo Apellido paterno");
        formulario.valorActualizar.focus();
        return false;
    }
    var checkOK = "QWERTYUIOPASDFGHJKLÑZXCVBNM"
    + "qwertyuiopasdfghjklñzxcvbnm"+" ";
    var checkStr = formulario.valorActualizar.value;
    var allvalid = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOK.length; j++)
        if(ch == checkOK.charAt(j))
            break;
        if(j == checkOK.length){
            allvalid = false;
        break;
        }
    }
    if(!allvalid){
    alert("Escribe solo letras en el campo apellido paterno");
    formulario.valorActualizar.focus();
    return false;
}
    }
    
    
    if(checkcampo==="apmat_usu"){
        if(formulario.valorActualizar.value.length < 4){
        alert("Escribe  más de 4 caracteres en el campo Apellido materno");
        formulario.valorActualizar.focus();
    return false;
    }
    if(formulario.valorActualizar.value.length > 20){
        alert("Escribe  menos de 20 caracteres en el campo Apellido materno");
        formulario.valorActualizar.focus();
        return false;
    }
    var checkOK = "QWERTYUIOPASDFGHJKLÑZXCVBNM"
    + "qwertyuiopasdfghjklñzxcvbnm"+" ";
    var checkStr = formulario.valorActualizar.value;
    var allvalid = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOK.length; j++)
        if(ch == checkOK.charAt(j))
            break;
        if(j == checkOK.length){
            allvalid = false;
        break;
        }
    }
    if(!allvalid){
    alert("Escribe solo letras en el campo apellido materno");
    formulario.valorActualizar.focus();
    return false;
}


    }
    
    
    if(checkcampo==="edad_usu"){
        if(formulario.valorActualizar.value.length < 1){
        alert("No dejes el campo de edad vacío");
        formulario.valorActualizar.focus();
        return false;
    }
    if(formulario.valorActualizar.value.length > 2){
        alert("Solo puedes ingresar 2 caracteres en el campo edad");
        formulario.valorActualizar.focus();
        return false;
    }
    var checkOK = "1234567890";

    var checkStr = formulario.valorActualizar.value;

    var allvalid = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOK.length; j++)
        if(ch == checkOK.charAt(j))
            break;
        if(j == checkOK.length){
            allvalid = false;
            break;
        }
    }

    if(!allvalid){
        alert("Escribe solo numeros en el campo edad");
        formulario.valorActualizar.focus();
        return false;
    }
    }
    
    if(checkcampo==="email_usu"){
      if(formulario.valorActualizar.value.length > 30){
        alert("Escribe  menos de 30 caracteres en el campo email");
        formulario.valorActualizar.focus();
        return false;
    }  
    if(formulario.valorActualizar.value.length< 2){
        alert("Escribe  mas caracteres en el campo email");
        formulario.valorActualizar.focus();
        return false;
    }
        
    var txt = formulario.valorActualizar.value;

    //patron
    var b = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;

    alert("Email " + (b.test(txt)?"":" no ")+" valido");

    return b.test(txt);

   
   
}

if(checkcampo==="permiso_usu"){
    var txt=formulario.valorActualizar.value;
    if(txt==="usuario"||txt==="administrador"){
       return true;
    }
    else{
        alert("Este campo solo permite las siguientes palabras: usuario, administrador")
        return false;
        
    }
}
    
    }




