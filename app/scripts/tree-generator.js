const generateTree =
(function(){
  //tree nodes have length, thickness, angle

//length between 0 and 1
//thickness between 0 and 1
//angle between 0 and 2pi

  var maxNumChildNodes = 3;
  var maxLengthDifference = 0.2;
  var maxThicknessDifference = 0.01;
  var angleArcRange = 180;

  function getRandomNumberInRange(start, end) {
    return _.random(start, end, true);
  }

  function getRandomIntInRange(start, end) {
    return _.random(start, end, false);
  }

  function getNumberOfChildNodes() {
    return getRandomIntInRange(1, maxNumChildNodes);
  }

  function sliceIntoRandomParts(total, numSlices) {
    if(numSlices === 0) return [total];

    var slicePoint = getRandomNumberInRange(0, total);
    return [slicePoint].concat(sliceIntoRandomParts(total - slicePoint, numSlices - 1));
  }

  function generateChildNodes(nodeConstructor) {
    var numNodes = getNumberOfChildNodes();
    return Immutable(_.times(numNodes, nodeConstructor));
  }

  function generateNakedTree(numLevels) {
    if(numLevels === 1) {
      return Immutable({children: generateChildNodes(() => { return {} })});
    }
    return Immutable({children: generateChildNodes(() => { return generateNakedTree(numLevels - 1)})});
  }


  function addVaryingPropertyToTree(tree, propertyName, rootValue, childValueGenerator) {
    if(!tree.children) return tree.set(propertyName, rootValue);

    var childValues = childValueGenerator(rootValue, tree.children.length);
    var children = _.map(tree.children, (child, index) => {
      return addVaryingPropertyToTree(child, propertyName, childValues[index], childValueGenerator)
    });

    return tree.set(propertyName, rootValue)
      .set("children", children);
  }



  function addLengthToTree(tree, rootLength = 1) {
    return addVaryingPropertyToTree(tree, "length", rootLength,
      (parentLength, numChildren) => {
        return _.times(numChildren, () => { return getRandomNumberInRange(parentLength - maxLengthDifference, parentLength) });
      });
  }

  function addThicknessToTree(tree, rootThickness = 1) {
    return addVaryingPropertyToTree(tree, "thickness", rootThickness,
      (parentThickness, numChildren) => {
        return sliceIntoRandomParts(parentThickness, numChildren);
      });
  }

  function addAngleToTree(tree, rootAngle = Math.PI / 2) {
    return addVaryingPropertyToTree(tree, "angle", rootAngle,
      (parentAngle, numChildren) => {
        return _.times(numChildren, () => { return getRandomNumberInRange(0, Math.PI) });
      });
  }



  return function generateTree(numLevels) {
    return addLengthToTree(addThicknessToTree(addAngleToTree(generateNakedTree(numLevels))));
  }
}());
