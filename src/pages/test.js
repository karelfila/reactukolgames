import Link from 'next/link';
import { gamesData } from '../data/games'; // import dat

const test = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <ul>
                {gamesData.map(game => (
                    <li key={game.id}>
                        <Link href={`/games/${game.id}`}>
                            <a>
                                {game.title} - {game.genre}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default test;
