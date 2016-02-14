/**
 * Created by Jamie Wohletz on 2/13/2016.
 */
const renderTree =
(function(){
  const draw = SVG('tree-container'),
    WINDOW_HEIGHT = $(window).height(),
    WINDOW_WIDTH = $(window).width(),
    SCALE_X = 30,
    SCALE_Y = 5;

  function deltaX(hypotenuse, angle) {
    return Math.ceil(hypotenuse * Math.cos(angle));
  }
  function deltaY(hypotenuse, angle) {
    return Math.ceil(hypotenuse * Math.sin(angle));
  }
  function setChildCoords(child, parent) {
    child.coordinates = {
      x: parent.coordinates.x + deltaX(child.length, child.angle),
      y: parent.coordinates.y - deltaY(child.length, child.angle)
    };
  }
  function drawLineBetweenNodes(parent, child) {
    draw.line(
      parent.coordinates.x,
      parent.coordinates.y,
      child.coordinates.x,
      child.coordinates.y
    ).stroke({width: Math.floor(child.thickness)});
  }
  function translateUnits(node) {
    return _.merge(node, {
      length: Math.floor((WINDOW_HEIGHT/SCALE_Y) * node.length),
      thickness: Math.ceil((WINDOW_WIDTH/SCALE_X) * node.thickness)
    });
  }

  function drawTree(node){
    let scaledChild;
    _.each(node.children, function(child){
      scaledChild = translateUnits(child);
      setChildCoords(scaledChild, node);
      drawLineBetweenNodes(node, scaledChild);
      drawTree(scaledChild);
    });
  }

  return drawTree;
}());