// Tempo esperado no forno
export const EXPECTED_MINUTES_IN_OVEN = 40;

// 1️⃣ Função que calcula o tempo restante no forno
export function remainingMinutesInOven(actualMinutesInOven) {
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}

// 2️⃣ Função que calcula o tempo de preparação baseado no número de camadas
export function preparationTimeInMinutes(numberOfLayers) {
  return numberOfLayers * 2;
}

// 3️⃣ Função que calcula o tempo total gasto (preparo + forno)
export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
}

// --- Exemplos usando os números indicados ---
console.log(remainingMinutesInOven(30));       // 10
console.log(preparationTimeInMinutes(2));      // 4
console.log(totalTimeInMinutes(3, 20));        // 26
