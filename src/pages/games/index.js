import Link from 'next/link';
import { gamesData } from '../../data/games'; // import dat

export default function index() {
    return (
        <div>
            <h1>Dashboard</h1>
            <ul>
                {gamesData.map(game => (
                    <li key={game.id}>
                        <Link href={`/games/${game.id}`}>
                                {game.title} - {game.genre}

                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};


