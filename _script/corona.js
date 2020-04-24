function estimateDeaths() {
        let totalPopulation = document.getElementById('tamPop').value
        let infectionRate = document.getElementById('txInfec-slider').value
        let deathRate = document.getElementById('txMort-slider').value
        let totMortos = (totalPopulation * (infectionRate/100) * (deathRate/100))
        if (totMortos > 1) {
            totMortos = totMortos.toFixed(4)
        }
        resultMort.innerHTML = `A estimativa é de ${totMortos} milhões de mortos.`      
}

function slider() {
    this.infectionRate = document.getElementById('txInfec-slider').value
    infectionRates.innerHTML = `${infectionRate}%`
    this.deathRate = document.getElementById('txMort-slider').value
    deathRates.innerHTML = `${deathRate}%`
}
