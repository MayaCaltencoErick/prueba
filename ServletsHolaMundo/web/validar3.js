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
    
    if(formulario.edad.value.length < 1){
        alert("No dejes el campo de precio vacío");
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
        alert("Escribe solo numeros en el campo Precio");
        formulario.edad.focus();
        return false;
    }

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
    
    
    if(formulario.edadactualizar.value.length < 1){
        alert("No dejes el campo de precio vacío");
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



if(!allvalid){
    alert("Escribe solo letras en el campo nombre");
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
        alert("Escribe solo numeros en el campo precio");
        formulario.edadactualizar.focus();
        return false;
    }

    
   
   
   

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
    if(checkcampo==="nom_pru"){
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
    
    
    
    if(checkcampo==="pre_pru"){
        if(formulario.valorActualizar.value.length < 1){
        alert("No dejes el campo de precio vacío");
        formulario.valorActualizar.focus();
        return false;
    }
    if(formulario.valorActualizar.value.length > 2){
        alert("Solo puedes ingresar 2 caracteres en el campo precio");
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
        alert("Escribe solo numeros en el campo precio");
        formulario.valorActualizar.focus();
        return false;
    }
    }
    
 
    
    }


