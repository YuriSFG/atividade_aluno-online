const Nota = require('../src/models/nota');

describe('Cálculo da média final e retorno do conceito', () => {
    test('retorna o conceito SS - Superior para média >= 9,0', () => {
        let nota = new Nota(null, 9, 9.5, 10);
        expect(nota.MediaFinal()).toEqual('SS - Superior');
    });

    test('retorna o conceito MS - Médio Superior para média entre 7,0 e 8,9', () => {
        let nota = new Nota(null, 7.5, 8, 8.9);
        expect(nota.MediaFinal()).toEqual('MS - Médio Superior');
    });

    test('retorna o conceito MM - Médio para média entre 5,0 e 6,9', () => {
        let nota = new Nota(null, 5, 5.5, 6);
        expect(nota.MediaFinal()).toEqual('MM - Médio');
    });

    test('retorna o conceito MI - Médio Inferior para média entre 3,0 e 4,9', () => {
        let nota = new Nota(null, 3.5, 4, 3);
        expect(nota.MediaFinal()).toEqual('MI - Médio Inferior');
    });

    test('retorna o conceito II - Inferior para média entre 0,1 e 2,9', () => {
        let nota = new Nota(null, 1, 2, 1.5);
        expect(nota.MediaFinal()).toEqual('II - Inferior');
    });

    test('retorna o conceito SR - Sem rendimento para média igual a 0,0', () => {
        let nota = new Nota(null, 0, 0, 0);
        expect(nota.MediaFinal()).toEqual('SR - Sem rendimento');
    });
});
