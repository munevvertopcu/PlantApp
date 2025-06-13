export const slides = [
    {
        id: 1,
        title: 'Welcome to',
        highlight: 'PlantApp',
        subtitle: 'Identify more than 3000+ plants and 88% accuracy.',
        mainImage: require('../../assets/image.png'),
        overlays: [
            {
                source: require('../../assets/icon1.png'),
                style: { top: -5, left: 20 },
            },
            {
                source: require('../../assets/icon2.png'),
                style: { top: 23, left: 200 },
                zIndex: -1
            },
            {
                source: require('../../assets/icon3.png'),
                style: { top: 319, left: 175 },
                zIndex: -1
            },
        ],
        buttonText: 'Get Started',
    },
    {
        id: 2,
        title: 'Welcome to',
        highlight: 'PlantApp',
        subtitle: 'Identify more than 3000+ plants and 88% accuracy.',
        mainImage: require('../../assets/image2.png'),
        buttonText: 'Continue',
    }
];