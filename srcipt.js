function calcular() {
    var n = window.document.getElementById('txtn')
    var res = window.document.getElementById('res')

    if (n.value.length == 0) {
        //Se a pessoa nao digitar numero
        window.alert('ERRO. Digite um numero!')
    } else {
        //Quando a pessoa digitar numero
        res.innerHTML = ''
        for (var c = 0; c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `${n.value}X${c} = ${n.value * c}`
            item.value = `res ${c}`
            res.appendChild(item)
        }
    }
}