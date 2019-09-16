/**
 *  Author: Zonglin Peng
 */

const app = {
    init() {
      this.scene = new THREE.Scene()
  
      this.camera = new THREE.PerspectiveCamera()
      this.camera.position.z = 60 
  
      this.renderer = new THREE.WebGLRenderer()
      this.renderer.setSize( window.innerWidth, window.innerHeight )
  
      document.body.appendChild( this.renderer.domElement )
      
      this.createLights()
      this.knot = this.createKnot()
  
      // ...the rare and elusive hard binding appears! but why?
      this.render = this.render.bind( this )
      this.render()
    },
  
    createLights() {
      // const pointLight = new THREE.PointLight( 0xffffff )
      // pointLight.position.z = 100
  
      // this.scene.add( pointLight )

      var light = new THREE.PointLight( 0xffffff, 10, 100 );
      light.position.set( 50, 50, 50 );
      this.scene.add( light );
    },
  
    createKnot() {
      // const knotgeo = new THREE.TorusKnotGeometry( 10, .1, 128, 16, 5, 21 )
      // const mat     = new THREE.MeshPhongMaterial({ color:0xff0000, shininess:2000 }) 
      // const knot    = new THREE.Mesh( knotgeo, mat )

            // const knotgeo = new THREE.TorusKnotGeometry( 10, .1, 128, 16, 5, 21 )
      // const mat     = new THREE.MeshPhongMaterial({ color:0xff0000, shininess:2000 }) 
      // const knot    = new THREE.Mesh( knotgeo, mat )

      // let mesh
      // var loader = new THREE.TextureLoader();
      // loader.load('./texture.gif', function ( texture ) {
      //   var geometry = new THREE.SphereGeometry(1000, 20, 20);
      //   var material = new THREE.MeshBasicMaterial({map: texture, overdraw: 0.5});
      //   mesh = new THREE.Mesh(geometry, material);
      //   scene.add(mesh);
      // });

      // texture = THREE.ImageUtils.loadTexture('./texture.jpg', {}, function() {
      //   renderer.render(this.scene );
      // });

      var geometry = new THREE.TorusKnotGeometry( 9, 1, 100, 24 );
      var material = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture("./texture.gif"), overdraw: 0.5} );
      var torusKnot = new THREE.Mesh( geometry, material );

      this.scene.add( torusKnot )

      return torusKnot
    },
  
    render() {
      this.knot.rotation.x += .025
      // this.knot.forEach((knot, ndx) => {
      //   const speed = 1 + ndx * .1;
      //   const rot = time * speed;
      //   knot.rotation.x = rot;
      //   knot.rotation.y = rot;
      // });
      this.renderer.render( this.scene, this.camera )
      window.requestAnimationFrame( this.render )
    }
  }
  
  window.onload = ()=> app.init()


  