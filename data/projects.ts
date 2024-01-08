export interface Project {
    name: string
    src: string // Image source
    alt: string
    link: string // Github link
    description: string
}

export const projects: Project[] = [
    {
        name: 'Catenary Frontend',
        src: '/images/logo.png',
        alt: 'Svelte Logo',
        link: 'https://github.com/CatenaryTransit/catenary-frontend',
        description: 'Default Web frontend for Catenary with realtime vehicle locations, labelled routes and stops.',
    },
    {
        name: 'Catenary Backend',
        src: '/images/projects/backendlogo.png',
        alt: 'Backend Logo',
        link: 'https://github.com/CatenaryTransit/catenary-backend',
        description:
            'Rust backend that powers Catenary with import, APIs for trip calculations, and routing algorithms.',
    },
    {
        name: 'Kactus',
        src: '/images/projects/kactuslogo.png',
        alt: 'Kactus Logo',
        link: 'https://github.com/CatenaryTransit/kactus-gtfs-rt',
        description:
            'Redis-based cache microservice fetching GTFS-rt from thousands of agencies every second and syncing with our algorithms.',
    },
    {
        name: 'Announcement Project',
        src: '/images/projects/announcementslogo.png',
        alt: 'Announcement Logo',
        link: 'https://github.com/CatenaryTransit/announcements',
        description: "Publishing automated announcements for the world's transit systems.",
    },
    {
        name: 'ZotGTFS',
        src: '/images/logo.png',
        alt: 'ZotGTFS Logo',
        link: 'https://github.com/CatenaryTransit/zotgtfs',
        description:
            'Converts Transloc-based shuttle and transit bus services to the open GTFS-rt format.',
    },
    {
        name: 'Amtrak GTFS-rt',
        src: '/images/logo.png',
        alt: 'Amtrak GTFS-rt Logo',
        link: 'https://github.com/CatenaryTransit/amtrak-gtfs-rt',
        description:
            'Converts Amtrak\'s proprietary Track-a-Train API data to the open GTFS-rt format.',
    },
]
