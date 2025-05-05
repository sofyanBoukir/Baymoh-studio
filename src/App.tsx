import { Route, Routes } from 'react-router-dom'
import { Layout } from './layouts/Layout'
import { Home } from './pages/Home'
import { ContactP } from './pages/ContactP'

export const App = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path='/' element={<Home />} />
            </Route>
            <Route path='/contact' element={<ContactP />} /> 
        </Routes>
    )
}
