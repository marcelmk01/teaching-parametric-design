const jscad = require('@jscad/modeling')

const {
  cube,
  sphere,
  cylinder,
} = jscad.primitives;


const {expand, offset }  = jscad.expansions;

const {
  translate,
  rotate
} = jscad.transforms;


const {
  union,
  subtract
} = jscad.booleans;



const main = () => {
  const cubeShape = cube({
    size: 20
  });

  const sphereShape = sphere({
    radius:   60 ,
    center: [ 50,20,160 ]   
    
  });

  const expandShape = expand({
    delta: 45,
    corners: "round",
    segments: 5
  }, cubeShape);


const unionShape = subtract([cubeShape, sphereShape])


  return [cubeShape, expandShape];
};

module.exports = { main };