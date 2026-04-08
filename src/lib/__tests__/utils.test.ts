import { describe, it, expect, vi } from 'vitest';
import { cn, formatDate } from '../utils';

describe('cn', () => {
  it('should merge class names correctly', () => {
    const result = cn('foo', 'bar');
    expect(result).toBe('foo bar');
  });

  it('should handle single class', () => {
    const result = cn('single');
    expect(result).toBe('single');
  });

  it('should handle empty input', () => {
    const result = cn();
    expect(result).toBe('');
  });

  it('should handle undefined and null', () => {
    const result = cn('foo', undefined, null, 'bar');
    expect(result).toBe('foo bar');
  });

  it('should handle conditional classes', () => {
    const result = cn('base', false && 'conditional', 'always');
    expect(result).toBe('base always');
  });
});

describe('formatDate', () => {
  it('should format date in Spanish', () => {
    // Use noon UTC to avoid timezone issues
    const date = new Date(Date.UTC(2024, 5, 15, 12, 0, 0));
    const result = formatDate(date, 'es');
    expect(result).toContain('15');
    expect(result).toContain('2024');
    expect(result).toContain('junio');
  });

  it('should format date in English', () => {
    const date = new Date(Date.UTC(2024, 5, 15, 12, 0, 0));
    const result = formatDate(date, 'en');
    expect(result).toContain('15');
    expect(result).toContain('2024');
    expect(result).toContain('June');
  });

  it('should format date with different day', () => {
    const date = new Date(Date.UTC(2023, 11, 25, 12, 0, 0));
    const result = formatDate(date, 'es');
    expect(result).toContain('25');
    expect(result).toContain('2023');
    expect(result).toContain('diciembre');
  });

  it('should format date with different day in English', () => {
    const date = new Date(Date.UTC(2023, 11, 25, 12, 0, 0));
    const result = formatDate(date, 'en');
    expect(result).toContain('25');
    expect(result).toContain('2023');
    expect(result).toContain('December');
  });

  it('should handle January', () => {
    const date = new Date(Date.UTC(2024, 0, 15, 12, 0, 0));
    const resultEs = formatDate(date, 'es');
    const resultEn = formatDate(date, 'en');
    expect(resultEs).toContain('enero');
    expect(resultEn).toContain('January');
  });

  it('should handle February', () => {
    const date = new Date(Date.UTC(2024, 1, 15, 12, 0, 0));
    const result = formatDate(date, 'es');
    expect(result).toContain('15');
    expect(result).toContain('2024');
    expect(result).toContain('febrero');
  });
});
