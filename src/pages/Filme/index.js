import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './filme.css';
import api from '../../services/api';
import {toast} from 'react-toastify';


function Filme() {
    const { id } = useParams();
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();


    useEffect(() => {
        async function loadFilmes() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: 'e018a1110f8fa17247be51d6ec2b5c29',
                    language: "pt-BR",
                }
            })
                .then((response) => {
                    setFilme(response.data);
                    setLoading(false);
                })
                .catch(() => {
                    //Quando digitar um id do filme de url
                    //e o filme não é encontrado

                    navigate("/", { replace: true })
                    return; //para parar a execução do código
                })
        }

        loadFilmes();

        return () => {
        }
        
    }, [navigate, id])

    if(loading){
        return(
            <div class="filme-info">
                <h1>Carregando detalhes...</h1>
            </div>
        )
    }

    const handleClick = () => {


    };


    function salvarFilme(){
        const minhaLista = localStorage.getItem('@primeflix');
        let filmesSalvos = JSON.parse(minhaLista) || [];

        console.log(filmesSalvos);

        const hasFilme = filmesSalvos.some( (filmesSalvo) => filmesSalvo.id === filme.id);

        // O .some é para verificar se o item do arquivo json tem na lista
        //Se tem na lista retorna verdadeiro senão retorna falso

        if(hasFilme){
            toast.warn("Esse filme já está na sua lista");
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
        toast.success('Filme salvo com sucesso!');

        
    }

    return (
        <div className="filme-info">
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}/>
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avaliação: {filme.vote_average} /10</strong>

            <div className='area-buttons'>
                <button onClick={salvarFilme}>Salvar</button>
                <button>
                 <a target="_blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title}` }>
                        Trailer
                    </a>
                </button>
            </div>

        </div>
    )
}

export default Filme;