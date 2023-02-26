interface StateIncome {
  state: string;
  amount: number;
}

const income: StateIncome[] = [
  {
    state: 'sp',
    amount: 67836.43
  },
  {
    state: 'rj',
    amount: 36678.66,
  },
  {
    state: 'mg',
    amount: 29229.88
  },
  {
    state: 'es',
    amount: 27165.48
  },
  {
    state: 'outros',
    amount: 19849.53
  }
]

function main(income: StateIncome[]) {
  let total = 0;
  const result = {}

  income.map( state => { 
    total += state.amount;
    result[state.state];
  })

  income.map(data => result[data.state] = `${(data.amount * 100 / total).toFixed(2)}%`)

  Object.keys(result).map(key => console.log(key, result[key]))
}

main(income);
