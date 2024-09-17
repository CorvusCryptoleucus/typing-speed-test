let startTime, endTime;
const testText = "The Chihuahuan raven, or Corvus cryptoleucus, is an intriguing bird known for its striking appearance and intelligence. This raven features a distinctive white patch on its neck and is native to the arid regions of western North America, particularly the Chihuahuan Desert. Highly adaptable, it thrives in various habitats and exhibits remarkable problem-solving skills, often using tools and collaborating with others. With a diet that includes insects, small mammals, and carrion, the Chihuahuan raven plays an essential role in its ecosystem by controlling pest populations and cleaning up the environment.";

// Set the text to be typed
document.getElementById("test-text").innerText = testText;

// Event listener for the start button
document.getElementById("start-btn").addEventListener("click", startTest);

// Event listener for user input
document.getElementById("user-input").addEventListener("input", checkInput);

// Function to start the test
function startTest() {
    console.log("Test started"); // Log when the test starts
    // Clear the input and enable it
    document.getElementById("user-input").value = "";
    document.getElementById("user-input").disabled = false;
    document.getElementById("results").classList.add("hidden"); // Hide results
    startTime = new Date(); // Record start time
    document.getElementById("user-input").focus(); // Focus on the textarea
}

// Function to check user input
function checkInput() {
    const userInput = document.getElementById("user-input").value; // Get user input
    console.log("User input:", userInput); // Log the current user input
    if (userInput === testText) { // Check if input matches the test text
        endTime = new Date(); // Record end time
        const timeTaken = (endTime - startTime) / 1000; // Calculate time taken in seconds
        const wordsPerMinute = Math.round((testText.split(" ").length / timeTaken) * 60); // Calculate WPM
        
        // Display results
        document.getElementById("time").innerText = timeTaken.toFixed(2); // Display time
        document.getElementById("speed").innerText = wordsPerMinute; // Display speed
        document.getElementById("results").classList.remove("hidden"); // Show results
        document.getElementById("user-input").disabled = true; // Disable input
    }
}
