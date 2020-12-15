describe('Suíte de testes de multiplicação', function () {
    var Calculadora = require('../../src/js/calculadora');

    it('deve retornar 6 para 2 vezes 3', function () {
        expect(Calculadora.multiplicar(2, 3)).toEqual(6)
    });

    it('deve retornar 6 para 2 vezes 3 em formato string', function () {
        expect(Calculadora.multiplicar('2', '3')).toEqual(6)
    });
    it('deve retornat 4.5 para 1.5 vezes 3', function () {
        expect(Calculadora.multiplicar(1.5, 3)).toEqual(4.5);
    });
    it('deve retornar 0 para valor1 inválido', function(){
        expect(Calculadora.multiplicar(undefined, 5)).toEqual(0)
    });
    it('deve retornar 0 para valor2 inválido', function(){
        expect(Calculadora.multiplicar(5,undefined)).toEqual(0)
    });


});