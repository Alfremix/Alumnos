var nombre_alumno_array = [];
function submit(){
    var nombre1 = document.getElementById("alum1").value;
    var nombre2 = document.getElementById("alum2").value;
    var nombre3 = document.getElementById("alum3").value;
    var nombre4 = document.getElementById("alum4").value;

    nombre_alumno_array.push(nombre1);
    nombre_alumno_array.push(nombre2);
    nombre_alumno_array.push(nombre3);
    nombre_alumno_array.push(nombre4);
    console.log(nombre_alumno_array);

    document.getElementById("ver_nombre").innerHTML = nombre_alumno_array;
    document.getElementById("botonEnviar").style.display = "none";
    document.getElementById("Buttonordenar").style.display = "inline-block";
}

function sorting(){
    nombre_alumno_array.sort();
    console.log(nombre_alumno_array);
    document.getElementById("ver_nombre").innerHTML = nombre_alumno_array;
}