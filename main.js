AFRAME.registerComponent('general-scene', {


        /**
         * Code within this function will be called when everything in <a-scene> is ready and loaded.
         */
        init: function () {
          var scene = document.querySelector('a-scene');
          var box = document.querySelector('#box');
          var scd = document.querySelector('#box2');
          var sphere = document.querySelector('#sphere');

          console.log('box');

          box.addEventListener('click', function(){
            var sph = document.querySelector('#sphere');
            sph.setAttribute('geometry', {radius: 3});
          });

          sphere.addEventListener('click', function(){
            box.setAttribute('material', 'color', '#66CC99');
          });

          scd.addEventListener('click', function(){
            var c = document.querySelector('#cam');
            c.setAttribute('position', {x: 3, y: 3, z: 0.66});
          
          });

        }
      });
