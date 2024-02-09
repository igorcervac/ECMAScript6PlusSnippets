const premierLeague = ["Manchester City", "Liverpool", "Arsenal", "Chelsea"];
const serieA = ["Juventus", "Milan", "Inter", "Roma"];
const laLiga = ["Real", "Barcelona", "Atletico", "Valencia"];
const ligue1 = ["PSG", "Lyon", "Marseille", "Lille"];

const superLigue = [...premierLeague, ...serieA, ...laLiga, ...ligue1];

for (const club of superLigue){
    console.info(club);
}