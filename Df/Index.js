

function calcularSaldos(vitoria, derrota){
    let saldoRankeado = vitoria - derrota
    return saldoRankeado
}

let vitoria = 100

let derrota = 10

console.log("O Herói tem de saldo de " + calcularSaldos(vitoria, derrota) + " está no nível de " )