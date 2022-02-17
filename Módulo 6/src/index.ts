import Character from "./Character";
import Warrior from "./Warrior";


const human: Character = new Character({
    name:'Jessica', energy: 100, attack: 100, life: 80});

const human_02: Character = new Character({
    name:'Pablo', energy: 99, attack: 99, life: 80});

const warrior_01: Warrior = new Warrior({
    name:'Caleb', energy: 99, attack: 99, life: 80});

human.trainAttack();
human_02.trainDefense();

console.log('Human [Character]', human);
console.log('Human [Character]', human_02);

console.log('Warrior [Warrior]', warrior_01);