<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animation</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            overflow: hidden; /* Hide scrollbars */
            background-image: url('header.png'); /* Set header image as background */
            background-size: cover; /* Cover the entire viewport */
            background-position: center; /* Center the background */
        }
        #animation-canvas {
            display: block;
            width: 100vw;
            height: 100vh;
        }
    </style>
    
    <script src="https://unpkg.com/pixi.js@7.x/dist/pixi.min.js"></script>
</head>
<body>
    <canvas id="animation-canvas"></canvas>
    <script src="animation.js"></script>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spin Wheel of Fortune</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Footer Section -->
    <footer class="container">
        <img src="wheel.png" id="wheel" alt="Wheel of Fortune">
        <img src="marker.png" id="marker" alt="Marker">
        <button id="spin-button">Spin <img src="btn-spin.png" alt="Spin button icon"></button>
        <span id="result"></span>
    </footer>

    <script src="script.js"></script>
</body>
</html>
