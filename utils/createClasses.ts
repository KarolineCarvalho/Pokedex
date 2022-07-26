const createClasses = (
  base: string,
  styles: {
    readonly [key: string]: string;
  },
  modifiers: string[] = []
) => {
  const classes = [
    styles[base],
    ...modifiers.map((modifier) => styles[base + "--" + modifier]),
  ];

  const addClass = (name: string) => {
    classes.push(styles[base + "--" + name]);
  };

  const getClasses = () => classes.join(" ");

  return {
    addClass,
    getClasses,
  };
};

export default createClasses;
