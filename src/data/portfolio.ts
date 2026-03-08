// Import local images
import cv from '../assets/cv.jpg';
import cvDemo from '../assets/cv-demo.png';
import mloan from '../assets/ml-lp-pic.png';
import mloanproj from '../assets/ml-lp.png';
import govguide from '../assets/govguide.png';
import govproj from '../assets/govguide-proj.png';
import ledby from '../assets/ledby.jpg';
import arcade from '../assets/arcade.jpg';
import ledymail from '../assets/ledby-mail.jpg';
import arcademail from '../assets/arcade-mail.jpg';

export interface Project {
  id: string;
  title: string;
  description: string;
  overview: string;
  tools: string[];
  learnings: string[];
  screenshots: string[];
  githubLink: string;
  category: string;
}

export interface WhatNext {
  id: string;
  title: string;
  description: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  link?: string;
}

export interface Experiment {
  id: string;
  title: string;
  description: string;
  status: 'in-progress' | 'completed' | 'planned';
  technologies: string[];
}

export interface Note {
  id: string;
  title: string;
  content: string;
  date: string;
  tags: string[];
}

export interface TechSwag {
  id: string;
  name: string;
  event: string;
  year: string;
  description: string;
  screenshots: string[];
}

export const projects: Project[] = [
  {
    id: 'hand-gesture-volume',
    title: 'Hand Gesture Volume Controller',
    description: 'Control system volume using hand gestures captured through webcam',
    overview: 'A computer vision project that allows users to control their system volume through hand gestures. Using MediaPipe for hand tracking and OpenCV for video processing, this project demonstrates the practical application of computer vision in human-computer interaction.',
    tools: ['Python', 'OpenCV', 'MediaPipe', 'PyAutoGUI', 'NumPy'],
    learnings: [
      'Real-time hand landmark detection and tracking',
      'Gesture recognition algorithms',
      'Integration of computer vision with system controls',
      'Optimization for low-latency processing',
      'Handling varying lighting conditions and hand positions'
    ],
    screenshots: [cv, cvDemo], // <-- use imported images here
    githubLink: 'https://github.com/Ayshaxsa/hand-gesture-volume-control',
    category: 'Computer Vision'
  },
  {
    id: 'loan-prediction',
    title: 'Credit Loan Approval Prediction System',
    description: 'Predict loan approval status using classification algorithms',
    overview: 'A binary classification project that predicts whether a loan application will be approved based on applicant information. The model uses various features like income, credit history, employment status, and loan amount to make predictions. Implemented with multiple classification algorithms and optimized for accuracy.',
    tools: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'XGBoost', 'Matplotlib'],
    learnings: [
      'Handling imbalanced datasets',
      'Classification algorithms comparison',
      'Cross-validation techniques',
      'ROC-AUC score interpretation',
      'Feature importance analysis',
      'Business logic integration in ML models'
    ],
    screenshots: [ mloan,  mloanproj ],
    githubLink: 'https://github.com/Ayshaxsa/CreditWise_Loan-Approval-Prediction-System',
    category: 'Machine Learning'
  },
   {
    id: 'GovGuide',
    title: 'Simple Steps for Public Services',
    description: 'GovGuide helps Indian citizens access 10 key government services with guidance, checklists, and AI support.',
    overview: ' GovGuide is a modern web app that simplifies government services for Indian citizens, offering step-by-step guidance, document checklists, fee details, and AI help for 10 key services.',
    tools: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'AI Integration'],
    learnings: [
      'Building dynamic, user-friendly web interfaces',
      'Integrating AI for personalized guidance',
      'Structuring databases for service management',
      'Handling form validations and document checklists',
      'Deploying full-stack web applications',
      'Designing intuitive step-by-step user flows'
    ],
    screenshots: [govguide, govproj],
    githubLink: 'https://github.com/yourusername/house-price-prediction',
    category: 'Web Application-Vibe coded'
  },
];

export const whatNext: WhatNext[] = [
  {
    id: 'OpenSource-Contributions',
    title: 'Open Source Contributions',
    description: 'Contribute to open-source projects in web development and machine learning.'
  },
  {
    id: 'NewTechExploration',
    title: 'Explore New Technologies',
    description: 'Learn Rust, Web3 tools, and advanced React patterns to expand my skillset.'
  }
];

export const certificates: Certificate[] = [
  {
    id: 'Coding',
    title: 'Introduction to Coding',
    issuer: 'GenAI.works',
    date: '2024',
    description: 'Advanced Python programming for data analysis and visualization',
    link: '#'
  },
   {
    id: 'Web Development',
    title: 'Web Development',
    issuer: 'SheCodes',
    date: '2024',
    description: 'Cloud-based machine learning with AWS services',
    link: 'http://shecodes.io/graduates/170938-syeda-ayesha'
  },
   {
    id: 'AI | ML',
    title: 'AWS AI & ML Scholars',
    issuer: 'Udacity',
    date: '2024-2025',
    description: 'AI & ML with AWS services',
    link: 'https://mclick.udacity.com/track?uid=1f2e7f99-cef1-4a22-9b3d-6251bd83df05&txnid=b3a4cd7d-5960-4e3d-b532-7bcf974db519&eid=3bc63e1a-86bf-05ea-26b8-1937e5e4348b&mid=26c9c0bd-7ad5-40db-ba00-efffaa271d30&bsft_ek=2025-08-04T17%3A41%3A13Z&bsft_mime_type=html&bsft_tv=7&bsft_lx=1&bsft_aaid=8d7e276e-4a10-41b2-8868-423fe96dd6b2&a=click&redir=https%3A%2F%2Flearn.udacity.com%2Fview-certificate%2Fcd14262%3Futm_campaign%3Dret_600_auto_ndxxx_graduation_global%26utm_source%3Dblueshift%26utm_medium%3Demail%26utm_content%3Dret_600_auto_ndxxx_graduation-certificate-si_global'
  }
];

export const experiments: Experiment[] = [
 {
  id: 'text-analysis-completed',
  title: 'Text Analysis on Customer Feedback',
  description: 'Performed comprehensive text analysis to extract insights, identify common themes, and visualize trends in customer feedback data.',
  status: 'completed',
  technologies: ['Python', 'NLTK', 'spaCy', 'Pandas', 'Matplotlib']
  },
  {
  id: 'sentiment-analysis-completed',
  title: 'Sentiment Analysis on Movie Reviews',
  description: 'Built and deployed a sentiment analysis model that classifies movie reviews as positive or negative using a fine-tuned BERT transformer.',
  status: 'in-progress',
  technologies: ['Python', 'PyTorch', 'Transformers', 'Hugging Face', 'Pandas']
 },
  {
    id: 'transformer-nlp',
    title: 'Custom Transformer for Text Classification',
    description: 'Building a transformer model from scratch for sentiment analysis',
    status: 'planned',
    technologies: ['PyTorch', 'Transformers', 'BERT', 'Python']
  },
  {
    id: 'gan-art',
    title: 'GAN for Artistic Style Transfer',
    description: 'Generative Adversarial Network for converting photos to artistic styles',
    status: 'planned',
    technologies: ['TensorFlow', 'Keras', 'GANs', 'CNN']
  },
  {
    id: 'rl-game',
    title: 'Reinforcement Learning Game Agent',
    description: 'Training an RL agent to play retro games using Deep Q-Learning',
    status: 'planned',
    technologies: ['OpenAI Gym', 'PyTorch', 'DQN', 'Python']
  },
  {
    id: 'time-series',
    title: 'Time Series Forecasting with LSTM',
    description: 'Stock price prediction using LSTM networks',
    status: 'planned',
    technologies: ['LSTM', 'TensorFlow', 'Pandas', 'Python']
  }
];

export const notes: Note[] = [
  {
    id: 'gradient-descent',
    title: 'Understanding Gradient Descent',
    content: 'Key insights on optimization algorithms: batch vs stochastic vs mini-batch gradient descent. Learning rate scheduling is crucial for convergence.',
    date: '2025',
    tags: ['Machine Learning', 'Optimization', 'Theory']
  },
  {
    id: 'overfitting',
    title: 'Tackling Overfitting',
    content: 'Effective techniques: dropout, L1/L2 regularization, early stopping, data augmentation. Always validate on unseen data.',
    date: '2025',
    tags: ['Machine Learning', 'Best Practices']
  },
  {
    id: 'transformers',
    title: 'Transformer Architecture Notes',
    content: 'Self-attention mechanism is the key. Multi-head attention allows the model to focus on different aspects simultaneously. Positional encoding crucial for sequence order.',
    date: '2026',
    tags: ['Deep Learning', 'NLP', 'Architecture']
  },
  {
    id: 'feature-engineering',
    title: 'Feature Engineering Tips',
    content: 'Domain knowledge is essential. Polynomial features, interaction terms, binning, encoding strategies. Feature scaling matters for distance-based algorithms.',
    date: '2025',
    tags: ['Data Science', 'Preprocessing']
  }
];

export const techSwag: TechSwag[] = [
    {
    id: 'Arcade-2025',
    name: 'Arcade Swag',
    event: 'Online - Google Arcade Facilitated Program',
    year: '2025',
    description: 'Received as part of the Google Arcade Facilitated Program for participation and achievements.',
    screenshots: [arcademail, arcade]
  },
  {
    id: 'LedBy Facilitator-2025',
    name: 'Graduation Kit',
    event: 'Online - Graduated from the Cohort-17',
    year: '2025',
    description: 'Received as part of the Google Arcade Facilitated Program for participation and achievements.',
    screenshots: [ledymail,ledby]
  }
];

export const resumeData = {
  name: 'Syeda Ayesha',
  title: 'Machine Learning Enthusiat',
  email: 'ayesha.sa4c@gmail.com',
  location: 'Hyderabad, India',
  summary: 'I’m an ML enthusiast who loves building smart systems that actually solve problems. Into computer vision, NLP, deep learning, and experimenting with tools and ideas. ',
  skills: [
    'Python', 'PyTorch', 'Scikit-learn',
    'OpenCV', 'Pandas', 'NumPy',
    'Machine Learning', 'Deep Learning', 'Computer Vision',
    'NLP', 'Data Analysis'
  ],
  experience: [
    {
      title: 'Data Science Intern',
      company: 'Oasis Infobyte',
      period: '2026 - Presnt',
      description: 'Built predictive models and conducted data analysis'
    },
    {
      title: 'LedBy Apprenticeship',
      company: 'LedBy',
      period: '2025 - 2026',
      description: 'Selected for the LedBy Accelerator, a Hardward-incubated leadership program designed to equip Indian Muslim Women with professional and leadership skills through expert mentorship, career, coaching and community support.'
    },
    {
      title: 'SheCodes Participant',
      company: 'SheCodes',
      period: ' 2024 ',
      description: 'Completed a workshop on basic web development, gaining hands-on experience with HTML, CSS, and JavaScript, and building simple web projects.'
    }
  ],
  education: [
    {
      degree: '12th',
      school: 'State Board',
      year: '2022',
      focus: 'Math, Physics, Chemistry'
    },
    {
      degree: 'B.Tech Computer Science',
      school: 'VGSE',
      year: '2024',
      focus: 'Artificial Intelligence and Machine Learning'
    }
  ]
};
