import ClassNames from './classnames';

describe('ClassNames function', () => {
  it('should return the class string without if the class does not exist', () => {
    const classNames = ClassNames({});
    const className = classNames('margin-bottom');

    expect(className).toBe('margin-bottom');
  });

  it('should return the className searched', () => {
    const styles = {
      card: 'card-59494949'
    };
    const classNames = ClassNames(styles);

    expect(classNames('card')).toBe(styles.card);
  });

  it('should return the className searched and the global classes', () => {
    const styles = {
      card: 'card-59494949'
    };
    const classNames = ClassNames(styles);

    expect(classNames('card shadow-5')).toBe(`${styles.card} shadow-5`);
  });

  it('should return the classNames which are true', () => {
    const styles = {
      card: 'card-59494949',
      card__header: 'card__header-505959'
    };
    const classNames = ClassNames(styles);
    const className = classNames({
      'card': true,
      'card-header': false,
      'shadow-1': true
    });

    expect(className).toBe(`${styles.card} shadow-1`);
  });
});
