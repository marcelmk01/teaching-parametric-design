const jscad = require('@jscad/modeling')

const {
  cube,
  sphere,
  cylinder,
} = jscad.primitives;


const {
  translate,
  rotate
} = jscad.transforms;

const {
  union,
  subtract,
  intersect,
  scission
} = jscad.booleans;


const main = () => {
  const cubeShape = cube({
    size: 10
  });

    const cubes = [];

    for(let i = 0; i < 20; i += 1) {
        cubes.push(rotate(
          [0, Math.PI / 180 * i * 10, 0],
          translate(
        [0, i * 20, 0],
        cubeShape
          )
        ));
    }

    const unionShape = union([cubeShape])

  return cubes;
};

module.exports = { main };