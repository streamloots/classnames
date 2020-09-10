import ClassNames from './classnames';

beforeEach(() => {
  console.warn = jest.fn();
});

afterEach(() => {
  (console.warn as jest.Mock).mockRestore();
});

describe('ClassNames function', () => {
  it('should return the class string without if the class does not exist', () => {
    const classNames = ClassNames({});
    const className = classNames('margin-bottom');

    expect(className).toBe('margin-bottom');
    expect(console.warn).not.toHaveBeenCalled();
  });

  it('should return the className searched', () => {
    const styles = {
      card: 'card-59494949'
    };
    const classNames = ClassNames(styles);

    expect(classNames('card')).toBe(styles.card);
    expect(console.warn).not.toHaveBeenCalled();
  });

  it('should return the className searched and the global classes', () => {
    const styles = {
      card: 'card-59494949'
    };
    const classNames = ClassNames(styles);

    expect(classNames('card shadow-5')).toBe(`${styles.card} shadow-5`);
    expect(console.warn).not.toHaveBeenCalled();
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
    expect(console.warn).not.toHaveBeenCalled();
  });

  it('should pass the dynamic className', () => {
    const styles = {
      card: 'card-59494949',
      card__header: 'card__header-505959'
    };
    const classNames = ClassNames(styles);
    const stringy = 'hello';
    const className = classNames({
      'card': true,
      'card-header': false,
      'shadow-1': true,
      [stringy]: stringy
    });

    expect(className).toBe(`${styles.card} shadow-1 hello`);
    expect(console.warn).not.toHaveBeenCalled();
  });

  it('should filter the classnames in case they come as undefined', () => {
    const styles = {
      card: 'card-59494949',
      card__header: 'card__header-505959'
    };
    const dynamicClassName: any = undefined;
    const classNames = ClassNames(styles);
    const className = classNames({
      'card': true,
      'card-header': false,
      [dynamicClassName]: dynamicClassName
    });

    expect(className).toBe(`${styles.card}`);
    expect(console.warn).not.toHaveBeenCalled();
  });

  it('should call invariant function if the key that I pass in the object is undefined', () => {
    const styles = {
      card: 'card-59494949',
      card__header: 'card__header-505959'
    };
    const dynamicClassName: any = undefined;
    const classNames = ClassNames(styles);
    const className = classNames({
      'card': true,
      'card-header': false,
      [dynamicClassName]: true
    });

    expect(console.warn).toHaveBeenCalled();
    expect(console.warn).toHaveBeenCalledTimes(1);
    expect(className).toBe(`${styles.card} undefined`);
  });

  it("should apply the class if the property it's number", () => {
    const styles = {
      card: 'card-59494949',
      card__header: 'card__header-505959'
    };
    const classNames = ClassNames(styles);
    const sm = 6;
    const className = classNames({
      card: true,
      [`col-sm-${sm}`]: sm
    });

    expect(className).toBe(`${styles.card} col-sm-${sm}`);
  });

  it("should not apply the class if the property it's undefined", () => {
    const styles = {
      card: 'card-59494949',
      card__header: 'card__header-505959'
    };
    const classNames = ClassNames(styles);
    const injectedClassName = undefined;
    const className = classNames({
      card: true,
      card__header: injectedClassName
    });

    expect(className).toBe(`${styles.card}`);
  });

  it("should not inject a dynamic class if it's an empty string", () => {
    const styles = {
      card: 'card-59494949',
      card__header: 'card__header-505959'
    };
    const classNames = ClassNames(styles);
    const injectedClassName = '';
    const className = classNames({
      card: true,
      [injectedClassName]: injectedClassName
    });

    expect(className).toBe(`${styles.card}`);
  });
});
