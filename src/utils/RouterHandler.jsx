import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AllProjects from '../pages/AllProjects';
import ServerError from '../pages/ServerError';
import NotFound from '../pages/NotFound';

function RouterHandler() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<AllProjects />} />
            <Route path='/blog' element={<ServerError />} />
            <Route path='/notfound' element={<NotFound />} />
        </Routes>
    );
}

export default RouterHandler;
