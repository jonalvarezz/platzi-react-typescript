// Utilizado como ejemplo para el curso de Platzi
// Lodash cuenta con sus propios tipos comunitarios
// Se pueden instalar con `npm install @types/lodash --save-dev`
declare module "lodash" {
  export function random(
    lower?: number,
    upper?: number,
    floating?: boolean
  ): number;
}
