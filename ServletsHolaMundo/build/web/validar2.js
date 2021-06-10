function validar(formulario){
    //obtener los valores del formulario
    if(formulario.nombre.value.length < 4){
        alert("Escribe  más de 4 caracteres en el campo nombre");
        formulario.nombre.focus();
    return false;
    }
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
    alert("Escribe solo letras en el campo nombre");
    formulario.nombre.focus();
    return false;
}

var txt = formulario.Fecha.value;

    //patron
    var b = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

    
    
    if(b.test(txt)===false){
        alert("Fecha de inicio " + (b.test(txt)?"":" no ")+" valida")
        formulario.Fecha.focus;
        return b.test(txt);  
    }
    
 var txt2 = formulario.Fecha2.value;

    if(b.test(txt2)===false){
        alert("Fecha de fin " + (b.test(txt2)?"":" no ")+" valida")
        formulario.Fecha2.focus;
        return b.test(txt2);  
} 

}


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
    //obtener los valores del formulario

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


    if(formulario.nombre.value.length < 4){
        alert("Escribe  más de 4 caracteres en el campo nombre");
        formulario.nombre.focus();
    return false;
    }
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
    alert("Escribe solo letras en el campo nombre");
    formulario.nombre.focus();
    return false;
}

var txt = formulario.Fecha.value;

    //patron
    var b = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

    
    
    if(b.test(txt)===false){
        alert("Fecha de inicio " + (b.test(txt)?"":" no ")+" valida")
        formulario.Fecha.focus;
        return b.test(txt);  
    }
    
 var txt2 = formulario.Fecha2.value;

    if(b.test(txt2)===false){
        alert("Fecha de fin " + (b.test(txt2)?"":" no ")+" valida")
        formulario.Fecha2.focus;
        return b.test(txt2);  
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
    if(checkcampo==="nom_pro"){
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
    
   
    
    if(checkcampo==="fechai_pro"){
        
        var txt = formulario.valorActualizar.value;

        //patron
        var b = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
    
        
        
        if(b.test(txt)===false){
            alert("Fecha de inicio " + (b.test(txt)?"":" no ")+" valida")
            formulario.valorActualizar.focus;
            return b.test(txt);  
        }

}
if(checkcampo==="fechaf_pro"){
        
    var txt = formulario.valorActualizar.value;

    //patron
    var b = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

    
    
    if(b.test(txt)===false){
        alert("Fecha de fin " + (b.test(txt)?"":" no ")+" valida")
        formulario.valorActualizar.focus;
        return b.test(txt);  
    }

}
    
    }

