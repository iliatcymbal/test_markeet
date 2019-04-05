const builder = (tag = 'div', content = '', className = 'box') => {
    const element = document.createElement(tag);

    element.className = className;
    element.innerHTML = content;

    return element;
};

export default builder;
