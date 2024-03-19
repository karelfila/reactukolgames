import Link from 'next/link';
import { gamesData } from '../../data/games';
import {useRouter} from "next/router";

export default function gamedetail (){
    const router = useRouter();
    const { id } = router.query;
    const game = gamesData.find(game => game.id === parseInt(id));
    return (
        <div>
            <h1>{game?.title}</h1>
            <p>Žánr: {game?.genre}</p>
            <p>Datum vydání: {game?.release_date}</p>
            <p>Popis: {game?.description}</p>
            <Link href={`/games/${game?.id}/edit`}>
                Editovat
            </Link>
        </div>
    );
};

