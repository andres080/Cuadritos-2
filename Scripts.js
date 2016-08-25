var numberInput = document.getElementById("number");//Trae el string del input
var boxMaker = document.getElementById("generator");//Trae el boton de generar
var bigBox = "";//Hace el string de cajitas
var boxConteiner = document.getElementById("conteiner");//Trea al contenedor
var mySelectValue = document.getElementById("mySelect");//Trae el valor del Select
var boxCount = document.getElementById("howmany");//Trae el lugar donde va a ir el contador
var count = 0;//Tiene el contador a cero que es el valor inicial
var actualMaxi = 0;//Da el valor actual
boxMaker.addEventListener("click", function(){
	for(var i = count + 1; i < parseInt(numberInput.value) + count + 1; i++){
		bigBox += "<div class='boxAttributes' id='box-" + i + "' style='background:" + mySelect.value + "'></div>";
	}
	boxConteiner.innerHTML = bigBox;
	
	for(var i = count + 1; i < parseInt(numberInput.value) + count + 1; i++){
		addEvent(i);
	}
})
boxMaker.addEventListener("click", function(){
	count += parseInt(numberInput.value);

	boxCount.innerHTML = count;
});
function addEvent(i){
	var iD = "box-" + i;
	var elment = document.getElementById(iD);

	elment.addEventListener("click", function(){
		elment.parentNode.removeChild(elment);
		count = count - 1;
		boxCount.innerHTML = count; 
	})
}
