/**
 * Created by jeffjin on 14-12-31.
 */
angular.module('jigsawPuzzleApp')
  .factory('PuzzleService', function () {
    function getMask(tileRatio, topTab, rightTab, bottomTab, leftTab, tileWidth) {

      var curvyCoords = [
        0, 0, 35, 15, 37, 5,
        37, 5, 40, 0, 38, -5,
        38, -5, 20, -20, 50, -20,
        50, -20, 80, -20, 62, -5,
        62, -5, 60, 0, 63, 5,
        63, 5, 65, 15, 100, 0
      ];

      var mask = new Path();
      var tileCenter = view.center;

      var topLeftEdge = new Point(-4,4);

      mask.moveTo(topLeftEdge);

      //Top
      for (var i = 0; i < curvyCoords.length / 6; i++) {
        var p1 = topLeftEdge + new Point(curvyCoords[i * 6 + 0] * tileRatio,
            topTab * curvyCoords[i * 6 + 1] * tileRatio);
        var p2 = topLeftEdge + new Point(curvyCoords[i * 6 + 2] * tileRatio,
            topTab * curvyCoords[i * 6 + 3] * tileRatio);
        var p3 = topLeftEdge + new Point(curvyCoords[i * 6 + 4] * tileRatio,
            topTab * curvyCoords[i * 6 + 5] * tileRatio);

        mask.cubicCurveTo(p1, p2, p3);
      }
      //Right
      var topRightEdge = topLeftEdge + new Point(tileWidth, 0);
      for (var i = 0; i < curvyCoords.length / 6; i++) {
        var p1 = topRightEdge + new Point(-rightTab * curvyCoords[i * 6 + 1] * tileRatio,
            curvyCoords[i * 6 + 0] * tileRatio);
        var p2 = topRightEdge + new Point(-rightTab * curvyCoords[i * 6 + 3] * tileRatio,
            curvyCoords[i * 6 + 2] * tileRatio);
        var p3 = topRightEdge + new Point(-rightTab * curvyCoords[i * 6 + 5] * tileRatio,
            curvyCoords[i * 6 + 4] * tileRatio);

        mask.cubicCurveTo(p1, p2, p3);
      }
      //Bottom
      var bottomRightEdge = topRightEdge + new Point(0, tileWidth);
      for (var i = 0; i < curvyCoords.length / 6; i++) {
        var p1 = bottomRightEdge - new Point(curvyCoords[i * 6 + 0] * tileRatio,
            bottomTab * curvyCoords[i * 6 + 1] * tileRatio);
        var p2 = bottomRightEdge - new Point(curvyCoords[i * 6 + 2] * tileRatio,
            bottomTab * curvyCoords[i * 6 + 3] * tileRatio);
        var p3 = bottomRightEdge - new Point(curvyCoords[i * 6 + 4] * tileRatio,
            bottomTab * curvyCoords[i * 6 + 5] * tileRatio);

        mask.cubicCurveTo(p1, p2, p3);
      }
      //Left
      var bottomLeftEdge = bottomRightEdge - new Point(tileWidth, 0);
      for (var i = 0; i < curvyCoords.length / 6; i++) {
        var p1 = bottomLeftEdge - new Point(-leftTab * curvyCoords[i * 6 + 1] * tileRatio,
            curvyCoords[i * 6 + 0] * tileRatio);
        var p2 = bottomLeftEdge - new Point(-leftTab * curvyCoords[i * 6 + 3] * tileRatio,
            curvyCoords[i * 6 + 2] * tileRatio);
        var p3 = bottomLeftEdge - new Point(-leftTab * curvyCoords[i * 6 + 5] * tileRatio,
            curvyCoords[i * 6 + 4] * tileRatio);

        mask.cubicCurveTo(p1, p2, p3);
      }

      return mask;
    }


    return {
      getMask: getMask
    }
  });

