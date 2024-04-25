let partidas = [[50, 10], [80, 10], [40, 35], [120, 5], [100, 10], [120, 25], [80, 65]];

let nivel = ""
let niveis = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"]

var i = 0;

function saldoVitorias(vitorias, derrotas) {
  saldo = vitorias - derrotas
  return saldo
}

while (i < partidas.length) {
  saldo = saldoVitorias(partidas[i][0],partidas[i][1]);

  if (saldo <= 10) {
    nivel = niveis[0];
  } else if (saldo >= 11 && saldo <= 20) {
    nivel = niveis[1];
  } else if (saldo >= 21 && saldo <= 50) {
    nivel = niveis[2];
  } else if (saldo >= 51 && saldo <= 80) {
    nivel = niveis[3];
  } else if (saldo >= 81 && saldo <= 90) {
    nivel = niveis[4];
  } else if (saldo >= 91 && saldo <= 100) {
    nivel = niveis[5];
  } else if (saldo >= 101) {
    nivel = niveis[6];
  } 

  i++;

  console.log("O Herói tem saldo de " + saldo + " está no nível de " + nivel);

}

