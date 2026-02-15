import { Routes, Route } from 'react-router-dom'
import { Home, About, Contact } from '../../pages'
import './MainSection.css';

const MainSection = () => {
    return (
        <main>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='contact' element={<Contact />} />
            </Routes>
        </main>
    )
}

export default MainSection;