import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with first and third params', () => {
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe('someClass class1 class2');
    });

    test('with first, second and third params', () => {
        expect(classNames('someClass', { hovered: true, scrollable: true }, ['class1', 'class2'])).toBe('someClass class1 class2 hovered scrollable');
    });

    test('with first, second false + true and third params', () => {
        expect(classNames('someClass', { hovered: true, scrollable: false }, ['class1', 'class2'])).toBe('someClass class1 class2 hovered');
    });

    test('with first, second false + undefined and third params', () => {
        expect(classNames('someClass', { hovered: true, scrollable: undefined }, ['class1', 'class2'])).toBe('someClass class1 class2 hovered');
    });
});
