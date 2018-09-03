import Rest from '../clients/Rest';

const GET_URL = 'retro/games/';

class Games {
    getGames = (platform ='snes') => {
        return Rest.get(GET_URL + platform);
    };
}

const gamesService = new Games();

export default gamesService;