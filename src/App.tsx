import { Route, Routes } from 'react-router-dom'
import { Layout } from './layouts/Layout'
import { Home } from './pages/Home'

export const App = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path='/' element={<Home />} />
            </Route>
        </Routes>
    )
}
