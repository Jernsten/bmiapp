const fs = require('fs')

function getFileContents(path) {
    if (!path) return ''

    // öppna filen och läs innehåll, omvandla till string()
    return fs.readFileSync(path).toString()
}

function calculateBMI(weight, height) {
    return weight / height / height
}

function presentBMIbeautifully(weight, height) {
    return 'Ditt BMI är ' + calculateBMI(weight, height)
}

function isInRiskZone(bmi) {
    return bmi < 19 || bmi > 25
}

function presentIfInRiskZone(risk) {
    if (risk) {
        return 'Du är i riskzonen!!!'
    } else {
        return 'Allt ser bra ut :)'
    }
}

module.exports = {
    getFileContents,
    calculateBMI,
    presentBMIbeautifully,
    isInRiskZone,
    presentIfInRiskZone
}