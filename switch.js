var nombre;
var estadoCivil;

nombre=prompt("Ingrese el nombre de la persona");
estadoCivil=parseInt(prompt("Ingrese el estado civil: 1.Soltero 2.Casado 3.Separado 4.Viudo 5.Union libre"));

switch (estadoCivil) {
    case 1:
        alert(nombre+ " esta solter@")
        break;
    
    case 2:
        alert(nombre+ " esta casado@")
        break;
    
    case 3:
        alert(nombre+ " esta separad@")
        break;

    case 4:
        alert(nombre+ " esta viud@")
        break;

    case 5:
        alert(nombre+ " esta en union libre")
        break;

    default:
        alert("Estado civil no valido")
        break;
}