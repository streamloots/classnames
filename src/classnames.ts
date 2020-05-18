import applyClassNames from './applyClassnames';
import invariant from 'tiny-warning';

type ClassNamesFunction = (
  items: string | { [key: string]: boolean }
) => string;

const ClassNames = (styles: { [key: string]: string }): ClassNamesFunction => {
  const _styles = styles;

  const bem = (className: string): string => {
    const classes = className.split(' ');
    return classes
      .map(mappedClass => {
        return _styles[mappedClass] ? _styles[mappedClass] : mappedClass;
      })
      .join(' ');
  };

  const classNames = (obj: { [key: string]: boolean }): string => {
    const classNamesToBeApplied = applyClassNames(obj).split(' ');
    const stylesClasses = Object.keys(_styles);

    const finalClassNames = classNamesToBeApplied.map(className => {
      return stylesClasses.includes(className) ? _styles[className] : className;
    });
    const classNamesResult = finalClassNames.join(' ');
    const regexUndefined = new RegExp(/undefined/g);

    const foundMatches = regexUndefined.test(classNamesResult);

    invariant(
      !foundMatches,
      `You are using in your code a key which is undefined, obj found ${JSON.stringify(
        obj,
        null,
        2
      )}`
    );

    return classNamesResult;
  };

  return function(items: string | { [key: string]: boolean }): string {
    if (typeof items === 'string') {
      return bem(items);
    }

    return classNames(items);
  };
};

export default ClassNames;
