const dayjs = require('dayjs');

const { LoremIpsum } = require('lorem-ipsum');
const lorem = new LoremIpsum();

function range(min, max) {
    return Math.random() * (max - min) + min;
}

function randEl(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

module.exports = () => {
    const data = { posts: [] };

    for (let i = 0; i < 15; i++) {
        data.posts.push({
            id: i,
            longitude: range(-76.972, -76.93),
            latitude: range(38.977, 39.002),
            title: lorem.generateWords(10),
            user: lorem.generateWords(1),
            // description: lorem.generateWords(25),
            description: '',
            likes: Math.round(range(0, 200)),
            comments: Array(Math.round(range(0, 50)))
                .fill(0)
                .map(() => ({
                    text: lorem.generateWords(20),
                    user: lorem.generateWords(1),
                    likes: Math.round(range(0, 50)),
                    time: dayjs().subtract(range(0, 1000), 'min'),
                    level: Math.round(range(0, 3)),
                })),
            eventDate: dayjs().add(range(-500, 500), 'day'),
            time: dayjs().subtract(range(0, 2000), 'hour'),
            visibility: randEl([
                'Public',
                'Friends',
                'Friends of friends',
                'Custom',
            ]),
            channel: randEl([
                'Landscapes',
                'Libraries',
                'Study spots',
                'Parties',
            ]),
            liked: randEl([true, false]),
            trending: randEl([true, false]),
            seen: randEl([true, false]),
        });
    }

    return data;
};