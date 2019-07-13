const commanumbers = number => {
  let numberString;
  if (number !== undefined) {
    numberString = number.toLocaleString(undefined, {
      maximumFractionDigits: 2
    });
  }
  return numberString;
};

const intersect = (arr1, arr2, accessors = [v => v, v => v], reverse) => {
  const [fn1, fn2] = accessors;
  const set = new Set(arr2.map(v => fn2(v)));
  return arr1.filter(value =>
    reverse ? !set.has(fn1(value)) : set.has(fn1(value))
  );
};

export const appUtils = {
  commanumbers,
  intersect
};
