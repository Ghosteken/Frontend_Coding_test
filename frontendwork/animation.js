// Create Pixi Application
const app = new PIXI.Application({
    width: 800,
    height: 600,
    antialias: true,
    transparent: false,
    resolution: 1
});

// Add the canvas to the HTML document
const canvas = app.view;
document.body.appendChild(canvas);

// Load all images
const loader = PIXI.Loader.shared;
loader.add('vegas', 'vegas@2x.png')
      .add('slots', 'slots@2x.png')
      .add('showdown_s', 's@2x.png')
      .add('showdown_h', 'h@2x.png')
      .add('showdown_o1', 'o-1@2x.png')
      .add('showdown_w1', 'w-1@2x.png')
      .add('showdown_d', 'd@2x.png')
      .add('showdown_o2', 'o-2@2x.png')
      .add('showdown_w2', 'w-2@2x.png')
      .add('showdown_n', 'n@2x.png')
      .add('showdown_no_lights', 'showdown-off.png') // Add the showdown image with no lights
      .add('bolt_on', 'bolt@2x.png')
      .add('bolt_off', 'bolt-off@2x.png')
      .add('must_drop_jackpots', 'must_drop.png')
      .add('no_lights', 'header.png')
      .load(setup);

// Setup function after loading resources
function setup() {
    // Create sprites
    const vegas = new PIXI.Sprite(loader.resources['vegas'].texture);
    const slots = new PIXI.Sprite(loader.resources['slots'].texture);
    const showdown = new PIXI.Sprite(loader.resources['showdown_s'].texture);
    const boltOn = new PIXI.Sprite(loader.resources['bolt_on'].texture);
    const boltOff = new PIXI.Sprite(loader.resources['bolt_off'].texture);
    const mustDropJackpots = new PIXI.Sprite(loader.resources['must_drop_jackpots'].texture);
    const noLights = new PIXI.Sprite(loader.resources['no_lights'].texture);
    const showdownNoLights = new PIXI.Sprite(loader.resources['showdown_no_lights'].texture);

    // Arrange sprites
    vegas.position.set(100, 100);
    slots.position.set(300, 100);
    showdown.position.set(500, 100);
    boltOn.position.set(700, 100);
    boltOff.position.set(700, 100); // Initially hide off image
    mustDropJackpots.position.set(300, 300);
    noLights.position.set(100, 400);
    showdownNoLights.position.set(500, 400); // Position showdown without lights

    // Add sprites to the stage
    app.stage.addChild(vegas, slots, showdown, boltOn, boltOff, mustDropJackpots, noLights, showdownNoLights);

    // Start the animation loop
    app.ticker.add(animate);
}

// Animation loop
function animate() {
    // Define a variable to keep track of the bolt's state (on or off)
    let isBoltOn = true;

    // Toggle bolt's visibility every 10 seconds
    setInterval(() => {
        isBoltOn = !isBoltOn; // Toggle the bolt's state
        boltOn.visible = isBoltOn; // Show or hide the bolt accordingly
        boltOff.visible = !isBoltOn; // Show or hide the off image accordingly
    }, 10000); // 10 seconds interval

    // Call animate function recursively
    requestAnimationFrame(animate);
}

// Start the animation loop
animate();
