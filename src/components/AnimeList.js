import ListItem from "./ListItem";
import Image1 from '../images/1.png';
import Image2 from '../images/2.png';
import Image3 from '../images/3.png';
import Image4 from '../images/4.png';
import Image5 from '../images/5.png';

const AnimeList = () => {
    return (
        <div className="bg-dark">
            <div className="container p-4">
                <h1 className="text-warning">Top 5 Animes of the week:</h1>
                <div className="row g-4">
                    <ListItem animeName="Demon Slayer" image={Image1}></ListItem>
                    <ListItem animeName="Haikyuu" image={Image2}></ListItem>
                    <ListItem animeName="Eyeshield 21" image={Image3}></ListItem>
                    <ListItem animeName="Kuroko no Baske" image={Image4}></ListItem>
                    <ListItem animeName="Yamato Nadeshiko" image={Image5}></ListItem>
                </div>
            </div>
        </div>
    );
}

export default AnimeList;