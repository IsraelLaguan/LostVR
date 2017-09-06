AFRAME.registerComponent('general-scene', {
        /**
         * Code within this function will be called when everything in <a-scene> is ready and loaded.
         */
        init: function () {
          var scene = document.querySelector('a-scene');
          var box = document.querySelector('#box');
          var sphere = document.querySelector('#sphere');

          console.log('box');

          box.addEventListener('click', function(){
            var entity = scene.querySelector('a-entity');
            entity.setAttribute('material', 'color', 'red');
          });

          sphere.addEventListener('click', function(){
            this.setAttribute('geometry', {radius: 3});
          });


        }
      });
