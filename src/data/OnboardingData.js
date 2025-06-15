export const slides = [
    {
        id: 1,
        titleParts: [
            { text: 'Welcome to', font: 'Rubik-Regular' },
            { text: ' PlantApp', font: 'Rubik-Medium' },
        ],
        subtitle: 'Identify more than 3000+ plants and 88% accuracy.',
        mainImage: require('../../assets/Frame.png'),
        buttonText: 'Get Started',
    },
    {
        id: 2,
        titleParts: [
            { text: 'Take a photo to ', font: 'Rubik-Medium' },
            { text: 'identify ', font: 'Rubik-Bold', isUnderline: true },
            { text: 'the plant!', font: 'Rubik-Medium' },
        ],
        mainImage: require('../../assets/Content.png'),
        buttonText: 'Continue',
    },
    {
        id: 3,
        titleParts: [
            { text: 'Get plant ', font: 'Rubik-Medium' },
            { text: 'care guides ', font: 'Rubik-Bold', isUnderline: true },
        ],
        mainImage: require('../../assets/FlatiPhone.png'),
        buttonText: 'Continue',
        overlays: [
            {
                source: require('../../assets/Artwork.png'),
                style: {top: -50}
            },
            {
                source: require('../../assets/Object.png'),
                style: {zIndex: -1, top: -40}
            }
        ],
    }
];