// Create Pixi Application
const app = new PIXI.Application({
    width: 800,
    height: 600,
    antialias: true,
    transparent: false,
    resolution: 1
});

// Add the canvas to the HTML document
document.body.appendChild(app.view);

// Load all images
const loader = PIXI.Loader.shared;
loader.add('vegas', 'vegas_image_with_lights.png')
      .add('slots', 'slots_image_with_lights.png')
      .add('showdown', 'showdown_image_with_lights_0.png') // Add the other 7 images similarly
      .add('bolt_on', 'bolt_on.png')
      .add('bolt_off', 'bolt_off.png')
      .add('must_drop_jackpots', 'must_drop_jackpots.png')
      .add('no_lights', 'no_lights_image.png')
      .load(setup);

// Setup function after loading resources
function setup() {
    // Create sprites
    const vegas = new PIXI.Sprite(loader.resources['vegas'].texture);
    const slots = new PIXI.Sprite(loader.resources['slots'].texture);
    const showdown = new PIXI.Sprite(loader.resources['showdown'].texture); // Use other textures similarly
    const boltOn = new PIXI.Sprite(loader.resources['bolt_on'].texture);
    const boltOff = new PIXI.Sprite(loader.resources['bolt_off'].texture);
    const mustDropJackpots = new PIXI.Sprite(loader.resources['must_drop_jackpots'].texture);
    const noLights = new PIXI.Sprite(loader.resources['no_lights'].texture);

    // Arrange sprites
    vegas.position.set(100, 100);
    slots.position.set(300, 100);
    showdown.position.set(500, 100);
    boltOn.position.set(700, 100);
    boltOff.position.set(700, 100); // Initially hide off image
    mustDropJackpots.position.set(300, 300);
    noLights.position.set(100, 400);

    // Add sprites to the stage
    app.stage.addChild(vegas, slots, showdown, boltOn, boltOff, mustDropJackpots, noLights);

    // Start the animation loop
    app.ticker.add(animate);
}

// Animation loop
function animate() {
    // Update animation logic here
    // For example, handle flickering of the bolt every 10 seconds
    // You can use setTimeout or setInterval to handle the flickering
    // Define a variable to keep track of the bolt's state (on or off)
let isBoltOn = true;

// Animation loop
function animate() {
    // Toggle bolt's visibility every 10 seconds
    setInterval(() => {
        isBoltOn = !isBoltOn; // Toggle the bolt's state
        boltOn.visible = isBoltOn; // Show or hide the bolt accordingly
        boltOff.visible = !isBoltOn; // Show or hide the off image accordingly
    }, 10000); // 10 seconds interval
}

}

