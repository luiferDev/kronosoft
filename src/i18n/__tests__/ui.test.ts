import { describe, it, expect } from 'vitest';
import { languages, defaultLanguage, ui, type LanguageCode } from '../ui';

describe('i18n UI Module', () => {
  describe('languages', () => {
    it('should have Spanish and English languages', () => {
      expect(languages).toHaveProperty('es');
      expect(languages).toHaveProperty('en');
    });

    it('should have correct names for each language', () => {
      expect(languages.es.name).toBe('Español');
      expect(languages.en.name).toBe('English');
    });

    it('should have correct flags for each language', () => {
      expect(languages.es.flag).toBe('es');
      expect(languages.en.flag).toBe('us');
    });
  });

  describe('defaultLanguage', () => {
    it('should be Spanish by default', () => {
      expect(defaultLanguage).toBe('es');
    });
  });

  describe('LanguageCode type', () => {
    it('should accept valid language codes', () => {
      const esLang: LanguageCode = 'es';
      const enLang: LanguageCode = 'en';
      expect(esLang).toBe('es');
      expect(enLang).toBe('en');
    });
  });

  describe('ui object structure', () => {
    it('should have Spanish translations', () => {
      expect(ui.es).toBeDefined();
      expect(ui.es.site).toBeDefined();
      expect(ui.es.nav).toBeDefined();
      expect(ui.es.contactPage).toBeDefined();
    });

    it('should have English translations', () => {
      expect(ui.en).toBeDefined();
      expect(ui.en.site).toBeDefined();
      expect(ui.en.nav).toBeDefined();
      expect(ui.en.contactPage).toBeDefined();
    });

    it('should have matching keys in both languages', () => {
      const esKeys = Object.keys(ui.es).sort();
      const enKeys = Object.keys(ui.en).sort();
      expect(esKeys).toEqual(enKeys);
    });
  });

  describe('Spanish translations', () => {
    it('should have correct site title', () => {
      expect(ui.es.site.title).toBe('KronoSoft');
    });

    it('should have correct navigation labels', () => {
      expect(ui.es.nav.home).toBe('Inicio');
      expect(ui.es.nav.blog).toBe('Blog');
      expect(ui.es.nav.contact).toBe('Contacto');
      expect(ui.es.nav.projects).toBe('Proyectos');
      expect(ui.es.nav.tips).toBe('Consejos');
    });

    it('should have contact page translations', () => {
      expect(ui.es.contactPage.title).toBe('Contáctanos');
      expect(ui.es.contactPage.firstNameLabel).toBe('Nombre');
      expect(ui.es.contactPage.toastSuccessMessageSent).toBe(
        '¡Mensaje enviado con éxito!'
      );
    });

    it('should have Zod error translations', () => {
      expect(ui.es.zodErrors.invalid_type).toBe('Tipo inválido.');
      expect(ui.es.zodErrors.invalid_type_received_undefined).toBe(
        'Este campo es requerido.'
      );
      expect(ui.es.zodErrors.too_small_string_minimum).toBe(
        'Debe contener al menos {minimum} caracteres.'
      );
    });
  });

  describe('English translations', () => {
    it('should have correct site title', () => {
      expect(ui.en.site.title).toBe('KronoSoft');
    });

    it('should have correct navigation labels', () => {
      expect(ui.en.nav.home).toBe('Home');
      expect(ui.en.nav.blog).toBe('Blog');
      expect(ui.en.nav.contact).toBe('Contact');
      expect(ui.en.nav.projects).toBe('Projects');
      expect(ui.en.nav.tips).toBe('Tips');
    });

    it('should have contact page translations', () => {
      expect(ui.en.contactPage.title).toBe('Contact Us');
      expect(ui.en.contactPage.firstNameLabel).toBe('First Name');
      expect(ui.en.contactPage.toastSuccessMessageSent).toBe(
        'Message sent successfully!'
      );
    });

    it('should have Zod error translations', () => {
      expect(ui.en.zodErrors.invalid_type).toBe('Invalid type.');
      expect(ui.en.zodErrors.invalid_type_received_undefined).toBe(
        'This field is required.'
      );
    });
  });

  describe('language switching', () => {
    it('should access Spanish ui', () => {
      const spanishTranslations = ui['es'];
      expect(spanishTranslations.nav.home).toBe('Inicio');
    });

    it('should access English ui', () => {
      const englishTranslations = ui['en'];
      expect(englishTranslations.nav.home).toBe('Home');
    });
  });

  describe('contact form translations completeness', () => {
    it('should have all required contact form fields in Spanish', () => {
      const formFields = [
        'pageTitle',
        'pageDescription',
        'title',
        'description',
        'formTitle',
        'firstNameLabel',
        'lastNameLabel',
        'emailLabel',
        'messageLabel',
        'sendButtonLabel',
        'firstNamePlaceholder',
        'lastNamePlaceholder',
        'emailPlaceholder',
        'messagePlaceholder',
        'toastSuccessMessageSent',
        'toastErrorFailedToSend',
        'toastErrorUnexpected',
        'toastErrorValidationFailed',
      ];

      formFields.forEach((field) => {
        expect(ui.es.contactPage).toHaveProperty(field);
        expect(ui.en.contactPage).toHaveProperty(field);
      });
    });
  });
});
