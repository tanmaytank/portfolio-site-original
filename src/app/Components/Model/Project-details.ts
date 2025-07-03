export interface PortfolioItem {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    previewImage: string;
    gallery: string;
    category: string;
}

export const portfolioItems: PortfolioItem[] = [
    {
        id: 1,
        title: 'QMS',
        description: 'Quote Management System',
        thumbnail: 'assets/img/QMS/Capture.jpg',
        previewImage: 'assets/img/QMS/qms-login.jpg',
        gallery: 'portfolio-gallery-app',
        category: 'app',
    },
    {
        id: 2,
        title: 'Ed-Tech AI',
        description: 'Online Course Management System with AI',
        thumbnail: 'assets/img/Ed-Tech/Market place.png',
        previewImage: 'assets/img/Ed-Tech/login.png',
        gallery: 'portfolio-gallery-app',
        category: 'app',
    },
    {
        id: 3,
        title: 'HEAI Case Management',
        description: 'Online Case Management System',
        thumbnail: 'assets/img/HEAI/login.PNG',
        previewImage: 'assets/img/HEAI/login.PNG',
        gallery: 'portfolio-gallery-app',
        category: 'branding',
    }
];