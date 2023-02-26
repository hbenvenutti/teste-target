import { monthIncome } from "./faturamento.ts";
// import com extensão .ts porque usei deno para rodar o código.

function main(): void{
  let smallestIncome = Infinity;
  let biggestIncome = 0;
  
  let days = +monthIncome[monthIncome.length - 1].dia;
  let total = 0;
  
  monthIncome.map(day => {
    const {valor} = day;
    
    total += valor;
    
    if (valor === 0) return days--;

    if(valor < smallestIncome) return smallestIncome = valor;

    if(valor > biggestIncome) return biggestIncome = valor;
  })

  const average = total / days;

  let counter = 0;

  monthIncome.map(day => day.valor > average && counter++);

  console.log('menor faturamento diário: ', smallestIncome);
  console.log('maior faturamento diário: ', biggestIncome);
  console.log('média mensal: ', average);
  console.log('dias acima da média: ', counter);

}

main();
