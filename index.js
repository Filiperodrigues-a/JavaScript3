const calcularTemporestante = (dataFutura) => {
    const agora = new Date().getTime();
    const diferencaDeDatas = dataFutura - dataAgora;

    const segundosDeUmMinuto = 60;
    const segundosDeUmaHora = 60 * segundosDeUmMinuto;
    const segundosDoDia = 24 * segundosDeUmaHora;

    const dias = Math.floor(diferencaDeDatas / segundosDoDia);
    const horas = Math.floor((diferencaDeDatas % segundosDoDia) / segundosDeUmaHora);
    const minutos = Math.floor((diferencaDeDatas % segundosDeUmaHora) / segundosDeUmMinuto);
    const segundos = Math.floor((diferencaDeDatas % segundosDeUmMinuto) / 1000);

    return{
        dias,
        horas,
        minutos,
        segundos
    }

}
const dataFutura = new Date('2025-03-12T22:51:00').getTime()
console.log(calcularTemporestante(dataFutura))

// Atualiza temporizador
const atualizarTemporizador = () => {
    const dataFutura = new Date('2025-21-31T23:59:50').getTime();
    const tempoRestante = calcularTempoRestante(dataFutura);
    console.log()
    document.getElementById('dias').innerText = `Dias ${tempoRestante.dias}`;
    document.getElementById('horas').innerText = `Horas ${tempoRestante.horas}`;
    document.getElementById('minutos').innerText = `Minutos ${tempoRestante.minutos}`;
    document.getElementById('segundos').innerText = `Segundos ${tempoRestante.segundos}`;

}
const intervalo = setInterval(atualizarTemporizador, 1000);
atualizarTemporizador()