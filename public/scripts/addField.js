

//procurar o botao
document.querySelector("#add-time")
//quando clicar no botao
.addEventListener('click', cloneField)


//executar uma açao
function cloneField() {

    //duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) 
    //pegar  os campos
    const fields = newFieldContainer.querySelectorAll('input')
    //para cada campo limpar
    fields.forEach(function(field)  {
        //pega o field do momento e limpa
        field.value = "0"
    })
   
    //colocar na página
    document.querySelector('#schedule-itens').appendChild(newFieldContainer)

}