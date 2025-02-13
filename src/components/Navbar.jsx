import img from '../assets/images/Avatar.png'
import Filter from "../components/Filter";
import NavSearch from '../components/NavSearch';

function Navbar() {
    
    return(
        <>
        <nav className='container'>
            <div className='nav-btns com-flex'>
                <button className='btn'>News</button>
                <button className='btn'>Portal</button>
            </div>
            <div className='com-flex'>
                <a href="#">News</a>
                <a href="#">Blog</a>
                <img src={img} alt="avatar" />
            </div>
        </nav>
        <div className='nav-line'>

        </div>
        <Filter/>
        <NavSearch/>
        </>

    )
}

export default Navbar