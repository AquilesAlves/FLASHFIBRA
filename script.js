//------------------------------------CALCULADORA DE VENCIMENTO---------------------------------
function trocaVencimento() {
    const vencimentoAtual = parseInt(document.getElementById('vencimentoAtual').value)
    const vencimentoNovo = parseInt(document.getElementById('vencimentoNovo').value)
    let valorPlano = parseFloat(document.getElementById('valorPlano').value)
    const msg1 = document.getElementById('msg1')
    const msg2 = document.getElementById('msg2')

    let diariaPlano = valorPlano / 30
    let diasProporcionais = 0

    if (vencimentoAtual == vencimentoNovo) {
        alert('Valores inválidos, não é possível trocar o vencimento para a mesma data!!!')
        return

    }else if (vencimentoAtual < vencimentoNovo) {
        diasProporcionais = vencimentoNovo - vencimentoAtual

    } else {
        diasProporcionais = (30 - vencimentoAtual) + vencimentoNovo

    }

    let proporcional = diariaPlano * diasProporcionais
    let valorTotal = proporcional + valorPlano

    valorTotal = (valorTotal).toFixed(2).replace('.', ',')
    valorPlano = (valorPlano).toFixed(2).replace('.', ',')
    proporcional = (proporcional).toFixed(2).replace('.', ',')

    
    msg1.style.borderRadius = "15px"
    msg1.style.padding = "15px"
    msg1.style.height = "150px"
    msg1.innerHTML = `
        <p>Realizando a troca de vencimento do dia ${vencimentoAtual} para o dia ${vencimentoNovo}, o sistema irá calcular o *proporcional* de ${diasProporcionais} dias, e 
        isso dará o valor de R$${valorTotal} para data escolhida, e as próximas faturas voltam para o valor real do seu plano que é R$${valorPlano}. Posso seguir com a 
        alteração de vencimento?</p>
    `
    document.getElementById('copy1').style.display = 'block'     //faz aparecer o botao


    msg2.style.borderRadius = "15px"
    msg2.style.padding = "15px"
    msg2.innerHTML = `
        <p>Cliente quis alterar o vencimento de ${vencimentoAtual} para ${vencimentoNovo}<br>
        Proporcional de ${diasProporcionais} dias R$${proporcional}<br>
        Mais o valor da fatura R$${valorPlano}<br>
        Total de R$${valorTotal}</p>
    `
    document.getElementById('copy2').style.display = 'block'
}

function copiar1() {
    navigator.clipboard.writeText(document.getElementById('msg1').innerText)
}
function copiar2() {
    navigator.clipboard.writeText(document.getElementById('msg2').innerText)

}


//------------------------------------CALCULADORA DE TROCA DE PLANO------------------------------------
function trocaPlano() {
    let valorAntigo = parseFloat(document.getElementById('valorAntigo').value)
    let valorNovo = parseFloat(document.getElementById('valorNovo').value)
    const vencimento = parseInt(document.getElementById('vencimento').value)
    const dataTroca = parseInt(document.getElementById('dataTroca').value)
    const msg3 = document.getElementById('msg3')
    const msg4 = document.getElementById('msg4')

    
    //declaração de variaveis
    let diasPlanoAntigo, diasPlanoNovo
    
    //if else para fazer o calculo
    if (dataTroca == vencimento) {
        alert('Se o cliente solicitou a troca do plano no mesmo dia do vencimento, não tem proporcional!!!')
        return

    } else if (dataTroca > vencimento) {
        diasPlanoAntigo = dataTroca - vencimento
        diasPlanoNovo = vencimento - dataTroca + 30
        
    } else {
        diasPlanoAntigo = dataTroca - vencimento + 30
        diasPlanoNovo = vencimento - dataTroca 
    }

    //valor diario de cada plano

    let diariaAntigo, diariaNovo

    if (dataTroca == 31) {
        diariaAntigo = valorAntigo / 31
        diariaNovo = valorNovo / 31
        diasPlanoNovo += 1
    } else {
        diariaAntigo = valorAntigo / 30
        diariaNovo = valorNovo / 30
    }

    
    let proporcionalAntigo = diariaAntigo * diasPlanoAntigo
    let proporcionalNovo = diariaNovo * diasPlanoNovo    
    let valorTotal = proporcionalAntigo + proporcionalNovo
    
    //formatar a casa decimal e a virgula
    valorAntigo = (valorAntigo).toFixed(2).replace('.', ',')
    valorNovo = (valorNovo).toFixed(2).replace('.', ',')
    valorTotal = (valorTotal).toFixed(2).replace('.', ',')
    proporcionalAntigo = (proporcionalAntigo).toFixed(2).replace('.', ',')
    proporcionalNovo = (proporcionalNovo).toFixed(2).replace('.', ',')
    
    //configurar o tamanho da região
    msg3.style.borderRadius = "15px"
    msg3.style.padding = "15px"
    msg3.style.height = "100px"
    msg3.innerHTML = `
        <p>Calculando o proporcional da troca de plano ficará o valor de R$${valorTotal} para o dia ${vencimento}, e as próximas faturas passarão para o novo valor do seu plano que é R$${valorNovo}. Posso seguir com troca de plano?</p>
    `
    document.getElementById('copy3').style.display = 'block'     //faz aparecer o botao


    msg4.style.borderRadius = "15px"
    msg4.style.padding = "15px"
    msg4.innerHTML = `
        <p>Cliente solicitou a troca do plano
        Proporcional de ${diasPlanoAntigo} dias do plano antigo R$${proporcionalAntigo}
        e ${diasPlanoNovo} dias do plano novo R$${proporcionalNovo}<br>
        Valor total de R$${valorTotal} referente aos dias proporcionais<br>
        Ciente do novo valor R$${valorNovo}</p>
    `
    document.getElementById('copy4').style.display = 'block'

}

function copiar3() {
    navigator.clipboard.writeText(document.getElementById('msg3').innerText)
}

function copiar4() {
    navigator.clipboard.writeText(document.getElementById('msg4').innerText)
}


//-------------------------------------CALCULADORA DE DESCONTO---------------------------------------
function proporcional(){
    let diasProporcionais = parseInt(document.getElementById('diasProporcionais').value)
    let valorDoPlano = parseFloat(document.getElementById('valorDoPlano').value)
    let diariaPlano = valorDoPlano/30
    let valorProporcional = diasProporcionais * diariaPlano

    let valorAtualizado = valorDoPlano - valorProporcional

    valorProporcional = (valorProporcional).toFixed(2).replace('.', ',')
    valorAtualizado = (valorAtualizado).toFixed(2).replace('.', ',')



    document.getElementById('texto1').style.display = 'block'
    document.getElementById('texto2').style.display = 'block'
    

    msg5.style.width = "300px"
    msg5.style.borderRadius = "15px"
    msg5.style.padding = "15px"
    msg5.innerHTML = `
        Conforme verificado, foi aplicado um desconto de R$${valorProporcional} devido a ${diasProporcionais} dias sem conexão. Fatura ajustada para R$${valorAtualizado}
    `
    document.getElementById('copy5').style.display = 'block'
    
    msg6.style.width = "300px"
    msg6.style.borderRadius = "15px"
    msg6.style.padding = "15px"
    msg6.innerHTML = `
    Conforme verificado, fica um proporcional de cancelamento no valor de R$${valorProporcional} devido a ${diasProporcionais} dias de utilização.
    `
    document.getElementById('copy6').style.display = 'block'
}

function copiar5() {
    navigator.clipboard.writeText(document.getElementById('msg5').innerText)

}

function copiar6() {
    navigator.clipboard.writeText(document.getElementById('msg6').innerText)

}




