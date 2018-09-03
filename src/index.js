import ReactDom from 'react-dom';
import createRoutes from './routes/Routes.jsx';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

library.add(faStar)

const Routes = createRoutes();

ReactDom.render(Routes, document.getElementById('container'));

//stops browser reload when code changes
module.hot.accept();
