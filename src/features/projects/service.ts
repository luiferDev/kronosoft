// Import i18n utilities
import { ui, defaultLanguage, type LanguageCode } from '@/i18n/ui';
import placeholderImage from '@/assets/placeholder.webp';
import zorvanz from '@/assets/zorvanz-hero.webp'
import type {
  ProjectData,
  SkillData,
  TranslatedProject,
  TranslatedSkill,
} from './type';

const projectsListUnsorted: Array<ProjectData> = [
  {
    id: 'Zorvanz',
    slug: 'zorvanz',
    imageUrl: zorvanz,
    projectUrl: 'https://zorvanz.vercel.app',
    codeUrl: 'https://github.com/luiferDev/zorvanz',
    tags: ['React', 'TypeScript', '.NET', 'Supabase'],
    category: 'e-Commerce',
    date: '2025-10-15',
    galleryImages: [
      {
        id: 'zorvanzGallery1',
        src: placeholderImage,
      },
      {
        id: 'zorvanzGallery2',
        src: placeholderImage,
      },
    ],
    keyFeatures: [
      { id: 'responsiveDesign' },
      { id: 'contentManagement' },
    ],
    technologiesUsed: [
      { id: 'React', name: 'React' },
      { id: 'typescript', name: 'TypeScript' },
      { id: 'tailwindcss', name: 'TailwindCSS' },
    ],
  },
  {
    id: 'AmbuAlert',
    slug: 'ambulance-alert',
    imageUrl: placeholderImage,
    projectUrl: 'https://ambualert.vercel.app/',
    codeUrl: 'https://github.com/kronosoft/ecommerce-platform',
    tags: ['React', 'Node.js', 'MongoDB'],
    category: 'medical',
    date: '2024-12-15',
    galleryImages: [
      {
        id: 'ambualertGallery1',
        src: placeholderImage,
      },
      {
        id: 'ambualertGallery2',
        src: placeholderImage,
      },
    ],
    keyFeatures: [
      { id: 'paymentIntegration' },
      { id: 'inventoryManagement' },
    ],
    technologiesUsed: [
      { id: 'react', name: 'React' },
      { id: 'nodejs', name: 'Node.js' },
      { id: 'mongodb', name: 'MongoDB' },
    ],
  },
  {
    id: 'codigoycafe',
    slug: 'codigo-y-cafe-entre-amigos',
    imageUrl: placeholderImage,
    projectUrl: 'https://podcast-three-blush.vercel.app/',
    codeUrl: 'https://github.com/kronosoft/task-manager',
    tags: ['html', 'css', 'JavaScript'],
    category: 'Podcast',
    date: '2024-11-20',
    galleryImages: [
      {
        id: 'taskGallery1',
        src: placeholderImage,
      },
      {
        id: 'taskGallery2',
        src: placeholderImage,
      },
    ],
    keyFeatures: [
      { id: 'realTimeSync' },
      { id: 'offlineMode' },
    ],
    technologiesUsed: [
      { id: 'vue', name: 'Vue.js' },
      { id: 'firebase', name: 'Firebase' },
    ],
  },
  {
    id: 'cofreSolidario',
    slug: 'cofre-solidario',
    imageUrl: placeholderImage,
    projectUrl: 'https://podcast-three-blush.vercel.app/',
    codeUrl: 'https://github.com/kronosoft/crypto-tracker',
    tags: ['Next.js', 'Chart.js', 'API'],
    category: 'Care',
    date: '2024-10-30',
    galleryImages: [
      {
        id: 'cryptoGallery1',
        src: placeholderImage,
      },
      {
        id: 'cryptoGallery2',
        src: placeholderImage,
      },
    ],
    keyFeatures: [
      { id: 'liveData' },
      { id: 'portfolioAnalytics' },
    ],
    technologiesUsed: [
      { id: 'nextjs', name: 'Next.js' },
      { id: 'chartjs', name: 'Chart.js' },
    ],
  },
  {
    id: 'socialMedia',
    slug: 'social-media-dashboard',
    imageUrl: placeholderImage,
    projectUrl: 'https://social.kronosoft.com',
    codeUrl: 'https://github.com/kronosoft/social-dashboard',
    tags: ['React', 'GraphQL', 'PostgreSQL'],
    category: 'Social Media',
    date: '2024-09-15',
    galleryImages: [
      {
        id: 'socialGallery1',
        src: placeholderImage,
      },
      {
        id: 'socialGallery2',
        src: placeholderImage,
      },
    ],
    keyFeatures: [
      { id: 'multiPlatform' },
      { id: 'analytics' },
    ],
    technologiesUsed: [
      { id: 'react', name: 'React' },
      { id: 'graphql', name: 'GraphQL' },
    ],
  },
  {
    id: 'weatherApp',
    slug: 'weather-forecast-app',
    imageUrl: placeholderImage,
    projectUrl: 'https://play.google.com/store/apps/details?id=com.kronosoft.weather',
    codeUrl: 'https://github.com/kronosoft/weather-app',
    tags: ['Flutter', 'Dart', 'API'],
    category: 'Mobile App',
    date: '2024-08-25',
    galleryImages: [
      {
        id: 'weatherGallery1',
        src: placeholderImage,
      },
      {
        id: 'weatherGallery2',
        src: placeholderImage,
      },
    ],
    keyFeatures: [
      { id: 'geoLocation' },
      { id: 'weatherAlerts' },
    ],
    technologiesUsed: [
      { id: 'flutter', name: 'Flutter' },
      { id: 'dart', name: 'Dart' },
    ],
  },
  {
    id: 'blogPlatform',
    slug: 'modern-blog-platform',
    imageUrl: placeholderImage,
    projectUrl: 'https://blog.kronosoft.com',
    codeUrl: 'https://github.com/kronosoft/blog-platform',
    tags: ['Astro', 'MDX', 'Tailwind'],
    category: 'Content Management',
    date: '2024-07-10',
    galleryImages: [
      {
        id: 'blogGallery1',
        src: placeholderImage,
      },
      {
        id: 'blogGallery2',
        src: placeholderImage,
      },
    ],
    keyFeatures: [
      { id: 'seoOptimized' },
      { id: 'fastLoading' },
    ],
    technologiesUsed: [
      { id: 'astro', name: 'Astro' },
      { id: 'mdx', name: 'MDX' },
    ],
  },
  {
    id: 'fitnessTracker',
    slug: 'fitness-tracking-app',
    imageUrl: placeholderImage,
    projectUrl: 'https://apps.apple.com/app/kronofit/id123456789',
    codeUrl: 'https://github.com/kronosoft/fitness-tracker',
    tags: ['React Native', 'SQLite', 'Charts'],
    category: 'Health & Fitness',
    date: '2024-06-18',
    galleryImages: [
      {
        id: 'fitnessGallery1',
        src: placeholderImage,
      },
      {
        id: 'fitnessGallery2',
        src: placeholderImage,
      },
    ],
    keyFeatures: [
      { id: 'workoutPlans' },
      { id: 'progressTracking' },
    ],
    technologiesUsed: [
      { id: 'reactnative', name: 'React Native' },
      { id: 'sqlite', name: 'SQLite' },
    ],
  },
  {
    id: 'aiChatbot',
    slug: 'ai-customer-support',
    imageUrl: placeholderImage,
    projectUrl: 'https://chatbot.kronosoft.com',
    codeUrl: 'https://github.com/kronosoft/ai-chatbot',
    tags: ['Python', 'OpenAI', 'FastAPI'],
    category: 'AI/ML',
    date: '2024-05-22',
    galleryImages: [
      {
        id: 'aiGallery1',
        src: placeholderImage,
      },
      {
        id: 'aiGallery2',
        src: placeholderImage,
      },
    ],
    keyFeatures: [
      { id: 'naturalLanguage' },
      { id: 'contextAware' },
    ],
    technologiesUsed: [
      { id: 'python', name: 'Python' },
      { id: 'openai', name: 'OpenAI' },
    ],
  },
  {
    id: 'eventManager',
    slug: 'event-management-system',
    imageUrl: placeholderImage,
    projectUrl: 'https://events.kronosoft.com',
    codeUrl: 'https://github.com/kronosoft/event-manager',
    tags: ['Laravel', 'MySQL', 'Bootstrap'],
    category: 'Event Management',
    date: '2024-04-12',
    galleryImages: [
      {
        id: 'eventGallery1',
        src: placeholderImage,
      },
      {
        id: 'eventGallery2',
        src: placeholderImage,
      },
    ],
    keyFeatures: [
      { id: 'ticketing' },
      { id: 'eventScheduling' },
    ],
    technologiesUsed: [
      { id: 'laravel', name: 'Laravel' },
      { id: 'mysql', name: 'MySQL' },
    ],
  },
  {
    id: 'iotDashboard',
    slug: 'iot-monitoring-dashboard',
    imageUrl: placeholderImage,
    projectUrl: 'https://iot.kronosoft.com',
    codeUrl: 'https://github.com/kronosoft/iot-dashboard',
    tags: ['Angular', 'MQTT', 'InfluxDB'],
    category: 'IoT',
    date: '2024-03-08',
    galleryImages: [
      {
        id: 'iotGallery1',
        src: placeholderImage,
      },
      {
        id: 'iotGallery2',
        src: placeholderImage,
      },
    ],
    keyFeatures: [
      { id: 'realTimeMonitoring' },
      { id: 'deviceControl' },
    ],
    technologiesUsed: [
      { id: 'angular', name: 'Angular' },
      { id: 'mqtt', name: 'MQTT' },
    ],
  }
];

export const projectsList = [...projectsListUnsorted].sort((a, b) => {
  // Sort by date, most recent first. Ensure 'date' is a valid date string.
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return dateB.getTime() - dateA.getTime();
});

// Helper function to translate a single project
function translateProject(
  project: ProjectData,
  lang: LanguageCode
): TranslatedProject {
  type ProjectIdKey =
    keyof (typeof ui)[typeof defaultLanguage]['projectsContent'];
  const currentProjectId = project.id as ProjectIdKey;

  const projectContentSource = ui[lang]?.projectsContent?.[currentProjectId]
    ? ui[lang].projectsContent
    : ui[defaultLanguage].projectsContent;

  const i18nData = projectContentSource[currentProjectId];

  if (!i18nData) {
    // Fallback if translation for the project ID is missing
    // This might happen if i18n/ui.ts is not updated after adding a new project
    console.warn(
      `Translation missing for project ID: ${project.id} in language: ${lang}. Using default values.`
    );
    return {
      ...project,
      title: project.id, // Fallback title
      description: 'Description missing for this project.', // Fallback description
      imageAltText: 'Placeholder image', // Fallback alt text
      categoryText: project.category,
      dateText: project.date,
      detailedDescription: 'Detailed description missing.',
      keyFeaturesTranslated:
        project.keyFeatures?.map((kf) => ({
          ...kf,
          title: kf.id,
          description: 'N/A',
        })) ?? [],
      galleryImagesTranslated:
        project.galleryImages?.map((gi) => ({
          ...gi,
          alt: 'N/A',
          caption: 'N/A',
        })) ?? [],
      challenges: 'Challenges information missing.',
      learnings: 'Learnings information missing.',
    };
  }

  const keyFeaturesTranslated =
    project.keyFeatures?.map((kf) => {
      const typedKeyFeatures = i18nData?.keyFeatures as Record<
        string,
        { title: string; description: string } | undefined
      >;
      const featureTranslations = typedKeyFeatures?.[kf.id] ?? {
        title: kf.id,
        description: 'Description missing',
      };
      return {
        ...kf,
        title: featureTranslations.title,
        description: featureTranslations.description,
      };
    }) ?? [];

  const galleryImagesTranslated =
    project.galleryImages?.map((gi) => {
      const typedGalleryImages = i18nData?.galleryImages as Record<
        string,
        { alt: string; caption: string } | undefined
      >;
      const imageTranslations = typedGalleryImages?.[gi.id] ?? {
        alt: `Alt text for ${gi.id} missing`,
        caption: '',
      };
      return {
        ...gi, // This includes src and id
        alt: imageTranslations.alt,
        caption: imageTranslations.caption,
      };
    }) ?? [];

  return {
    ...project,
    title: i18nData.title,
    description: i18nData.description,
    imageAltText: i18nData.imageAltText,
    categoryText: i18nData.categoryText ?? project.category,
    dateText: i18nData.dateText ?? project.date,
    detailedDescription:
      i18nData?.detailedDescription ?? 'Detailed description missing',
    keyFeaturesTranslated,
    galleryImagesTranslated,
    challenges: i18nData?.challenges ?? 'Challenges information missing',
    learnings: i18nData?.learnings ?? 'Learnings information missing',
  };
}

// Function to get projects with translated content
export function getTranslatedProjects(
  lang: LanguageCode | undefined
): Array<TranslatedProject> {
  const currentLang = lang || defaultLanguage;
  return projectsList.map((project) => translateProject(project, currentLang));
}

// Function to get a single project by its slug (untranslated)
export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projectsList.find((project) => project.slug === slug);
}

// Function to get a single translated project by its slug
export function getTranslatedProjectBySlug(
  slug: string,
  lang: LanguageCode | undefined
): TranslatedProject | undefined {
  const project = getProjectBySlug(slug);
  if (!project) {
    return undefined;
  }
  const currentLang = lang || defaultLanguage;
  return translateProject(project, currentLang);
}

// Skills
export const skillsList: Array<SkillData> = [
  {
    id: 'frontendDevelopment',
    iconName: 'MonitorSmartphone',
    technologies: [
      { id: 'html', name: 'HTML' },
      { id: 'css', name: 'CSS' },
      { id: 'javascript', name: 'JavaScript' },
      { id: 'typescript', name: 'TypeScript' },
      { id: 'react', name: 'React' }
    ],
  },
  {
    id: 'backendDevelopment',
    iconName: 'ServerCog',
    technologies: [
      { id: 'nodejs', name: 'Node.js' },
      { id: 'restapi', name: 'REST APIs' },
      { id: 'graphql', name: 'GraphQL' },
      { id: '.NET', name: '.NET' }
    ],
  },
  {
    id: 'uiUxDesign',
    iconName: 'PenTool',
    technologies: [
      { id: 'figma', name: 'Figma' },
      { id: 'responsiveDesign', name: 'Responsive Design' },
    ],
  },
  {
    id: 'devOps',
    iconName: 'Network',
    technologies: [
      { id: 'git', name: 'Git' },
      { id: 'docker', name: 'Docker' },
      { id: 'kubernetes', name: 'Kubernetes' },
    ],
  },
  {
    id: 'IA',
    iconName: 'Brain',
    technologies: [
      { id: 'AI', name: 'AI' },
      { id: 'python', name: 'Python' },
    ],
  },
  {
    id: 'mobileDevelopment',
    iconName: 'Smartphone',
    technologies: [
      { id: 'flutter', name: 'Flutter' },
      { id: 'react-native', name: 'React Native' },
    ],
  },
];

// Function to get skills with translated content
export function getTranslatedSkills(
  lang: LanguageCode | undefined
): Array<TranslatedSkill> {
  const currentLang = lang ?? defaultLanguage;

  return skillsList.map((skill) => {
    type SkillIdKey =
      keyof (typeof ui)[typeof defaultLanguage]['skillsContent'];
    const currentSkillId = skill.id as SkillIdKey;

    const skillContentSource = ui[currentLang]?.skillsContent?.[currentSkillId]
      ? ui[currentLang].skillsContent
      : ui[defaultLanguage].skillsContent;

    const skillTranslations = skillContentSource[currentSkillId];

    if (!skillTranslations) {
      // Fallback if translation for the skill ID is missing
      console.warn(
        `Translation missing for skill ID: ${skill.id} in language: ${lang}. Using default values.`
      );
      return {
        ...skill,
        title: skill.id, // Fallback title
        description: 'Description missing for this skill.', // Fallback description
      };
    }

    return {
      ...skill, // This includes id and iconName
      title: skillTranslations.title,
      description: skillTranslations.description,
    };
  });
}
