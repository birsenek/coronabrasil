function estimateDeaths() {
        let totalPopulation = document.getElementById('tamPop').value
        let infectionRate = document.getElementById('txInfec').value
        let deathRate = document.getElementById('txMort').value
        let totMortos = (totalPopulation * (infectionRate/100) * (deathRate/100))
        resultMort.innerHTML = `A estimativa é de ${totMortos} milhões de mortos.`      
}

function slider() {
    this.infectionRate = document.getElementById('txInfec').value
    infectionRates.innerHTML = `${infectionRate}%`
    this.deathRate = document.getElementById('txMort').value
    deathRates.innerHTML = `${deathRate}%`
}