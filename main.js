AFRAME.registerComponent('general-scene', {
        /**
         * Code within this function will be called when everything in <a-scene> is ready and loaded.
         */
        init: function () {
          var scene = document.querySelector('a-scene');
          var box = document.querySelector('a-entity');
          console.log('box');
          box.addEventListener('click', function(){
            var entity = scene.querySelector('a-entity');
            entity.setAttribute('material', 'color', 'red');
          });


        }
      });
