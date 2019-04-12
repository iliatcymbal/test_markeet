const foo = (...args) => args.join(' - ');

document.body.innerHTML += foo(1,2,3)

if (module.hot) {
    module.hot.accept();
}
