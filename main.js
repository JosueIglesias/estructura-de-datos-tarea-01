var sueldo = 100
if (sueldo >= 0 && sueldo <= 1000){
    sueldo = sueldo * 1.15
    console.log("Nuevo sueldo = " + sueldo)
} else if(sueldo >= 1001 && sueldo <= 1200){
    sueldo = sueldo * 1.12
    console.log("Nuevo sueldo = " + sueldo)
} else if (sueldo >= 1201 && sueldo <= 1400){
    sueldo = sueldo * 1.1
    console.log("Nuevo sueldo = " + sueldo)
} else if (sueldo >= 1401 && sueldo <= 1500){
    sueldo = sueldo * 1.08
    console.log("Nuevo sueldo = " + sueldo)
} else if (sueldo > 1500){
    sueldo = sueldo * 1.05
    console.log("Nuevo sueldo = " + sueldo)
}