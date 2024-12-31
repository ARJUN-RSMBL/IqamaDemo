import { Route, Routes } from 'react-router-dom'
import IqamaFormComponent from '../pages/IqamaFormComponent'
import LoginComponent from '../components/LoginComponent';
import Home from '../components/Home';
import EmployeeTableComponent from '../pages/EmployeeTableComponent';


function Routers() {

    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/form' element={<IqamaFormComponent />}></Route>
                <Route path='/table' element={<EmployeeTableComponent />}></Route>
                <Route path='/login' element={<LoginComponent />}></Route>
            </Routes>

        </>
    )

}

export default Routers