import { Route, Routes } from 'react-router-dom'
import { Layout } from './layouts/Layout'
import { Home } from './pages/Home'
import { ContactP } from './pages/ContactP'
import { Projects } from './pages/Projects'
import { Events } from './pages/Events'
import { Studio } from './components/Studio'

export const App = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path='/' element={<Home />} />
                <Route path='/events' element={<Events />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/studio' element={<Studio />} />
            </Route>
            <Route path='/contact' element={<ContactP />} /> 
        </Routes>
    )
}
