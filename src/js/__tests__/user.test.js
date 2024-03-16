import { userHealth } from '../user';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('user healthy', () => {
  const user = { health: 51 };
  const result = userHealth(user);
  expect(result).toBe('healthy');
});

test('user wounded', () => {
  const user = { health: 50 };
  const result = userHealth(user);
  expect(result).toBe('wounded');
});

test('user critical', () => {
  const user = { health: 14 };
  const result = userHealth(user);
  expect(result).toBe('critical');
});