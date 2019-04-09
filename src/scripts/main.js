import builder from './builder';

const main = () => {
    const content = '<p>It is times to gather stones!</p> <input />';

    return builder('main', content, 'main');
};

export { main };
