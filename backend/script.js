const wheelImage = document.getElementById('wheel');
const markerImage = document.getElementById('marker');
const spinButton = document.getElementById('spin-button');
const resultSpan = document.getElementById('result');

// Static endpoint data (replace with actual API call if needed)
const endpointData = { POSITION: 2 };


let isSpinning = false;

spinButton.addEventListener('click', () => {
    if (!isSpinning) {
        isSpinning = true;

        // Simulate random time between 2-5 seconds for spinning
        const spinTime = Math.random() * 3000 + 2000;

        
        const numSegments = 3; // Replace with actual number of segments
        const rotationAngle = 360 * endpointData.POSITION / numSegments;

        // Adjust marker position before spinning
        markerImage.style.transform = `rotate(${rotationAngle}deg)`;

        wheelImage.style.animationDuration = spinTime + 'ms';
        wheelImage.style.animationTimingFunction = 'linear'; // Adjust for smoother stopping

        setTimeout(() => {
            isSpinning = false;
            wheelImage.style.animationDuration = '0s';
            wheelImage.style.transform = `rotate(${rotationAngle}deg)`;

            // Show the result (modify based on segment value)
            const segmentNames = ["Segment 1", "Segment 2", "Segment 3"]; // Replace with actual names
            resultSpan.textContent = `Selected: ${segmentNames[endpointData.POSITION - 1]}`;
        }, spinTime);
    }
});
