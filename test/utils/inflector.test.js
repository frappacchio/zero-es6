import Inflector from '../../src/utils/inflector';

const inflector = new Inflector('puppo ciao - si è ù ego_kid MessageBusProperty       -');

describe('Inflector', () => {
  test('dasherize', () => {
    expect(inflector.dasherize()).toBe('puppo-ciao-si-e-u-ego-kid-message-bus-property');
  });
  test('underscore', () => {
    expect(inflector.underscore()).toBe('puppo_ciao_si_e_u_ego_kid_message_bus_property');
  });
  test('camelize (with flag true)', () => {
    expect(inflector.camelize(true)).toBe('PuppoCiaoSiEUEgoKidMessageBusProperty');
  });
  test('camelize', () => {
    expect(inflector.camelize()).toBe('puppoCiaoSiEUEgoKidMessageBusProperty');
  });
  test('kebab', () => {
    expect(inflector.kebab()).toBe('puppo-ciao-si-e-u-ego-kid-message-bus-property');
  });
  test('humanize', () => {
    expect(inflector.humanize()).toBe('Puppo Ciao Si E U Ego Kid Message Bus Property');
  });
  test('for empty string', () => {
    const emptyInflector = new Inflector('');
    expect(emptyInflector.humanize()).toBe('');
  });
});
