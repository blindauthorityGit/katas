function calculateDamage(yourType, opponentType, attack, defense) {
  const elem = ["fire", "water", "grass", "electric"];

  // fire
  if (yourType === elem[0]) {
    if (opponentType === yourType) {
      return 50 * (attack / defense / 2);
    }
    if (opponentType === elem[1]) {
      return 50 * ((attack / defense) * 0.5);
    }
    if (opponentType === elem[2]) {
      return 50 * ((attack / defense) * 2);
    }
    if (opponentType === elem[3]) {
      return 50 * (attack / defense);
    }
  }

  // water
  if (yourType === elem[1]) {
    if (opponentType === yourType) {
      return 50 * (attack / defense / 2);
    }
    if (opponentType === elem[0]) {
      return 50 * ((attack / defense) * 2);
    }
    if (opponentType === elem[2]) {
      return 50 * ((attack / defense) * 0.5);
    }
    if (opponentType === elem[3]) {
      return 50 * ((attack / defense) * 0.5);
    }
  }

  // grass

  if (yourType === elem[2]) {
    if (opponentType === yourType) {
      return 50 * (attack / defense / 2);
    }
    if (opponentType === elem[0]) {
      return 50 * ((attack / defense) * 0.5);
    }
    if (opponentType === elem[1]) {
      return 50 * ((attack / defense) * 2);
    }
    if (opponentType === elem[3]) {
      return 50 * (attack / defense);
    }
  }

  // electric

  if (yourType === elem[3]) {
    if (opponentType === yourType) {
      return 50 * (attack / defense / 2);
    }
    if (opponentType === elem[0]) {
      return 50 * (attack / defense);
    }
    if (opponentType === elem[1]) {
      return 50 * ((attack / defense) * 2);
    }
    if (opponentType === elem[2]) {
      return 50 * (attack / defense);
    }
  }
}

calculateDamage("fire", "water", 100, 100);
