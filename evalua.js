var nombre = prompt("Esta es la trivia de la primavera escribe tu nombre") 
var c = 0;
var i = 0;
var p1 = prompt("¿En que departamento se encuentra el lago titicaca?\nA : Tacna\nB : Puno\nC : Cusco");
if (p1 == "B"){
    c = c + 1;
}else{
    i = i + 1; 
 }

 var p2 = prompt("¿Desde qué parte del Perú se pueden avistar ballenas jorobadas?\nA : A: Lima e Ica \nB : B: Arequipa y Tacna \nC : C: Piura y Tumbes");
if (p2 == "C"){
    c = c + 1;
}else{
    i = i + 1; 
 }

 var p3 = prompt("Plato típico de la Selva peruana\nA : Tacacho con cecina\nB : Arroz con pollo\nC : Lomo Saltado");
if (p3 == "A"){
    c = c + 1;
}else{
    i = i + 1; 
 }
 if (c < i);
