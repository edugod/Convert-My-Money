const convert = require('./convert')

test('convert cotacao 4 and quantidade 4', () => {
    // oq eu espero que esse teste, teste?
    expect(convert.convert(4,4)).toBe(16)
    //eu espero que se eu usar a função convert
    // com os valores dos parâmetros 4 e 4
    // a resposta seja 16
})

test('convert cotacao 0 and quantidade 4', () => {
    expect(convert.convert(0,4)).toBe(0)
})
test('convert cotacao 2 and quantidade 2', () => {
    expect(convert.convert(2,2)).toBe(4)
})

test('toMoney convert float', () => {
    expect(convert.toMoney(2)).toBe('2.00')
})
test('toMoney convert string', () => {
    expect(convert.toMoney('2')).toBe('2.00')
})