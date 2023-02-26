function revert(str: string) {
  const a: string[] = str.split('');
  const reverted: string[] = [];

  let i = str.length-1;


  while (a.length > 0) {
    reverted.push(a.pop() as string)
  }

  console.log(reverted.join(''));
  return reverted.join('');
}

revert('hello world')
