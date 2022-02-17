import Character from "./Character";

interface IParams {
    name: string;
    energy: number;
    life: number;
    attack: number;
  }

class Warrior extends Character{
    armor: number;
    force: number;
    
    constructor({name, energy, life, attack}: IParams) {
        super({name, energy, life, attack});

        this.armor = 80;
        this.force = 100;
    }

    name: string = '';
    energy: number = 0;
    life: number = 0;
    attack: number = 0;
    defense: number = 0;
}

export default Warrior;