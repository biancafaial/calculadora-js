var Calculadora = {
    ADICAO: '+',
    SUBTRACAO: '-',
    DIVISA0: '/',
    MULTIPLICACAO: '*',

    adicionar: function (num1, num2) {

        return Calculadora.calcular(num1, num2, 
            Calculadora.ADICAO);
    },
    subtrair: function (num1, num2) {
        return Calculadora.calcular(num1, num2, 
            Calculadora.SUBTRACAO);
    },
    dividir: function (num1, num2) {
        if (num2 == 0) {
            return 'ERRO';
        }
        return Calculadora.calcular(num1, num2, 
            Calculadora.DIVISA0);
    },
    multiplicar: function (num1, num2) {
        return Calculadora.calcular(num1, num2, 
            Calculadora.MULTIPLICACAO);
    },
    calcular: function (num1, num2, operacao) {
        var result = 0; 
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        if (isNaN(num1) || isNaN(num2)) {
            return 0;
        }
        switch(operacao){
            case Calculadora.ADICAO:
                result = num1 + num2;
                break;
            case Calculadora.SUBTRACAO:
                result = num1 - num2;
                break;
            case Calculadora.DIVISA0:
                result = num1 / num2;
                break;
            case Calculadora.MULTIPLICACAO:
                result = num1*num2;
                break;
            default:
                result =0;
                break
        }

        return result;

    }
};
// usado na função 'require' do NodeJS
if (typeof module !== 'undefined'
    && typeof module.exports !== 'undefined') {
    module.exports = Calculadora;
}