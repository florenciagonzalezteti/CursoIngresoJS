function mostrar()
{
/* 
var laEdad;
var laEdad=edad.value;

if(laEdad>=18)
{
	alert("Es mayor de edad.");
}

if(laEdad>=13 && laEdad=<17)
{
	alert("Es adolescente.");
}

if(laEdad<13)
{
	alert("Es niño/a.");
}
*/

var laEdad;
var laEdad=edad.value;

/*if(laEdad>=18)
{
	alert("Es mayor de edad.");
	
	if(laEdad<13)
		alert("Es un niño.");

}
else
	{
		alert("Es adolescente");
	}
*/

if (laEdad>=18)
{
	alert("Es mayor de edad.");
}
else
{
	if(laEdad>=13)
	{
		alert("Es adolescente");
	}
	else
	{
		alert("Es un niño");
	}
}




}//FIN DE LA FUNCIÓN