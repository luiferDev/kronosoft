import { describe, it, expect } from 'vitest';
import { contactFormSchema } from '@/features/contact/type';
import type { ContactFormValues } from '@/features/contact/type';

describe('contactFormSchema', () => {
  const validFormData: ContactFormValues = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    message: 'This is a test message',
  };

  describe('firstName validation', () => {
    it('should be valid with correct input', () => {
      const result = contactFormSchema.safeParse({
        ...validFormData,
        firstName: 'John',
      });
      expect(result.success).toBe(true);
    });

    it('should fail when firstName is empty', () => {
      const result = contactFormSchema.safeParse({
        ...validFormData,
        firstName: '',
      });
      expect(result.success).toBe(false);
      // Zod default error messages are in English
      expect(result.error?.errors[0].message).toContain('at least');
    });

    it('should fail when firstName is too short (< 2 chars)', () => {
      const result = contactFormSchema.safeParse({
        ...validFormData,
        firstName: 'J',
      });
      expect(result.success).toBe(false);
      expect(result.error?.errors[0].message).toContain('at least');
    });

    it('should fail when firstName is too long (> 50 chars)', () => {
      const result = contactFormSchema.safeParse({
        ...validFormData,
        firstName: 'A'.repeat(51),
      });
      expect(result.success).toBe(false);
      expect(result.error?.errors[0].message).toContain('at most');
    });
  });

  describe('lastName validation', () => {
    it('should be valid with correct input', () => {
      const result = contactFormSchema.safeParse({
        ...validFormData,
        lastName: 'Doe',
      });
      expect(result.success).toBe(true);
    });

    it('should fail when lastName is empty', () => {
      const result = contactFormSchema.safeParse({
        ...validFormData,
        lastName: '',
      });
      expect(result.success).toBe(false);
      expect(result.error?.errors[0].message).toContain('at least');
    });

    it('should fail when lastName is too short (< 2 chars)', () => {
      const result = contactFormSchema.safeParse({
        ...validFormData,
        lastName: 'D',
      });
      expect(result.success).toBe(false);
      expect(result.error?.errors[0].message).toContain('at least');
    });

    it('should fail when lastName is too long (> 50 chars)', () => {
      const result = contactFormSchema.safeParse({
        ...validFormData,
        lastName: 'A'.repeat(51),
      });
      expect(result.success).toBe(false);
      expect(result.error?.errors[0].message).toContain('at most');
    });
  });

  describe('email validation', () => {
    it('should be valid with correct email', () => {
      const result = contactFormSchema.safeParse({
        ...validFormData,
        email: 'test@example.com',
      });
      expect(result.success).toBe(true);
    });

    it('should fail when email is empty', () => {
      const result = contactFormSchema.safeParse({
        ...validFormData,
        email: '',
      });
      expect(result.success).toBe(false);
      expect(result.error?.errors[0].message).toContain('at least');
    });

    it('should fail when email is invalid format', () => {
      const result = contactFormSchema.safeParse({
        ...validFormData,
        email: 'invalid-email',
      });
      expect(result.success).toBe(false);
      // Zod returns "Invalid email" for invalid email format
      expect(result.error?.errors[0].message).toContain('Invalid');
    });
  });

  describe('message validation', () => {
    it('should be valid with correct message', () => {
      const result = contactFormSchema.safeParse({
        ...validFormData,
        message: 'This is a valid message',
      });
      expect(result.success).toBe(true);
    });

    it('should fail when message is empty', () => {
      const result = contactFormSchema.safeParse({
        ...validFormData,
        message: '',
      });
      expect(result.success).toBe(false);
      expect(result.error?.errors[0].message).toContain('at least');
    });

    it('should fail when message is too short (< 10 chars)', () => {
      const result = contactFormSchema.safeParse({
        ...validFormData,
        message: 'Short',
      });
      expect(result.success).toBe(false);
      expect(result.error?.errors[0].message).toContain('at least');
    });

    it('should fail when message is too long (> 500 chars)', () => {
      const result = contactFormSchema.safeParse({
        ...validFormData,
        message: 'A'.repeat(501),
      });
      expect(result.success).toBe(false);
      expect(result.error?.errors[0].message).toContain('at most');
    });
  });

  describe('error format', () => {
    it('should return proper Zod error format', () => {
      const result = contactFormSchema.safeParse({
        firstName: '',
        lastName: '',
        email: 'invalid',
        message: '',
      });

      expect(result.success).toBe(false);
      expect(result.error?.format()).toMatchObject({
        firstName: { _errors: expect.any(Array) },
        lastName: { _errors: expect.any(Array) },
        email: { _errors: expect.any(Array) },
        message: { _errors: expect.any(Array) },
      });
    });
  });
});
