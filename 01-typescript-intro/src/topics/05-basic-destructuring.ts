interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 60,
    songDuration: 36,
    song: "Shape of you",
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}


const { song, songDuration, audioVolume, details } = audioPlayer;
const { author, year } = details;


console.log({ song, songDuration, audioVolume, author, year })



const [p1, p2, trunks]: string[] = ['Goku', 'Vegueta', 'Trunks'];

console.log('Personaje 3:', trunks)




export { }