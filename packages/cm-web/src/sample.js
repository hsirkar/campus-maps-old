import dayjs from "dayjs";
import { LoremIpsum } from "lorem-ipsum";

function range(min, max) { 
    return Math.random() * (max - min) + min;
}

const lorem = new LoremIpsum();

const sample = Array(15).fill(0).map(() => ({
    longitude: range(-76.972, -76.930),
    latitude: range(38.977, 39.002),
    title: lorem.generateWords(4),
    user: lorem.generateWords(1),
    description: lorem.generateWords(5),
    likes: Math.round(range(0, 200)),
    comments: Math.round(range(0, 50)),
    eventDate: dayjs().add(range(-500, 500), 'day'),
    time: dayjs().subtract(range(0, 200000), 'min')
}));

export default sample;