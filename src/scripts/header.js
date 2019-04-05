import builder from './builder';
import './header.css';

const header = () => {
    const content = '<a href="/">Logo</a>';

    return builder('header', content, 'header');
};

export { header };
