import { useEffect, useState } from "react";
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
    const [filme, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(12);

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get("movie/upcoming", {
                params: {
                    api_key: "28fc232cc001c31e8a031f419d0a14ca",
                    language: "pt-BR",
                    page: currentPage,
                    without_genres: 27,
                }
            })

            setFilmes(response.data.results);
            setLoading(false);
        }

        loadFilmes();
    }, [currentPage])

    const totalPages = Math.ceil(filme.length / itemsPerPage);
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    if (loading) {
        return (
            <div className="loading">
                <h2>Carregando filmes...</h2>
            </div>
        )
    }

    const renderPageNumbers = pageNumbers.map(number => {
        const isActive = number === currentPage;
        const buttonClass = isActive ? 'active' : '';
        return (
            <li key={number}>
                <button className={buttonClass} onClick={() => setCurrentPage(number)}>
                    {number}
                </button>
            </li>
        );
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filme.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className="container">
            <div className="lista-filmes">
                {currentItems.map((filme) => {
                    return (
                        <article key={filme.id}>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
            <ul className="pagination">
                {renderPageNumbers}
            </ul>
        </div>
    )
}

export default Home;
