import { Suspense } from 'react';
import { BrowserRouter, Navigate } from 'react-router-dom';
import { Routes, Route, NavLink } from 'react-router-dom';
import routes from './routes';
import logo from '../logo.svg';

export const Navigation = () => {
	return (
        <Suspense fallback={<h2>Loading...</h2>} >
            <BrowserRouter>
                <div className="main-layout">
                    <nav style={{ overflow: 'hidden' }}>
                        <img src={logo} alt="react logo" />
                        <ul>
                            {routes.map(({ to , name}) => (
                                <li key={to}>
                                    <NavLink to={to} 
                                        className={({ isActive }) =>	isActive ? 'nav-active' : ''}>
                                        {name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <Routes>
                        {routes.map(({ to, path, Component }) => (
                            <Route 
                                key={to}
                                path={path} 
                                element={<Component />} 
                            />
                        ))}
                        <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
                    </Routes>
                </div>
            </BrowserRouter>            
        </Suspense>
	);
};
