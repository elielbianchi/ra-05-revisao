import { KeyAndValue } from "../../types/keyAndValue";

/**
 * Deve criar um objeto a partir da lista de arrays chave/valor
 * 
 * Ex.: fromPairs(['a', 'a'], ['b': 1], ['c': false]) === { a: 'a', b: 1, c: false }
 * 
 * @param args 
 * @returns 
 */
export const fromPairs = (args: KeyAndValue[]): Record<string, unknown> => {
  
  const objPairs: Record<string, unknown> = {};
  
  args.forEach(pair => {
    objPairs[pair[0]] = pair[1];
  })

  return objPairs;
};