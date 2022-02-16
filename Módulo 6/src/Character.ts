interface IParams {
  name: string;
  energy: number;
  life: number;
  attack: number;
}

class Character {
      constructor({ name, energy, life, attack }: IParams) {
        this.name = name;
        this.energy = energy;
        this.life = life;
        this.attack = attack;
        this.defense = 50;
    }

    name: string = '';
    energy: number = 0;
    life: number = 0;
    attack: number = 0;
    defense: number = 0;

    trainAttack(): void {
      this.attack += 80;
      this.energy-= 50;
    }
    trainDefense(): void {
      this.defense += 80;
      this.energy -= 20;
    }
}

export default Character;