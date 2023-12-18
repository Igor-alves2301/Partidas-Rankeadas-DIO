function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;
  
    if (saldoVitorias < 10) {
      nivel = 'Ferro';
    } else if (saldoVitorias >= 10 && vitorias <= 20) {
      nivel = 'Bronze';
    } else if (saldoVitorias>= 21 && vitorias <= 50) {
      nivel = 'Prata';
    } else if (saldoVitorias >= 51 && vitorias <= 80) {
      nivel = 'Ouro';
    } else if (saldoVitorias >= 81 && vitorias <= 90) {
      nivel = 'Diamante';
    } else if (saldoVitorias >= 91 && vitorias <= 100) {
      nivel = 'Lendário';
    } else (saldoVitorias > 100); {
      nivel = 'Imortal';
    }
  
    console.log(`O Herói tem um saldo de ${saldoVitorias} vitórias e está no nível  ${nivel}`);
  }
  
calcularNivel(1000, 7);
  