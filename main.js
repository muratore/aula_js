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

// Select Elements
let showValue = document.querySelector("#showValue")
let priceInput = document.querySelector("#price")
const btnDiscount = document.querySelector("#btn-price")

let saleOff = 20

// Prompt input 
let discount = Number(prompt('Insira o seu disconto aqui', saleOff));

// Check if input is a number and is filled
while(!discount){
// Discount is 0 if cancel is pressed.  
   if(discount === 0) {
  promptMSN('É preciso preencher o campo e clicar em ok')
} else{
  promptMSN('Insira apenas números')
}
}

// Functiion to send back a error message.
function promptMSN(message){
  discount = Number(prompt(`${message}`, saleOff));
}

// Form function
btnDiscount.addEventListener("click", (evt)=>{
 evt.preventDefault()
 let productValue = (priceInput.value)
 calculateDiscount(productValue)
})
const calculateDiscount = (valor)=>{
  let finalValue =  parseFloat(valor - (valor * discount / 100)).toFixed(2).replace(".", ",");
  showValue.textContent= `O desconto é de ${discount}% e o valor final é: ${finalValue}` ;
}