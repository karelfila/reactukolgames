import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { gamesData } from '@/data/games'; // import dat

export default function edit () {
    const router = useRouter();
    const { id } = router.query;
    const game = gamesData.find(game => game.id === parseInt(id));
    const [formData, setFormData] = useState(game);

    useEffect(() => {
        setFormData(game);
    }, [game]);

    const handleInputChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    const handleSubmit = e => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        // Redirect back to detail page
        router.push(`/games/${game.id}`);
    };



    return (
        <div>
            <h1>Editace hry: {game.title}</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Název:
                    <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Žánr:
                    <input type="text" name="genre" value={formData.genre} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Datum vydání:
                    <input type="text" name="release_date" value={formData.release_date} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Popis:
                    <textarea name="description" value={formData.description} onChange={handleInputChange} />
                </label>
                <br />
                <button type="submit">Uložit změny</button>
            </form>
        </div>
    );
};




