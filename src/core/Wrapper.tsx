import 'styles/paper.css';

import React from 'react';

import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import routes from '../routes/routes';

function Wrapper() {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map(({ path, Component }) => (
                    <Route key={path} path={path}>
                        <Component />
                    </Route>
                ))}
            </Routes>
        </BrowserRouter>
    )
}

export default Wrapper;