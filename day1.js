// 1 – Calcule a média de diversas notas do usuário.

const fisica = 6.3;
const matematica = 9.0;
const quimica = 7.5;
const portugues = 6.3

const media = (fisica + matematica + quimica + portugues) / 2;

if(media >= 7) {
    console.log(`A média foi: ${media}. Parabéns, você foi aprovado!`);
} else {
    console.log(`A média foi: ${media}. Infelizmente você foi reprovado!`);
}
