import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  id: number;
  name: string;
  type: string;

  PokeList: any[] = [
    {
      "id": "001",
      "name": "Bulbasaur",
      "img": "http://img.pokemondb.net/artwork/bulbasaur.jpg",
      "type": [
        "Grass",
        "Poison"
      ]
    },
    {
      "id": "002",
      "name": "Ivysaur",
      "img": "http://img.pokemondb.net/artwork/ivysaur.jpg",
      "type": [
        "Grass",
        "Poison"
      ],
    },
    {
      "id": "003",
      "name": "Venusaur",
      "img": "http://img.pokemondb.net/artwork/venusaur.jpg",
      "type": [
        "Grass",
        "Poison"
      ],
    },
    {
      "id": "004",
      "name": "Charmander",
      "img": "http://img.pokemondb.net/artwork/charmander.jpg",
      "type": [
        "Fire"
      ],
    },
    {
      "id": "005",
      "name": "Charmeleon",
      "img": "http://img.pokemondb.net/artwork/charmeleon.jpg",
      "type": [
        "Fire"
      ],
    },
    {
      "id": "006",
      "name": "Charizard",
      "img": "http://img.pokemondb.net/artwork/charizard.jpg",
      "type": [
        "Fire",
        "Flying"
      ],
    },
    {
      "id": "007",
      "name": "Squirtle",
      "img": "http://img.pokemondb.net/artwork/squirtle.jpg",
      "type": [
        "Water"
      ],
    },
    {
      "id": "008",
      "name": "Wartortle",
      "img": "http://img.pokemondb.net/artwork/wartortle.jpg",
      "type": [
        "Water"
      ],
    },
    {
      "id": "009",
      "name": "Blastoise",
      "img": "http://img.pokemondb.net/artwork/blastoise.jpg",
      "type": [
        "Water"
      ],
    },
    {
      "id": "010",
      "name": "Caterpie",
      "img": "http://img.pokemondb.net/artwork/caterpie.jpg",
      "type": [
        "Bug"
      ],
    },
    {
      "id": "011",
      "name": "Metapod",
      "img": "http://img.pokemondb.net/artwork/metapod.jpg",
      "type": [
        "Bug"
      ],
    },
    {
      "id": "012",
      "name": "Butterfree",
      "img": "http://img.pokemondb.net/artwork/butterfree.jpg",
      "type": [
        "Bug",
        "Flying"
      ],
    },
    {
      "id": "013",
      "name": "Weedle",
      "img": "http://img.pokemondb.net/artwork/weedle.jpg",
      "type": [
        "Bug",
        "Poison"
      ],
    },
    {
      "id": "014",
      "name": "Kakuna",
      "img": "http://img.pokemondb.net/artwork/kakuna.jpg",
      "type": [
        "Bug",
        "Poison"
      ],
    },
    {
      "id": "015",
      "name": "Beedrill",
      "img": "http://img.pokemondb.net/artwork/beedrill.jpg",
      "type": [
        "Bug",
        "Poison"
      ],
    },
    {
      "id": "016",
      "name": "Pidgey",
      "img": "http://img.pokemondb.net/artwork/pidgey.jpg",
      "type": [
        "Normal",
        "Flying"
      ],
    },
    {
      "id": "017",
      "name": "Pidgeotto",
      "img": "http://img.pokemondb.net/artwork/pidgeotto.jpg",
      "type": [
        "Normal",
        "Flying"
      ],
    },
    {
      "id": "018",
      "name": "Pidgeot",
      "img": "http://img.pokemondb.net/artwork/pidgeot.jpg",
      "type": [
        "Normal",
        "Flying"
      ],
    },
    {
      "id": "019",
      "name": "Rattata",
      "img": "http://img.pokemondb.net/artwork/rattata.jpg",
      "type": [
        "Normal"
      ],
    },
    {
      "id": "020",
      "name": "Raticate",
      "img": "http://img.pokemondb.net/artwork/raticate.jpg",
      "type": [
        "Normal"
      ],
    },
    {
      "id": "021",
      "name": "Spearow",
      "img": "http://img.pokemondb.net/artwork/spearow.jpg",
      "type": [
        "Normal",
        "Flying"
      ],
    },
    {
      "id": "022",
      "name": "Fearow",
      "img": "http://img.pokemondb.net/artwork/fearow.jpg",
      "type": [
        "Normal",
        "Flying"
      ],
    },
    {
      "id": "023",
      "name": "Ekans",
      "img": "http://img.pokemondb.net/artwork/ekans.jpg",
      "type": [
        "Poison"
      ],
    },
    {
      "id": "024",
      "name": "Arbok",
      "img": "http://img.pokemondb.net/artwork/arbok.jpg",
      "type": [
        "Poison"
      ],
    },
    {
      "id": "025",
      "name": "Pikachu",
      "img": "http://img.pokemondb.net/artwork/pikachu.jpg",
      "type": [
        "Electric"
      ],
    },
    {
      "id": "026",
      "name": "Raichu",
      "img": "http://img.pokemondb.net/artwork/raichu.jpg",
      "type": [
        "Electric"
      ],
    },
    {
      "id": "027",
      "name": "Sandshrew",
      "img": "http://img.pokemondb.net/artwork/sandshrew.jpg",
      "type": [
        "Ground"
      ],
    },
    {
      "id": "028",
      "name": "Sandslash",
      "img": "http://img.pokemondb.net/artwork/sandslash.jpg",
      "type": [
        "Ground"
      ],
    },
    {
      "id": "029",
      "name": "Nidoran?",
      "img": "http://img.pokemondb.net/artwork/nidoran?.jpg",
      "type": [
        "Poison"
      ],
    },
    {
      "id": "030",
    "name": "Nidorina",
    "img": "http://img.pokemondb.net/artwork/nidorina.jpg",
    "type": [
      "Poison"
    ],
    },
    {
      "id": "031",
      "name": "Nidoqueen",
      "img": "http://img.pokemondb.net/artwork/nidoqueen.jpg",
      "type": [
        "Poison",
        "Ground"
      ],
    },
    {
      "id": "032",
      "name": "Nidoran?",
      "img": "http://img.pokemondb.net/artwork/nidoran?.jpg",
      "type": [
        "Poison"
      ],
    },
    {
      "id": "033",
      "name": "Nidorino",
      "img": "http://img.pokemondb.net/artwork/nidorino.jpg",
      "type": [
        "Poison"
      ],
    },
    {
      "id": "034",
      "name": "Nidoking",
      "img": "http://img.pokemondb.net/artwork/nidoking.jpg",
      "type": [
        "Poison",
        "Ground"
      ],
    },
    {
      "id": "035",
      "name": "Clefairy",
      "img": "http://img.pokemondb.net/artwork/clefairy.jpg",
      "type": [
        "Normal"
      ],
    },
    {
      "id": "036",
      "name": "Clefable",
      "img": "http://img.pokemondb.net/artwork/clefable.jpg",
      "type": [
        "Normal"
      ],
    },
    {
      "id": "037",
      "name": "Vulpix",
      "img": "http://img.pokemondb.net/artwork/vulpix.jpg",
      "type": [
        "Fire"
      ],
    },
    {
      "id": "038",
      "name": "Ninetales",
      "img": "http://img.pokemondb.net/artwork/ninetales.jpg",
      "type": [
        "Fire"
      ],
    },
    {
      "id": "039",
      "name": "Jigglypuff",
      "img": "http://img.pokemondb.net/artwork/jigglypuff.jpg",
      "type": [
        "Normal"
      ],
    },
    {
      "id": "040",
      "name": "Wigglytuff",
      "img": "http://img.pokemondb.net/artwork/wigglytuff.jpg",
      "type": [
        "Normal"
      ],
    },
    {
      "id": "041",
      "name": "Zubat",
      "img": "http://img.pokemondb.net/artwork/zubat.jpg",
      "type": [
        "Poison",
        "Flying"
      ],
    },
    {
      "id": "042",
      "name": "Golbat",
      "img": "http://img.pokemondb.net/artwork/golbat.jpg",
      "type": [
        "Poison",
        "Flying"
      ],
    },
    {
      "id": "043",
      "name": "Oddish",
      "img": "http://img.pokemondb.net/artwork/oddish.jpg",
      "type": [
        "Grass",
        "Poison"
      ],
    },
    {
      "id": "044",
      "name": "Gloom",
      "img": "http://img.pokemondb.net/artwork/gloom.jpg",
      "type": [
        "Grass",
        "Poison"
      ],
    },
    {
      "id": "045",
      "name": "Vileplume",
      "img": "http://img.pokemondb.net/artwork/vileplume.jpg",
      "type": [
        "Grass",
        "Poison"
      ],
    },
    {
      "id": "046",
      "name": "Paras",
      "img": "http://img.pokemondb.net/artwork/paras.jpg",
      "type": [
        "Bug",
        "Grass"
      ],
    },
    {
      "id": "047",
      "name": "Parasect",
      "img": "http://img.pokemondb.net/artwork/parasect.jpg",
      "type": [
        "Bug",
        "Grass"
      ],
    },
    {
      "id": "048",
      "name": "Venonat",
      "img": "http://img.pokemondb.net/artwork/venonat.jpg",
      "type": [
        "Bug",
        "Poison"
      ],
    },
    {
      "id": "049",
      "name": "Venomoth",
      "img": "http://img.pokemondb.net/artwork/venomoth.jpg",
      "type": [
        "Bug",
        "Poison"
      ],
    },
    {
      "id": "050",
      "name": "Diglett",
      "img": "http://img.pokemondb.net/artwork/diglett.jpg",
      "type": [
        "Ground"
      ],
    },
    {
      "id": "051",
      "name": "Dugtrio",
      "img": "http://img.pokemondb.net/artwork/dugtrio.jpg",
      "type": [
        "Ground"
      ],
    },
    {
      "id": "052",
      "name": "Meowth",
      "img": "http://img.pokemondb.net/artwork/meowth.jpg",
      "type": [
        "Normal"
      ],
    },
    {
      "id": "053",
      "name": "Persian",
      "img": "http://img.pokemondb.net/artwork/persian.jpg",
      "type": [
        "Normal"
      ],
    },
    {
      "id": "054",
      "name": "Psyduck",
      "img": "http://img.pokemondb.net/artwork/psyduck.jpg",
      "type": [
        "Water"
      ],
    },
    {
      "id": "055",
      "name": "Golduck",
      "img": "http://img.pokemondb.net/artwork/golduck.jpg",
      "type": [
        "Water"
      ],
    },
    {
      "id": "056",
      "name": "Mankey",
      "img": "http://img.pokemondb.net/artwork/mankey.jpg",
      "type": [
        "Fighting"
      ],
    },
    {
      "id": "057",
      "name": "Primeape",
      "img": "http://img.pokemondb.net/artwork/primeape.jpg",
      "type": [
        "Fighting"
      ],
    },
    {
      "id": "058",
      "name": "Growlithe",
      "img": "http://img.pokemondb.net/artwork/growlithe.jpg",
      "type": [
        "Fire"
      ],
    },
    {
      "id": "059",
      "name": "Arcanine",
      "img": "http://img.pokemondb.net/artwork/arcanine.jpg",
      "type": [
        "Fire"
      ],
    },
    {
      "id": "060",
      "name": "Poliwag",
      "img": "http://img.pokemondb.net/artwork/poliwag.jpg",
      "type": [
        "Water"
      ],
    },
    {
      "id": "061",
      "name": "Poliwhirl",
      "img": "http://img.pokemondb.net/artwork/poliwhirl.jpg",
      "type": [
        "Water"
      ],
    },
    {
      "id": "062",
      "name": "Poliwrath",
      "img": "http://img.pokemondb.net/artwork/poliwrath.jpg",
      "type": [
        "Water",
        "Fighting"
      ],
    },
    {
      "id": "063",
      "name": "Abra",
      "img": "http://img.pokemondb.net/artwork/abra.jpg",
      "type": [
        "Psychic"
      ],
    },
    {
      "id": "064",
      "name": "Kadabra",
      "img": "http://img.pokemondb.net/artwork/kadabra.jpg",
      "type": [
        "Psychic"
      ],
    },
    {
      "id": "065",
      "name": "Alakazam",
      "img": "http://img.pokemondb.net/artwork/alakazam.jpg",
      "type": [
        "Psychic"
      ],
    },
    {
      "id": "066",
      "name": "Machop",
      "img": "http://img.pokemondb.net/artwork/machop.jpg",
      "type": [
        "Fighting"
      ],
    },
    {
      "id": "067",
      "name": "Machoke",
      "img": "http://img.pokemondb.net/artwork/machoke.jpg",
      "type": [
        "Fighting"
      ],
    },
    {
      "id": "068",
      "name": "Machamp",
      "img": "http://img.pokemondb.net/artwork/machamp.jpg",
      "type": [
        "Fighting"
      ],
    },
    {
      "id": "069",
      "name": "Bellsprout",
      "img": "http://img.pokemondb.net/artwork/bellsprout.jpg",
      "type": [
        "Grass",
        "Poison"
      ],
    },
    {
      "id": "070",
      "name": "Weepinbell",
      "img": "http://img.pokemondb.net/artwork/weepinbell.jpg",
      "type": [
        "Grass",
        "Poison"
      ],
    },
    {
      "id": "071",
      "name": "Victreebel",
      "img": "http://img.pokemondb.net/artwork/victreebel.jpg",
      "type": [
        "Grass",
        "Poison"
      ],
    },
    {
      "id": "072",
      "name": "Tentacool",
      "img": "http://img.pokemondb.net/artwork/tentacool.jpg",
      "type": [
        "Water",
        "Poison"
      ],
    },
    {
      "id": "073",
      "name": "Tentacruel",
      "img": "http://img.pokemondb.net/artwork/tentacruel.jpg",
      "type": [
        "Water",
        "Poison"
      ],
    },
    {
      "id": "074",
      "name": "Geodude",
      "img": "http://img.pokemondb.net/artwork/geodude.jpg",
      "type": [
        "Rock",
        "Ground"
      ],
    },
    {
      "id": "075",
      "name": "Graveler",
      "img": "http://img.pokemondb.net/artwork/graveler.jpg",
      "type": [
        "Rock",
        "Ground"
      ],
    },
    {
      "id": "076",
      "name": "Golem",
      "img": "http://img.pokemondb.net/artwork/golem.jpg",
      "type": [
        "Rock",
        "Ground"
      ],
    },
    {
      "id": "077",
      "name": "Ponyta",
      "img": "http://img.pokemondb.net/artwork/ponyta.jpg",
      "type": [
        "Fire"
      ],
    },
    {
      "id": "078",
      "name": "Rapidash",
      "img": "http://img.pokemondb.net/artwork/rapidash.jpg",
      "type": [
        "Fire"
      ],
    },
    {
      "id": "079",
      "name": "Slowpoke",
      "img": "http://img.pokemondb.net/artwork/slowpoke.jpg",
      "type": [
        "Water",
        "Psychic"
      ],
    },
    {
      "id": "080",
      "name": "Slowbro",
      "img": "http://img.pokemondb.net/artwork/slowbro.jpg",
      "type": [
        "Water",
        "Psychic"
      ],
    },
    {
      "id": "081",
      "name": "Magnemite",
      "img": "http://img.pokemondb.net/artwork/magnemite.jpg",
      "type": [
        "Electric",
        "Steel"
      ],
    },
    {
      "id": "082",
      "name": "Magneton",
      "img": "http://img.pokemondb.net/artwork/magneton.jpg",
      "type": [
        "Electric",
        "Steel"
      ],
    },
    {
      "id": "083",
      "name": "Farfetch'd",
      "img": "http://img.pokemondb.net/artwork/farfetch'd.jpg",
      "type": [
        "Normal",
        "Flying"
      ],
    },
    {
      "id": "084",
      "name": "Doduo",
      "img": "http://img.pokemondb.net/artwork/doduo.jpg",
      "type": [
        "Normal",
        "Flying"
      ],
    },
    {
      "id": "085",
      "name": "Dodrio",
      "img": "http://img.pokemondb.net/artwork/dodrio.jpg",
      "type": [
        "Normal",
        "Flying"
      ],
    },
    {
      "id": "086",
      "name": "Seel",
      "img": "http://img.pokemondb.net/artwork/seel.jpg",
      "type": [
        "Water"
      ],
    },
    {
      "id": "087",
      "name": "Dewgong",
      "img": "http://img.pokemondb.net/artwork/dewgong.jpg",
      "type": [
        "Water",
        "Ice"
      ],
    },
    {
      "id": "088",
      "name": "Grimer",
      "img": "http://img.pokemondb.net/artwork/grimer.jpg",
      "type": [
        "Poison"
      ],
    },
    {
      "id": "089",
      "name": "Muk",
      "img": "http://img.pokemondb.net/artwork/muk.jpg",
      "type": [
        "Poison"
      ],
    },
    {
      "id": "090",
      "name": "Shellder",
      "img": "http://img.pokemondb.net/artwork/shellder.jpg",
      "type": [
        "Water"
      ],
    },
    {
      "id": "091",
      "name": "Cloyster",
      "img": "http://img.pokemondb.net/artwork/cloyster.jpg",
      "type": [
        "Water",
        "Ice"
      ],
    },
    {
      "id": "092",
      "name": "Gastly",
      "img": "http://img.pokemondb.net/artwork/gastly.jpg",
      "type": [
        "Ghost",
        "Poison"
      ],
    },
    {
      "id": "093",
      "name": "Haunter",
      "img": "http://img.pokemondb.net/artwork/haunter.jpg",
      "type": [
        "Ghost",
        "Poison"
      ],
    },
    {
      "id": "094",
      "name": "Gengar",
      "img": "http://img.pokemondb.net/artwork/gengar.jpg",
      "type": [
        "Ghost",
        "Poison"
      ],
    },
    {
      "id": "095",
      "name": "Onix",
      "img": "http://img.pokemondb.net/artwork/onix.jpg",
      "type": [
        "Rock",
        "Ground"
      ],
    },
    {
      "id": "096",
      "name": "Drowzee",
      "img": "http://img.pokemondb.net/artwork/drowzee.jpg",
      "type": [
        "Psychic"
      ],
    },
    {
      "id": "097",
      "name": "Hypno",
      "img": "http://img.pokemondb.net/artwork/hypno.jpg",
      "type": [
        "Psychic"
      ],
    },
    {
      "id": "098",
      "name": "Krabby",
      "img": "http://img.pokemondb.net/artwork/krabby.jpg",
      "type": [
        "Water"
      ],
    },
    {
      "id": "099",
      "name": "Kingler",
      "img": "http://img.pokemondb.net/artwork/kingler.jpg",
      "type": [
        "Water"
      ],
    },
    {
      "id": "100",
      "name": "Voltorb",
      "img": "http://img.pokemondb.net/artwork/voltorb.jpg",
      "type": [
        "Electric"
      ],
    },
    {
      "id": "101",
      "name": "Electrode",
      "img": "http://img.pokemondb.net/artwork/electrode.jpg",
      "type": [
        "Electric"
      ],
    },
    {
      "id": "102",
      "name": "Exeggcute",
      "img": "http://img.pokemondb.net/artwork/exeggcute.jpg",
      "type": [
        "Grass",
        "Psychic"
      ],
    },
    {
      "id": "103",
      "name": "Exeggutor",
      "img": "http://img.pokemondb.net/artwork/exeggutor.jpg",
      "type": [
        "Grass",
        "Psychic"
      ],
    },
    {
      "id": "104",
      "name": "Cubone",
      "img": "http://img.pokemondb.net/artwork/cubone.jpg",
      "type": [
        "Ground"
      ],
    },
    {
      "id": "105",
      "name": "Marowak",
      "img": "http://img.pokemondb.net/artwork/marowak.jpg",
      "type": [
        "Ground"
      ],
    },
    {
      "id": "106",
      "name": "Hitmonlee",
      "img": "http://img.pokemondb.net/artwork/hitmonlee.jpg",
      "type": [
        "Fighting"
      ],
    },
    {
      "id": "107",
      "name": "Hitmonchan",
      "img": "http://img.pokemondb.net/artwork/hitmonchan.jpg",
      "type": [
        "Fighting"
      ],
    },
    {
      "id": "108",
      "name": "Lickitung",
      "img": "http://img.pokemondb.net/artwork/lickitung.jpg",
      "type": [
        "Normal"
      ],
    },
    {
      "id": "109",
      "name": "Koffing",
      "img": "http://img.pokemondb.net/artwork/koffing.jpg",
      "type": [
        "Poison"
      ],
    },
    {
      "id": "110",
      "name": "Weezing",
      "img": "http://img.pokemondb.net/artwork/weezing.jpg",
      "type": [
        "Poison"
      ],
    },
    {
      "id": "111",
      "name": "Rhyhorn",
      "img": "http://img.pokemondb.net/artwork/rhyhorn.jpg",
      "type": [
        "Ground",
        "Rock"
      ],
    },
    {
      "id": "112",
      "name": "Rhydon",
      "img": "http://img.pokemondb.net/artwork/rhydon.jpg",
      "type": [
        "Ground",
        "Rock"
      ],
    },
    {
      "id": "113",
      "name": "Chansey",
      "img": "http://img.pokemondb.net/artwork/chansey.jpg",
      "type": [
        "Normal"
      ],
    },
    {
      "id": "114",
      "name": "Tangela",
      "img": "http://img.pokemondb.net/artwork/tangela.jpg",
      "type": [
        "Grass"
      ],
    },
    {
      "id": "115",
      "name": "Kangaskhan",
      "img": "http://img.pokemondb.net/artwork/kangaskhan.jpg",
      "type": [
        "Normal"
      ],
    },
    {
      "id": "116",
      "name": "Horsea",
      "img": "http://img.pokemondb.net/artwork/horsea.jpg",
      "type": [
        "Water"
      ],
    },
    {
      "id": "117",
      "name": "Seadra",
      "img": "http://img.pokemondb.net/artwork/seadra.jpg",
      "type": [
        "Water"
      ],
    },
    {
      "id": "118",
      "name": "Goldeen",
      "img": "http://img.pokemondb.net/artwork/goldeen.jpg",
      "type": [
        "Water"
      ],
    },
    {
      "id": "119",
      "name": "Seaking",
      "img": "http://img.pokemondb.net/artwork/seaking.jpg",
      "type": [
        "Water"
      ],
    },
    {
      "id": "120",
      "name": "Staryu",
      "img": "http://img.pokemondb.net/artwork/staryu.jpg",
      "type": [
        "Water"
      ],
    },
    {
      "id": "121",
      "name": "Starmie",
      "img": "http://img.pokemondb.net/artwork/starmie.jpg",
      "type": [
        "Water",
        "Psychic"
      ],
    },
    {
      "id": "122",
      "name": "Mr. Mime",
      "img": "http://img.pokemondb.net/artwork/mr. mime.jpg",
      "type": [
        "Psychic"
      ],
    },
    {
      "id": "123",
      "name": "Scyther",
      "img": "http://img.pokemondb.net/artwork/scyther.jpg",
      "type": [
        "Bug",
        "Flying"
      ],
    },
    {
      "id": "124",
      "name": "Jynx",
      "img": "http://img.pokemondb.net/artwork/jynx.jpg",
      "type": [
        "Ice",
        "Psychic"
      ],
    },
    {
      "id": "125",
      "name": "Electabuzz",
      "img": "http://img.pokemondb.net/artwork/electabuzz.jpg",
      "type": [
        "Electric"
      ],
    },
    {
      "id": "126",
      "name": "Magmar",
      "img": "http://img.pokemondb.net/artwork/magmar.jpg",
      "type": [
        "Fire"
      ],
    },
    {
      "id": "127",
      "name": "Pinsir",
      "img": "http://img.pokemondb.net/artwork/pinsir.jpg",
      "type": [
        "Bug"
      ],
    },
    {
      "id": "128",
      "name": "Tauros",
      "img": "http://img.pokemondb.net/artwork/tauros.jpg",
      "type": [
        "Normal"
      ],
    },
    {
      "id": "129",
      "name": "Magikarp",
      "img": "http://img.pokemondb.net/artwork/magikarp.jpg",
      "type": [
        "Water"
      ],
    },
    {
      "id": "130",
      "name": "Gyarados",
      "img": "http://img.pokemondb.net/artwork/gyarados.jpg",
      "type": [
        "Water",
        "Flying"
      ],
    },
    {
      "id": "131",
      "name": "Lapras",
      "img": "http://img.pokemondb.net/artwork/lapras.jpg",
      "type": [
        "Water",
        "Ice"
      ],
    },
    {
      "id": "132",
      "name": "Ditto",
      "img": "http://img.pokemondb.net/artwork/ditto.jpg",
      "type": [
        "Normal"
      ],
    },
    {
      "id": "133",
      "name": "Eevee",
      "img": "http://img.pokemondb.net/artwork/eevee.jpg",
      "type": [
        "Normal"
      ],
    },
    {
      "id": "134",
      "name": "Vaporeon",
      "img": "http://img.pokemondb.net/artwork/vaporeon.jpg",
      "type": [
        "Water"
      ],
    },
    {
      "id": "135",
      "name": "Jolteon",
      "img": "http://img.pokemondb.net/artwork/jolteon.jpg",
      "type": [
        "Electric"
      ],
    },
    {
      "id": "136",
      "name": "Flareon",
      "img": "http://img.pokemondb.net/artwork/flareon.jpg",
      "type": [
        "Fire"
      ],
    },
    {
      "id": "137",
      "name": "Porygon",
      "img": "http://img.pokemondb.net/artwork/porygon.jpg",
      "type": [
        "Normal"
      ],
    },
    {
      "id": "138",
      "name": "Omanyte",
      "img": "http://img.pokemondb.net/artwork/omanyte.jpg",
      "type": [
        "Rock",
        "Water"
      ],
    },
    {
      "id": "139",
      "name": "Omastar",
      "img": "http://img.pokemondb.net/artwork/omastar.jpg",
      "type": [
        "Rock",
        "Water"
      ],
    },
    {
      "id": "140",
      "name": "Kabuto",
      "img": "http://img.pokemondb.net/artwork/kabuto.jpg",
      "type": [
        "Rock",
        "Water"
      ],
    },
    {
      "id": "141",
      "name": "Kabutops",
      "img": "http://img.pokemondb.net/artwork/kabutops.jpg",
      "type": [
        "Rock",
        "Water"
      ],
    },
    {
      "id": "142",
      "name": "Aerodactyl",
      "img": "http://img.pokemondb.net/artwork/aerodactyl.jpg",
      "type": [
        "Rock",
        "Flying"
      ],
    },
    {
      "id": "143",
      "name": "Snorlax",
      "img": "http://img.pokemondb.net/artwork/snorlax.jpg",
      "type": [
        "Normal"
      ],
    },
    {
      "id": "144",
      "name": "Articuno",
      "img": "http://img.pokemondb.net/artwork/articuno.jpg",
      "type": [
        "Ice",
        "Flying"
      ],
    },
    {
      "id": "145",
      "name": "Zapdos",
      "img": "http://img.pokemondb.net/artwork/zapdos.jpg",
      "type": [
        "Electric",
        "Flying"
      ],
    },
    {
      "id": "146",
      "name": "Moltres",
      "img": "http://img.pokemondb.net/artwork/moltres.jpg",
      "type": [
        "Fire",
        "Flying"
      ],
    },
    {
      "id": "147",
      "name": "Dratini",
      "img": "http://img.pokemondb.net/artwork/dratini.jpg",
      "type": [
        "Dragon"
      ],
    },
    {
      "id": "148",
      "name": "Dragonair",
      "img": "http://img.pokemondb.net/artwork/dragonair.jpg",
      "type": [
        "Dragon"
      ],
    },
    {
      "id": "149",
      "name": "Dragonite",
      "img": "http://img.pokemondb.net/artwork/dragonite.jpg",
      "type": [
        "Dragon",
        "Flying"
      ],
    },
    {
      "id": "150",
      "name": "Mewtwo",
      "img": "http://img.pokemondb.net/artwork/mewtwo.jpg",
      "type": [
        "Psychic"
      ],
    },
    {
      "id": "151",
      "name": "Mew",
      "img": "http://img.pokemondb.net/artwork/mew.jpg",
      "type": [
        "Psychic"
      ],
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}