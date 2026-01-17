const findPeaks = (ar: number[]): number[] => {
  let l: number = ar.length;

  if (!l) return [];
    
  else if (l === 1) return [0];

  let indeces: number[] = [];

  if (ar[0] > ar[1]) indeces.push(0);

  for (let i = 1; i < l - 1; i++) {
    if (ar[i] > ar[i - 1] && ar[i] > ar[i + 1]) indeces.push(i);
  }

  if (ar[l - 1] > ar[l - 2]) indeces.push(l - 1);

  return indeces;
};

console.log(findPeaks([1, 5, 5, 2]));
