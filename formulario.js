function miPrimerFormulario(){
    var form = ""
    var usuario = document.form1.usuario.value
    var nombre = document.form1.nombre.value
    var apellido = document.form1.apellido.value
    var email = document.form1.email.value
    var password = document.form1.password.value
    var password2 = document.form1.password2.value

    var hobbies = "";
    var b =document.form1.hobby.length
    for(i=0;i<b;i++){
        if(document.form1.hobby[i].checked){
            //caso en que el checkbox este marcado
            hobbies+=document.form1.hobby[i].value +" ";
        }
    }
    
    //console.log(hobbies)

    var Pais = document.form1.Pais.value
    var Sexo = document.form1.Sexo.value

    if (usuario=="" || nombre=="" || apellido=="" || Pais=="" || email=="" || Sexo == "" || hobbies.length==0){
        alert('los campos con asteriscos son obligatorios')
    }
    if(password!=password2 || password==""){
        alert('las claves deben ser iguales y  no pueden estar en blanco')
}
    form = "usuario: " + usuario + "\nnombre: " + nombre + "\napellido: " +  apellido + "\nemail: " + email + "\nhobbies: " + hobbies + "\npais: " +Pais + "\nsexo: " + Sexo
    alert(form);
}
//parseInt cambia los enteros que se ingresan desde pantalla como numero