import * as React from 'react';
import {createRoot} from 'react-dom/client';

import App from "./src/App";

const container: any = document.getElementById('root');

const root: any = createRoot(container);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
