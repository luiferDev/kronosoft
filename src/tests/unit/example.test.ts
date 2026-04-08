import { describe, it, expect } from 'vitest';

describe('example test', () => {
  it('should pass', () => {
    expect(true).toBe(true);
  });

  it('should match snapshot', () => {
    expect({ test: 'value' }).toMatchSnapshot();
  });
});
