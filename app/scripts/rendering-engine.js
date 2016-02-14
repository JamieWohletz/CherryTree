/**
 * Created by Jamie Wohletz on 2/13/2016.
 */
const renderTree =
  (function() {
    const draw = SVG('tree-container');

    draw.viewbox({x: 0, y: 0, width: RENDER.VIEWBOX_WIDTH, height: RENDER.VIEWBOX_HEIGHT});

    function deltaX(hypotenuse, angle) {
      return (hypotenuse * Math.cos(angle).toFixed(2));
    }

    function deltaY(hypotenuse, angle) {
      return (hypotenuse * Math.sin(angle)).toFixed(2);
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
      ).stroke({width: child.thickness});
    }

    function drawTree(node) {
      _.each(node.children, function(child) {
        setChildCoords(child, node);
        drawLineBetweenNodes(node, child);
        drawTree(child);
      });
    }

    return drawTree;
  }());