let pais = `Brasil`;
titulo.style.color=`tomato`;


let frase = `Um país continental`;
let adjetivo = "Tropical";
let fraseInteira = `${pais} ${frase}`.replace(`continental`,`${adjetivo}`);
titulo.textContent= fraseInteira;
// Concatenar string utilzando template string - Forma atualizada de concatenação

console.log(`${pais} ${frase}`);

