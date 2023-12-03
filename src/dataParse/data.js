const xlsx = require('xlsx');

const pokedex = xlsx.readFile('src/dataParse/data.xlsx');

const sheetNames = pokedex.SheetNames;

const sheetIndex = 1;

export const parsedPokedex = xlsx.utils.sheet_to_json(
  pokedex.Sheets[sheetNames[sheetIndex - 1]],
);
