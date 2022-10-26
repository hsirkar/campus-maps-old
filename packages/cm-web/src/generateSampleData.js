import dayjs from 'dayjs';
import { LoremIpsum } from 'lorem-ipsum';
const lorem = new LoremIpsum();

function range(min, max) {
    return Math.random() * (max - min) + min;
}

function randEl(arr) {
    return arr[Math.floor((Math.random() * arr.length))];
}

function generateSampleData(numSamples) {
    return Array(numSamples)
        .fill(0)
        .map((_, i) => ({
            id: i,
            longitude: range(-76.972, -76.93),
            latitude: range(38.977, 39.002),
            title: lorem.generateWords(10),
            user: lorem.generateWords(1),
            description: lorem.generateWords(25),
            likes: Math.round(range(0, 200)),
            comments: Math.round(range(0, 50)),
            eventDate: dayjs().add(range(-500, 500), 'day'),
            time: dayjs().subtract(range(0, 200000), 'min'),
            visibility: randEl(['Public', 'Friends', 'Friends of friends', 'Custom']),
            channel: randEl(['Landscapes', 'Libraries', 'Study spots', 'Parties'])
        }));
}

export default generateSampleData;
