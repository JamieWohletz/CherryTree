/**
 * Created by Jamie Wohletz on 2/13/2016.
 */
(function(){
  const draw = SVG('tree-container'),
    WINDOW_HEIGHT = $(window).height(),
    WINDOW_WIDTH = $(window).width();

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
      length: Math.floor(WINDOW_HEIGHT * node.length),
      thickness: Math.floor(WINDOW_WIDTH * node.thickness)
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

  var root = {
    length: Math.floor(WINDOW_HEIGHT * 0.7),
    angle: 0,
    thickness: Math.floor(WINDOW_WIDTH * 0.5),
    coordinates: {
      x: Math.floor($(window).width() / 2),
      y: Math.ceil($(window).height())
    },
    children: [
      {
        length:0.3,
        angle: Math.PI/3,
        thickness:0.01,
        children: [
          {
            length: 0.5,
            angle: Math.PI/5,
            thickness: 0.01
          }
        ]
      },
      {
        length:0.253,
        angle: Math.PI/2,
        thickness:0.0132
      },
      {
        length:0.1,
        angle: Math.PI/4,
        thickness:0.005
      }
    ]
  };
  drawTree(root);
}());