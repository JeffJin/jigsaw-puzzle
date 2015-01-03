'use strict';

/**
 * @ngdoc function
 * @name jigsawPuzzleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jigsawPuzzleApp
 */
angular.module('jigsawPuzzleApp')
  .controller('MainCtrl', function ($scope) {

    function getTileRaster(sourceRaster, x, y, width, height) {
      var targetRaster = new paper.Raster('empty-image');
      var data = sourceRaster.getData(new paper.Rectangle(x, y, width, height));
      targetRaster.setData(data, new paper.Point(10, 25))
      targetRaster.position = new paper.Point(150, 125);
      return targetRaster;
    }

    var setupPaper = function() {
      console.log('setting up paper js');
      // Get a reference to the canvas object
      var canvas = document.getElementById('puzzlePanel');
      // Create an empty project and a view for the canvas:
      paper.setup(canvas);
      // Create a Paper.js Path to draw a line into it:
      var curve = new paper.Path();
      // Give the stroke a color
      curve.strokeColor = 'blue';
      var start = new paper.Point(340, 410);
      var p1 = new paper.Point(0, 250);
      var p2 = new paper.Point(200.4, 0);
      var p3 = new paper.Point(340.48, 200);
      var p4 = new paper.Point(500.48, 0);
      var p5 = new paper.Point(700.48, 250);
      var boxP1 = new paper.Point(150, 125);
      var boxP2 = new paper.Point(150, 410);
      var boxP3 = new paper.Point(545, 410);
      var boxP4 = new paper.Point(545, 125);
      // Move to start and draw a line from there
      curve.moveTo(start);
      curve.cubicCurveTo(p1, p2, p3);
      curve.cubicCurveTo(p4, p5, start);

      var path = new paper.Path();
      path.strokeColor = 'violet';
      path.lineTo(start);
      path.lineTo(p1);
      path.lineTo(p2);
      path.lineTo(p3);
      path.lineTo(p4);
      path.lineTo(p5);
      path.lineTo(start);

      var boxPath = new paper.Path();
      boxPath.strokeColor = 'green';
      boxPath.lineTo(boxP1);
      boxPath.lineTo(boxP2);
      boxPath.lineTo(boxP3);
      boxPath.lineTo(boxP4);
      boxPath.lineTo(boxP1);

      var puzzleImage = new paper.Raster('puzzle-image');
      puzzleImage.position = canvas.center;
      //var image = getTileRaster(puzzleImage, 150, 125, 395, 285);
      //
      //var border = boxPath.clone();
      //border.strokeColor = '#000';
      //border.strokeWidth = 1;
      //
      //var tile = new paper.Group(curve, border, image, border);
      //tile.clipped = true;
      //tile.opacity = 1;

      // Draw the view now:
      paper.view.draw();
    };

    setupPaper();
  });
