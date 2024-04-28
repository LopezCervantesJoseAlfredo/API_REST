import assert from 'node:assert';
import test from 'node:test';
import * as ternurin from '../src/modulo.js';

test('el ternurin está dentro de la lista', () => {
    let resultado = 'Avril Husky';
    assert.ok(ternurin.ternurines.includes(resultado));
});