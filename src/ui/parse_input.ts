import { Hole, HOLES } from '../chapter_1/chapter_1.types';
import { Flavour, FLAVOURS } from "../chapter_7/chapter_7.types";

// 💡 This `parseHoleInput` function exists to keep user input (which can be anything)
//    away from our logic, which we want to keep clean using our nice neat types like `Hole`
//    This function translates all possible user inputs into either:
//           a Hole    👈 if the input is valid
//			 undefined 👈 if the input is invalid
export function parseHoleInput(input: string): Hole | undefined {
  //  It might seem like we know this is a number,
  //  but of course the user can enter any nonsense to the prompt!
  const chosenHole = parseInt(input);

  // now we verify it's valid
  if (isNaN(chosenHole)) {
    return undefined;
  }

  if (chosenHole < 0 || chosenHole > HOLES.length - 1) {
    return undefined;
  }

  // we know the input is valid so we can return a Hole
  return HOLES[chosenHole];
}

// Parse the input string to ensure only valid user input.
export function parseTartInput(input: string): Flavour | undefined {
  const chosenFlavour = parseInt(input);

  if (isNaN(chosenFlavour)) {
    return undefined;
  }

  if (chosenFlavour < 0 || chosenFlavour > FLAVOURS.length) {
    return undefined;
  }

  return FLAVOURS[chosenFlavour];
}