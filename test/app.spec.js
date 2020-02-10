const expect = require('chai').expect // hämta in chai med expect
const {
    getFileContents,
    calculateBMI,
    presentBMIbeautifully,
    isInRiskZone,
    presentIfInRiskZone
} = require('../src/app')

describe('BMI calculation app test', () => {
    describe('Function getFileContents returns file contents', () => {
        it('Should return a string', () => {
            expect(getFileContents()).to.equal('')
        })

        it('Should read contents of file and return as string', () => {
            // 1 Setup (lägg upp testet)
            const dataFilePath = 'test/data/bmi.input'

            // 2 Simulate (Simulera )
            const fileContents = getFileContents(dataFilePath)

            // 3 Assert (Kontrollera)
            expect(fileContents).to.equal('1.85,75')
        })
    })

    describe('Function calculateBMI to return a number', () => {

        it('Should calculate BMI', () => {
            // Setup
            const weight = 75
            const height = 1.85

            // simulate
            const bmi = calculateBMI(weight, height)

            // assert
            expect(bmi).to.equal(21.91380569758948)
        })
    })

    describe('Function presentBMIbeautifully', () => {

        it('Should take height, weight and return a sentence', () => {
            // Setup
            const height = 1.85
            const weight = 75

            // Simulate (när man kör den del av programmet som man vill testa)
            const sentence = presentBMIbeautifully(weight, height)

            // Assert
            expect(sentence).to.equal('Ditt BMI är 21.91380569758948')
        })
    })

    describe('Function isInRiskZone(bmi)', () => {

        it('Should check if BMI is in risk zone', () => {

            expect(isInRiskZone(17)).to.be.true
            expect(isInRiskZone(30)).to.be.true
            expect(isInRiskZone(23)).to.be.false
        })

        it('Should present a sentence if in risk zone beautifully', () => {
            // setup
            const risk = isInRiskZone(17)

            // simulate
            const sentence = presentIfInRiskZone(risk)

            // assert
            expect(sentence).to.equal('Du är i riskzonen!!!')
            expect(presentIfInRiskZone(isInRiskZone(20))).to.equal('Allt ser bra ut :)')

        })
    })
})