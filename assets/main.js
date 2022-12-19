// Select Elements
let priceInput = document.querySelector("#price")
const btnDiscount = document.querySelector("#btn-price")
const productTxt = document.querySelector('.product--txt')
const discountTxt = document.querySelector('.discount--txt')
const totalTxt = document.querySelector('.total--txt')

let saleOff = 20

// Função para checar se são apenas números.

function checkImput() {
  let number = /^[0-9]+$/;
  if (priceInput.value.match(number)) {
    let productValue = (priceInput.value)
    calculateDiscount(productValue)
  }else{
    return alert('Only numbers are allowed')
  }
}

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
 checkImput();
})

// Function to calculate a discount
const calculateDiscount = (valor)=>{
  let finalValue =  parseFloat(valor - (valor * discount / 100)).toFixed(2).replace(".", ",");
  discountTxt.textContent = `${discount}%`;
  productTxt.textContent = `${parseFloat(priceInput.value).toFixed(2).replace('.', ',')}`
  totalTxt.textContent = `${finalValue}`

}