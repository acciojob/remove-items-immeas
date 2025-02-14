//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    // Get references to the select dropdown and button
    let colorSelect = document.getElementById("colorSelect");
    let removeButton = document.querySelector("input[type='button']");

    // Add event listener to the button
    removeButton.addEventListener("click", function () {
        let selectedIndex = colorSelect.selectedIndex;
        
        // Ensure an option is selected before attempting to remove it
        if (selectedIndex !== -1) {
            colorSelect.remove(selectedIndex);
        }
    });
});
