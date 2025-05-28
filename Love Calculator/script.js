 // --- DOM Elements ---
 const name1Input = document.getElementById('name1');
 const name2Input = document.getElementById('name2');
 const calculateBtn = document.getElementById('calculate-btn');
 const resultDisplay = document.getElementById('result-display');
 const lovePercentageElement = document.getElementById('love-percentage');
 const loveMessageElement = document.getElementById('love-message');

 const messageBoxOverlay = document.getElementById('message-box-overlay');
 const messageBoxTitle = document.getElementById('message-box-title');
 const messageBoxText = document.getElementById('message-box-text');
 const messageBoxOkBtn = document.getElementById('message-box-ok-btn');

 // --- Event Listeners ---
 calculateBtn.addEventListener('click', calculateLove);
 messageBoxOkBtn.addEventListener('click', hideMessageBox);

 // --- Message Box Functions (Custom Alert) ---
 function showMessageBox(title, message) {
     messageBoxTitle.textContent = title;
     messageBoxText.textContent = message;
     messageBoxOverlay.classList.add('show');
 }

 function hideMessageBox() {
     messageBoxOverlay.classList.remove('show');
 }

 // --- Love Calculator Logic ---
 function calculateLove() {
     const name1 = name1Input.value.trim(); // .trim() removes leading/trailing whitespace
     const name2 = name2Input.value.trim();

     // Input validation
     if (name1 === '' || name2 === '') {
         showMessageBox("Input Error", "Please enter both names to calculate love!");
         return;
     }

     // Simple random love calculation (for fun!)
     // Generate a random percentage between 0 and 100
     const lovePercentage = Math.floor(Math.random() * 101); // 0 to 100

     // Determine a message based on the percentage
     let message = '';
     if (lovePercentage >= 90) {
         message = "A perfect match! You two are meant to be!";
     } else if (lovePercentage >= 70) {
         message = "Great compatibility! There's strong potential here.";
     } else if (lovePercentage >= 50) {
         message = "Good connection! Keep nurturing your bond.";
     } else if (lovePercentage >= 30) {
         message = "There's room to grow! Focus on understanding each other.";
     } else {
         message = "Love is a journey, and every journey starts somewhere!";
     }

     // Display the result with animation
     lovePercentageElement.textContent = `${lovePercentage}%`;
     loveMessageElement.textContent = message;

     // Trigger animation
     resultDisplay.classList.remove('show'); // Reset animation state
     void resultDisplay.offsetWidth; // Trigger reflow to restart CSS transition
     resultDisplay.classList.add('show');
 }

 // --- Initial State ---
 window.onload = function() {
     // Optional: You could pre-fill names for demo or leave empty
 };