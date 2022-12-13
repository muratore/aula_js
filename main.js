/* let pais = `Brasil`;
titulo.style.color=`tomato`;


let frase = `Um país continental`;
let adjetivo = "Tropical";
let fraseInteira = `${pais} ${frase}`.replace(`continental`,`${adjetivo}`);
titulo.textContent= fraseInteira;
// Concatenar string utilzando template string - Forma atualizada de concatenação

console.log(`${pais} ${frase}`);
 */
// Calcular desconto
let showValue = document.querySelector("#showValue")
let price = document.querySelector("#price")
const btnDiscount = document.querySelector("#btn-price")
let discount = 20;

btnDiscount.addEventListener("click", (evt)=>{
 evt.preventDefault()
 let productValue = parseFloat(price.value)
 calculateDiscount(productValue)

})
const calculateDiscount = (valor)=>{
  let finalValue = valor - (valor * discount / 100)
  showValue.textContent= `O desconto é de ${discount}% e o valor final é: ${finalValue}` ;
}