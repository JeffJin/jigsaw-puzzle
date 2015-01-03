'use strict';

/**
 * @ngdoc function
 * @name jigsawPuzzleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jigsawPuzzleApp
 */
angular.module('jigsawPuzzleApp')
  .controller('RasterCtrl', function ($scope) {

    function getTileRaster(sourceRaster, x, y, width, height) {
      var targetRaster = new paper.Raster('empty-image');
      var data = sourceRaster.getData(new paper.Rectangle(x, y, width, height));
      targetRaster.setData(data, new paper.Point(10, 25));
      targetRaster.position = new paper.Point(150, 125);
      return targetRaster;
    }

    var setupPaper = function() {
      console.log('setting up raster');
      // Get a reference to the canvas object
      var canvas = document.getElementById('rasterPanel');
      // Create an empty project and a view for the canvas:
      paper.setup(canvas);

      var puzzleImage = new paper.Raster('raster-image');
      puzzleImage.position = new paper.Point(400, 300);

      //var raster = getTileRaster(puzzleImage, 150, 125, 320, 320);
      puzzleImage.scale(0.5);

      // Rotate the raster by 45 degrees:
      puzzleImage.rotate(45);

      var circle = new paper.Path.Circle({
        center: [80, 50],
        radius: 5,
        fillColor: 'red'
      });

      // Create a rasterized version of the path:
      var raster = circle.rasterize();

      // Move it 100pt to the right:
      raster.position.x += 100;

      // Scale the path and the raster by 300%, so we can compare them:
      circle.scale(5);
      raster.scale(5);

      // Draw the view now:
      //paper.view.draw();
    };

    setupPaper();
  });
