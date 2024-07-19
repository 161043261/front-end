// caller calls callee
interface ICard {
    card: number;
    suit: string;
}

interface IGame {
    cards: Array<number>;
    suits: string[];

    getPicker(this: IGame): () => ICard;
}

// prefer interface to type alias
let game: IGame = {
    cards: Array<number>(/* arrayLength */52),
    suits: ["heart", "spade", "club", "diamond"],
    // explicitly specifies 'this'
    // the callee must be of type IGame (must implement interface IGame)
    getPicker: function (this: IGame) {
        // arrow function captures 'this' (this == game)
        console.log(this);
        return (): ICard => {
            let i: number = Math.floor(Math.random() * 52); // c [0, 52)
            let j: number = Math.floor(i / 13); // s [0, 13)
            return {card: i % 13, suit: this.suits[j]};
        }
    }
}

let picker = game.getPicker();
let picked: { card: number, suit: string } = picker();

console.log("card: " + picked.card + " of " + picked.suit); // card: 0 of diamond
