import hearts from '../assets/hearts.png';
import diamonds from '../assets/diamonds_new.png';
import spades from '../assets/spades_new.png';
import clubs from '../assets/clubs_new.png';

export const randomGenerator = (min, max) => {
    return Math.floor(Math.random() * max) + min;
};

export const suits = ['hearts', 'diamonds', 'spades', 'clubs'];

export const typeInfo = {
    hearts: {
        color: 'red',
        image: hearts
    },
    diamonds: {
        color: 'red',
        image: diamonds
    },
    spades: {
        color: 'black',
        image: spades
    },
    clubs: {
        color: 'black',
        image: clubs
    }
};