const applyClassNames = (obj: { [key: string]: boolean }): string => {
  return Object.keys(obj)
    .map(key => {
      return obj[key] ? key : '';
    })
    .filter(item => {
      return item !== '';
    })
    .join(' ')
    .trim();
};

export default applyClassNames;
