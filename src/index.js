const $ = require('jquery');
import './app.scss';

import { header } from './scripts/header';
// import { footer } from './scripts/footer';
import { main } from './scripts/main';

$('body').append(header(), main());

$('button').one('click', () => {
    import('./scripts/footer')
        .then(module => {
            $('body').append(module.footer());
        })
});
