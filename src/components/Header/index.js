import './header.css';
import { Link } from 'react-router-dom'

function Headers() {

    function showSubmenu(event) {
        const target = event.target;
        const submenu = target.querySelector('.submenu');
        if (submenu) {
            submenu.classList.add('show');
        }
    }

    function hideSubmenu(event) {
        const target = event.target;
        const submenu = target.querySelector('.submenu');
        if (submenu) {
            submenu.classList.remove('show');
        }
    }

    return (
        <header>
            <h1></h1>
            <nav>
                <ul className='menu'>
                    <li onMouseEnter={showSubmenu} onMouseLeave={hideSubmenu}>
                        <Link className="logo" to="/"> Prime Flix </Link>
                    </li>
                    <li className='categoria' onMouseEnter={showSubmenu} onMouseLeave={hideSubmenu}>
                        <Link className="favoritos" to="/favoritos"> Categoria </Link>
                        <ul className="submenu">
                            <li>
                                <Link to="/categoria/80">Ação</Link>
                            </li>
                            <li>
                                <Link to="/categoria/16">Comédia</Link>
                            </li>
                            <li>
                                <Link to="/categoria/10751">Drama</Link>
                            </li>
                        </ul>
                    </li>
                    <li onMouseEnter={showSubmenu} onMouseLeave={hideSubmenu}>
                        <Link className="favoritos" to="/favoritos"> Meus Favoritos </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Headers;


