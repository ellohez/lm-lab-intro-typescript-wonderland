import { endAdventure, haveAdventures } from "../..";
import { askQuestion, clear, print } from "../ui/console";
import { Flavour, FLAVOURS } from "./chapter_7.types";
import { parseTartInput } from "../ui/parse_input";

type Cake = "Cake";
type Death = "Death";
type Content = Cake | Death;

type Tart = {
  flavour: Flavour;
  content: Content;
};

type Tarts = {
  tarts: Array<Tart>;
};

/* 
    New Chapter - 
*/
export function yummyTarts(): void {
  clear(true);

  print("You can smell tarts..!");
  print("They are too delicious to resist: ");
  FLAVOURS.forEach((flavour, index) => print(`  ${index} - ${flavour}`));
  //   askQuestion("Press ENTER to re-enter Wonderland! ", haveAdventures);
  askQuestion("Choose your flavour adventure ", chooseTart);
}

function chooseTart(input: string) {
  const flavour = parseTartInput(input);

  if (flavour === undefined) {
    print(`😮`);
    print(`${input} is an invalid input 😭`);
    return endAdventure();
  }

  return cakeOrDeath(flavour);
}

function bakeTheTarts(): Tarts {
  const cakeStand: Tarts = { tarts: [] };

  for (let i = 0; i < FLAVOURS.length; i++) {
    cakeStand.tarts.push({
      flavour: FLAVOURS[i],
      content: "Cake",
    });
  }

  // Inject the poison!
  const deathCake = Math.floor(Math.random() * FLAVOURS.length);
  cakeStand.tarts[deathCake].content = "Death";

  return cakeStand;
}

function cakeOrDeath(flavour: Flavour): void {
  clear(true);

  const cakeStand = bakeTheTarts();
  const index: number = FLAVOURS.indexOf(flavour);
  if (cakeStand.tarts[index].content === "Death") {
    print(`Oh no - DEATH BY ${flavour}`);
    return endAdventure();
  } else {
    print(`MMMmmmm, yummy ${flavour}!!!`);
    return askQuestion("Press ENTER to re-enter Wonderland! ", haveAdventures);
  }
}
