export interface PortfolioItemDetails {
    id: number;
    title: string;
    description: string;
    techUsed: string[];
    projectDomain: string;
    projectUrl: string;
    category: string;
    previewImages: { src: string; alt?: string }[];
}

export interface PortfolioItemImage {
    src: string;
    alt?: string;
}

export const PORTFOLIO_DETAILS: PortfolioItemDetails[] = [
    {
        id: 1,
        title: 'Quote Management System',
        description: 'The objective is to design, develop, and implement a fully customized online quoting system specifically tailored for the industrial supplies sector. This system will streamline and automate the processes of generating accurate quotes and invoices, thereby improving operational efficiency, reducing manual errors, and enhancing the overall customer experience',
        techUsed: ['Angular 15', 'Angular Material', '.NET Core 6', 'SQL Server 2019'],
        projectDomain: 'Finance, Drop Shipping',
        projectUrl: 'app.redvestsupply.com',
        category: 'Web App',
        previewImages: [
            { src: 'assets/img/QMS/qms-login.jpg', alt: 'Login Screen' },
            { src: 'assets/img/QMS/dashboard.PNG', alt: 'Dashboard' },
            { src: 'assets/img/QMS/qms-quote-flow.png', alt: 'Quote-flow' },
            { src: 'assets/img/QMS/leave-tracker.png', alt: 'Quotes Management' }
        ]
    },
    {
        id: 2,
        title: 'Ed-Tech AI',
        description: 'The EdTech AI Platform streamlines course management by automating content creation, reducing manual effort, and enhancing learning experiences. It enables administrators to manage courses efficiently while providing students with an AI-driven, personalized learning journey.​',
        techUsed: ['Angular 18', '.NET Core 8', 'SQL Server 2022'],
        projectDomain: 'Education, AI',
        projectUrl: 'www.oedu.ai',
        category: 'Web App',
        previewImages: [
            { src: 'assets/img/Ed-Tech/Market place.png', alt: 'Market place' },
            { src: 'assets/img/Ed-Tech/login.png', alt: 'login' },
            { src: 'assets/img/Ed-Tech/course-creation.png', alt: 'course-creation' },
            { src: 'assets/img/Ed-Tech/course-creation-ai.png', alt: 'course-creation-ai' },
            { src: 'assets/img/Ed-Tech/quize.png', alt: 'quize' }
        ]
    },
    {
        id: 3,
        title: 'HEAI Case Management',
        description: 'The platform is a centralized case management system for Support Coordination Agencies (SCAs), designed to streamline operations and ensure compliance with programs like Medicaid waivers. It integrates task tracking, secure file management, and real-time communication to enhance coordination among healthcare providers and social services, ultimately improving efficiency and the delivery of high-quality, coordinated care.',
        techUsed: ['React-ts', '.NET Core 8', 'PostgreSQL 2017'],
        projectDomain: 'Healthcare, Case Management',
        projectUrl: 'sprout-dev.heai.ai',
        category: 'Web App',
        previewImages: [
            { src: 'assets/img/HEAI/login.PNG', alt: 'login' },
            { src: 'assets/img/HEAI/dashboard.png', alt: 'dashboard' },
            { src: 'assets/img/HEAI/drive.png', alt: 'drive' },
            { src: 'assets/img/HEAI/calender.PNG', alt: 'calender' },
            { src: 'assets/img/HEAI/sign-document.png', alt: 'sign-document' }
        ]
    }
];
