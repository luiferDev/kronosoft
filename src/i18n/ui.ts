export const languages: Record<'es' | 'en', { name: string; flag: string }> = {
  es: { name: 'Español', flag: 'es' },
  en: { name: 'English', flag: 'us' },
} as const;

export const defaultLanguage = 'es';

export type LanguageCode = keyof typeof languages;

export const ui = {
  es: {
    projectsContent: {
      sampleProject: {
        title: 'Proyecto de Ejemplo',
        description: "Este es un proyecto de ejemplo para la plantilla.",
        imageAltText: "Imagen placeholder para el proyecto de ejemplo",
        categoryText: 'Aplicación Web',
        dateText: 'Enero 2025',
        detailedDescription:
          "Una descripción más detallada de este proyecto de ejemplo, mostrando cómo estructurar el contenido para la página de detalle del proyecto.",
        keyFeatures: {
          responsiveDesign: {
            title: 'Diseño Responsivo',
            description: "El proyecto se adapta a todos los tamaños de pantalla.",
          },
          contentManagement: {
            title: 'Gestión de Contenido Fácil',
            description:
              'Permite una gestión sencilla del contenido a través de archivos Markdown o un CMS.',
          },
        },
        galleryImages: {
          // sampleGalleryImage1: { // Si activas la galería para el ejemplo
          //   alt: "Texto alternativo para la imagen de galería 1",
          //   caption: "Leyenda para la imagen de galería 1",
          // },
        },
        challenges:
          'Descripción de los desafíos encontrados durante la creación de este proyecto ejemplo.',
        learnings: 'Descripción de los aprendizajes obtenidos de este proyecto ejemplo.',
      },
    },
    skillsContent: {
      frontendDevelopment: {
        title: 'Desarrollo Frontend',
        description:
          "Creación de interfaces de usuario interactivas y de alto rendimiento.",
      },
      backendDevelopment: {
        title: 'Desarrollo Backend',
        description: "Construcción de lógica de servidor robusta y APIs.",
      },
      uiUxDesign: {
        title: 'Diseño UI/UX',
        description:
          "Diseño de experiencias de usuario intuitivas y estéticas.",
      },
      devOps: {
        title: 'DevOps',
        description:
          'Automatización de procesos de desarrollo y despliegue.',
      },
    },
    site: {
      title: 'KronoSoft',
      description:
        'Empresa de desarrollo de software especializada en soluciones tecnológicas innovadoras.',
    },
    nav: {
      home: 'Inicio',
      blog: 'Blog',
      contact: 'Contacto',
      projects: 'Proyectos',
      tips: 'Consejos',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
    },
    homePage: {
      pageTitle: 'Inicio | KronoSoft - Empresa de Software',
      pageDescription:
        "Bienvenido a KronoSoft, empresa de desarrollo de software especializada en crear experiencias web innovadoras y soluciones tecnológicas de vanguardia.",
      heroGreeting: "Hola, Somos KronoSoft",
      heroSubtitlePart1: 'Empresa de Desarrollo de Software',
      heroSubtitlePart2: 'Especialistas en Tecnología',
      heroIntroduction: 'En KronoSoft transformamos ideas en soluciones digitales innovadoras. Somos una empresa especializada en desarrollo de software, creación de aplicaciones web y móviles, y consultoría tecnológica.',
      heroViewWorkButton: 'Ver Nuestro Trabajo',
      heroContactButton: 'Contáctanos',
      heroImageAlt:
        'Ilustración representando KronoSoft o un concepto de desarrollo',
      featuredProjectsTitle: '3 últimos proyectos',
      featuredProjectsDescription:
        "Aquí tienes algunos de los proyectos en los que hemos trabajado recientemente. ¡No dudes en explorarlos!",
      projectCardViewProject: 'Ver Proyecto',
      projectCardViewCode: 'Ver Código',
      imageNotAvailable: 'Imagen próximamente disponible',
      mySkillsTitle: 'Nuestras Competencias',
      mySkillsDescription:
        "Explora la experiencia y habilidades que definen nuestro trabajo y pasión por la tecnología.",
    },
    blogPage: {
      pageTitle: 'Nuestro Blog Técnico',
      pageDescription:
        "Artículos y reflexiones sobre desarrollo web, arquitectura de software y nuevas tecnologías.",
      title: 'Nuestro Blog Técnico',
      description:
        "Artículos y reflexiones sobre desarrollo web, arquitectura de software y nuevas tecnologías.",
      comingSoon:
        '¡Los artículos del blog aparecerán aquí pronto. Vuelve más tarde!',
      heroImageAlt: "Imagen de portada para el artículo: ",
      publishedOn: 'Publicado el: ',
      readMore: 'Leer más',
      readingTimeSuffix: 'min de lectura',
      searchPlaceholder: 'Buscar artículos...',
      filterByTagButtonLabel: 'Filtrar por etiqueta',
      noTagFound: 'No se encontró ninguna etiqueta.',
      selectTagCommandPlaceholder: 'Buscar etiqueta...',
      allTagsLabel: 'Todas las etiquetas',
      noPostsFound: 'No se encontraron artículos.',
    },
    blogPost: {
      publishedOn: 'Publicado el: ',
      updatedOn: 'Actualizado el: ',
      heroImageAlt: "Imagen de portada para el artículo: ",
      backToList: 'Volver a la lista de artículos',
      readingTimeSuffix: 'min de lectura',
      relatedPostsTitle: 'Te recomendamos también:',
      readMore: 'Leer más',
      editOnGithub: 'Proponer una modificación en GitHub',
    },
    toc: {
      title: "Tabla de Contenidos",
    },
    contactPage: {
      pageTitle: 'Contáctanos',
      pageDescription:
        "¡Hablemos de tu proyecto, una colaboración potencial, o simplemente para intercambiar sobre tecnología!",
      title: 'Contáctanos',
      description:
        "¡Hablemos de tu proyecto, una colaboración potencial, o simplemente para intercambiar sobre tecnología!",

      formTitle: 'Enviar un mensaje',
      firstNameLabel: 'Nombre',
      lastNameLabel: 'Apellido',
      emailLabel: 'Email',
      messageLabel: 'Mensaje',
      sendButtonLabel: 'Enviar',
      firstNamePlaceholder: 'Tu nombre',

      lastNamePlaceholder: 'Tu apellido',
      emailPlaceholder: 'Tu dirección de email',
      messagePlaceholder: 'Tu mensaje aquí...',
      calendarTitle: 'Programar una Reunión',
      calendarDescription:
        '¿Prefieres hablar en vivo? Reserva directamente un horario en nuestra agenda.',
      calendarButtonLabel: 'Ver nuestras disponibilidades',
      calendarLinkLabel: 'Ver nuestra agenda',
      calendarPlaceHolder:
        "La integración con Google Calendar estará disponible pronto...",
      orSeparatorText: 'O',
      toastSuccessMessageSent: '¡Mensaje enviado con éxito!',
      toastErrorFailedToSend: "Error al enviar el mensaje.",
      toastErrorUnexpected: "Ocurrió un error inesperado.",
      toastErrorDetails: "Detalles del error:",
      toastErrorValidationFailed: 'Validación del formulario fallida.',
    },
    projectDetailPage: {
      backToProjects: 'Volver a Proyectos',
      categoryLabel: 'Categoría:',
      dateLabel: 'Fecha:',
      aboutTitle: 'Acerca de este proyecto',
      keyFeaturesTitle: 'Características Clave',
      galleryTitle: 'Galería',
      challengesTitle: 'Desafíos Encontrados',
      learningsTitle: 'Lecciones Aprendidas',
      visitProjectButton: 'Visitar Proyecto',
      viewCodeButton: 'Ver Código',
    },
    projectsPage: {
      title: 'Nuestros Proyectos',
      metaTitle: 'Nuestros Proyectos | KronoSoft',
      metaDescription: 'Descubre todos nuestros proyectos.',
      noProjects: 'No hay proyectos para mostrar en este momento.',
      noProjectsDescription:
        "Parece que aún no tenemos proyectos para mostrar.",
    },
    notFoundPage: {
      pageTitle: 'Página No Encontrada',
      title: '¡Ups! Página No Encontrada',
      message:
        "Lo sentimos, la página que buscas no parece existir. Verifica la URL o regresa a la página de inicio.",
      homeLink: "Volver al Inicio",
    },

    tipsPage: {
      metaTitle: 'Consejos de Desarrollo | KronoSoft',
      metaDescription:
        'Descubre consejos y tips rápidos sobre desarrollo web y computación en la nube.',
      description:
        'Descubre consejos y tips rápidos sobre desarrollo web y computación en la nube.',
      title: 'Nuestros Últimos Consejos',
      noTips: 'No hay consejos para mostrar en este momento.',
      readTip: "Leer consejo",
      backToList: 'Volver a la lista de consejos',
      featuredTips: 'Consejos recomendados',
      allTips: 'Todos los consejos',
      tipsAvailable: 'consejos disponibles',
      tipAvailable: 'consejo disponible',
      editOnGithub: 'Editar en GitHub',
    },
    zodErrors: {
      // Common errors
      invalid_type: 'Tipo inválido.',
      invalid_type_received_undefined: 'Este campo es requerido.',
      required_field_custom: 'El campo {fieldName} es requerido.',
      // String errors
      too_small_string_minimum: 'Debe contener al menos {minimum} caracteres.',
      too_big_string_maximum: 'No debe exceder {maximum} caracteres.',
      invalid_string_email: 'Dirección de email inválida.',
      invalid_string_url: 'URL inválida.',
      invalid_string_uuid: 'UUID inválido.',
    },
  },
  en: {
    projectsContent: {
      sampleProject: {
        title: 'Sample Project',
        description: 'This is a sample project for the template.',
        imageAltText: 'Placeholder image for the sample project',
        categoryText: 'Web Application',
        dateText: 'January 2025',
        detailedDescription:
          'A more detailed description of this sample project, showing how to structure content for the project detail page.',
        keyFeatures: {
          responsiveDesign: {
            title: 'Responsive Design',
            description: 'The project adapts to all screen sizes.',
          },
          contentManagement: {
            title: 'Easy Content Management',
            description:
              'Allows for easy content management via Markdown files or a CMS.',
          },
        },
        galleryImages: {
          // sampleGalleryImage1: { // If you enable gallery for the example
          //   alt: 'Alt text for gallery image 1',
          //   caption: 'Caption for gallery image 1',
          // },
        },
        challenges:
          'Description of challenges encountered while creating this sample project.',
        learnings: 'Description of learnings from this sample project.',
      },
    },
    skillsContent: {
      frontendDevelopment: {
        title: 'Frontend Development',
        description:
          'Building interactive and high-performance user interfaces.',
      },
      backendDevelopment: {
        title: 'Backend Development',
        description: 'Constructing robust server logic and APIs.',
      },
      uiUxDesign: {
        title: 'UI/UX Design',
        description: 'Designing intuitive and aesthetic user experiences.',
      },
      devOps: {
        title: 'DevOps',
        description: 'Automating development and deployment processes.',
      },
    },
    site: {
      title: 'KronoSoft',
      description:
        'Software development company specialized in innovative technological solutions.',
    },
    nav: {
      home: 'Home',
      blog: 'Blog',
      contact: 'Contact',
      projects: 'Projects',
      tips: 'Tips',
    },
    footer: {
      rights: 'All rights reserved.',
    },
    homePage: {
      pageTitle: 'Home | KronoSoft - Software Company',
      pageDescription:
        'Welcome to KronoSoft, a software development company specialized in creating innovative web experiences and cutting-edge technological solutions.',
      heroGreeting: "Hi, We are KronoSoft",
      heroSubtitlePart1: 'Software Development Company',
      heroSubtitlePart2: 'Technology Specialists',
      heroIntroduction: 'At KronoSoft, we transform ideas into innovative digital solutions. We are a company specialized in software development, web and mobile application creation, and technology consulting.',
      heroViewWorkButton: 'View Our Work',
      heroContactButton: 'Get In Touch',
      heroImageAlt:
        'Illustration representing KronoSoft or a development concept',
      featuredProjectsTitle: '3 latest projects',
      featuredProjectsDescription:
        "Here are some of the projects we've recently worked on. Feel free to explore!",
      projectCardViewProject: 'View Project',
      projectCardViewCode: 'View Code',
      imageNotAvailable: 'Image not available for now',
      mySkillsTitle: 'Our Skills',
      mySkillsDescription:
        'Explore the expertise and abilities that define our work and passion for technology.',
    },
    blogPage: {
      pageTitle: 'Our Technical Blog',
      pageDescription:
        'Articles and thoughts on web development, software architecture, and new technologies.',
      title: 'Our Technical Blog',
      description:
        'Articles and thoughts on web development, software architecture, and new technologies.',
      comingSoon: 'Blog posts will appear here soon. Check back later!',
      heroImageAlt: 'Hero image for article: ',
      publishedOn: 'Published on: ',
      readMore: 'Read more',
      readingTimeSuffix: 'min read',
      searchPlaceholder: 'Search articles...',
      filterByTagButtonLabel: 'Filter by tag',
      noTagFound: 'No tag found.',
      selectTagCommandPlaceholder: 'Search tag...',
      allTagsLabel: 'All tags',
      noPostsFound: 'No posts found.',
    },
    blogPost: {
      publishedOn: 'Published on: ',
      updatedOn: 'Updated on: ',
      heroImageAlt: 'Hero image for article: ',
      backToList: 'Back to blog list',
      readingTimeSuffix: 'min read',
      relatedPostsTitle: 'Continue Reading',
      readMore: 'Read more',
    },
    toc: {
      title: 'Table of Contents',
    },
    contactPage: {
      pageTitle: 'Contact Us',
      pageDescription:
        "Let's discuss your project, a potential collaboration, or just chat about tech!",

      title: 'Contact Us',
      description:
        "Let's discuss your project, a potential collaboration, or just chat about tech!",
      formTitle: 'Send a message',
      firstNameLabel: 'First Name',
      lastNameLabel: 'Last Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      sendButtonLabel: 'Send',
      firstNamePlaceholder: 'Your first name',
      lastNamePlaceholder: 'Your last name',
      emailPlaceholder: 'Your email address',
      messagePlaceholder: 'Your message here...',
      calendarTitle: 'Schedule a Meeting',
      calendarDescription:
        'Prefer to talk live? Book a slot directly in our calendar.',
      calendarButtonLabel: 'See our availability',
      calendarLinkLabel: 'See our calendar',
      calendarPlaceHolder:
        'The integration with Google Calendar will be soon...',
      orSeparatorText: 'OR',
      toastSuccessMessageSent: 'Message sent successfully!',
      toastErrorFailedToSend: 'Failed to send message.',
      toastErrorUnexpected: 'An unexpected error occurred.',
      toastErrorDetails: 'Error details:',
      toastErrorValidationFailed: 'Form validation failed.',
    },
    projectDetailPage: {
      backToProjects: 'Back to Projects',
      categoryLabel: 'Category:',
      dateLabel: 'Date:',
      aboutTitle: 'About this project',
      keyFeaturesTitle: 'Key Features',
      galleryTitle: 'Gallery',
      challengesTitle: 'Challenges',
      learningsTitle: 'Learnings',
      visitProjectButton: 'Visit Project',
      viewCodeButton: 'View Code',
    },
    projectsPage: {
      title: 'Our Projects',
      metaTitle: "Our Projects | KronoSoft",
      metaDescription: "Discover all of KronoSoft's projects.",
      noProjects: 'No projects to display at the moment.',
      noProjectsDescription:
        "It seems that you don't have any projects to display at the moment.",
    },
    notFoundPage: {
      pageTitle: 'Page Not Found',
      title: 'Oops! Page Not Found',
      message:
        'Sorry, the page you are looking for does not seem to exist. Check the URL or return to the homepage.',
      homeLink: 'Return to Homepage',
    },

    tipsPage: {
      metaTitle: 'Development Tips | KronoSoft',
      metaDescription:
        'Browse a collection of quick tips and advice on Web Development and Cloud Computing.',
      title: 'Latest Tips',
      description:
        'Browse a collection of quick tips and advice on Web Development and Cloud Computing.',
      noTips: 'No tips to display at the moment.',
      readTip: 'Read tip',
      backToList: 'Back to list',
      featuredTips: 'Featured Tips',
      allTips: 'All Tips',
      tipsAvailable: 'tips available',
      tipAvailable: 'tip available',
      editOnGithub: 'Edit on GitHub',
    },
    zodErrors: {
      // Common errors
      invalid_type: 'Invalid type.',
      invalid_type_received_undefined: 'This field is required.', // For required fields (fallback)
      required_field_custom: 'The {fieldName} field is required.',
      // String errors
      too_small_string_minimum: 'Must be at least {minimum} characters long.',
      too_big_string_maximum: 'Must be no more than {maximum} characters long.',
      invalid_string_email: 'Invalid email address.',
      invalid_string_url: 'Invalid URL.',
      invalid_string_uuid: 'Invalid UUID.',
      // You can add more specific messages as needed
    },
  },
} as const;

export const getLanguageName = (lang: LanguageCode) => languages[lang];

export type UISchema = typeof ui;
export type FeatureType = keyof UISchema[typeof defaultLanguage];

export function useTranslations<F extends FeatureType>(
  lang: LanguageCode | undefined,
  feature: F
) {
  const currentLanguage = lang || defaultLanguage;

  // Get the available keys for this feature from the default language
  type AvailableKeys = keyof UISchema[typeof defaultLanguage][F];

  return function t(key: AvailableKeys): string {
    // Safely access the translation, falling back to default language if necessary
    const featureTranslations = ui[currentLanguage]?.[feature];
    if (featureTranslations && key in featureTranslations) {
      return featureTranslations[
        key as keyof typeof featureTranslations
      ] as string;
    }

    // Fallback to default language
    return ui[defaultLanguage][feature][
      key as keyof (typeof ui)[typeof defaultLanguage][F]
    ] as string;
  };
}
