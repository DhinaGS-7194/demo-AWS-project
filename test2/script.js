// Get references to all the elements we need to animate
const leftPanel = document.querySelector('.left-panel');
const rightPanel = document.querySelector('.right-panel');
const scrollIndicator = document.querySelector('.scroll-indicator');
const layerTwoContent = document.querySelector('.main-content');
const layerThreeContent = document.querySelector('.layer-three-container');
const layerFourContent = document.querySelector('.layer-four-container');

// Listen for the 'scroll' event on the window
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;

    // 1. Handle the initial glass-split animation
    if (scrollY > 100) {
        leftPanel.classList.add('split');
        rightPanel.classList.add('split');
        layerTwoContent.classList.add('zoomed');
        scrollIndicator.classList.add('hidden');
        layerThreeContent.classList.add('preview');
    } else {
        leftPanel.classList.remove('split');
        rightPanel.classList.remove('split');
        layerTwoContent.classList.remove('zoomed');
        scrollIndicator.classList.remove('hidden');
        layerThreeContent.classList.remove('preview');
    }

    // 2. Handle the transition from Layer 2 to Layer 3
    const transitionTriggerTwo = viewportHeight; 
    if (scrollY > transitionTriggerTwo) {
        layerTwoContent.classList.add('pass-through');
        layerThreeContent.classList.add('visible');
        layerFourContent.classList.add('preview'); // NEW: Show preview of Layer 4
    } else {
        layerTwoContent.classList.remove('pass-through');
        layerThreeContent.classList.remove('visible');
        layerFourContent.classList.remove('preview'); // NEW: Hide preview of Layer 4
    }

    // 3. Handle the transition from Layer 3 to Layer 4
    const transitionTriggerThree = viewportHeight * 2;
    if (scrollY > transitionTriggerThree) {
        layerThreeContent.classList.add('pass-through');
        layerFourContent.classList.add('visible');
    } else {
        layerThreeContent.classList.remove('pass-through');
        layerFourContent.classList.remove('visible');
    }
});