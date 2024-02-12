const wheelImage = document.getElementById('wheel');
const arrowImage = document.getElementById('arrow');
const spinButton = document.getElementById('spin-button');
const resultSpan = document.getElementById('result');

let isSpinning = false;

spinButton.addEventListener('click', async () => {
    if (!isSpinning) {
        isSpinning = true;

        try {
            // Simulate fetching data from the endpoint (replace with actual API call if needed)
            const response = await fetch('position.json');
            const endpointData = await response.json();

            // Simulate random time between 2-5 seconds for spinning
            const spinTime = Math.random() * 3000 + 2000;
            const numSegments = 12; // Number of segments on the wheel
            const rotationAngle = 360 * endpointData.POSITION / numSegments;

            // Adjust arrow position before spinning
            arrowImage.style.transition = 'transform 0s';
            arrowImage.style.transform = `translate(-50%, -50%) rotate(${360 - rotationAngle}deg)`; // Adjust arrow direction

            wheelImage.style.transition = 'transform ' + spinTime + 'ms cubic-bezier(0.25, 0.1, 0.25, 1)';
            wheelImage.style.transform = `rotate(${rotationAngle}deg)`;

            setTimeout(() => {
                isSpinning = false;
                resultSpan.textContent = `Selected position: ${endpointData.POSITION}`;
            }, spinTime);
        } catch (error) {
            console.error('Error fetching data:', error);
            isSpinning = false;
        }
    }
});
