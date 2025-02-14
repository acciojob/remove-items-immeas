window.onload = function () {
    document.querySelector("input[type='button']").onclick = function () {
        let colorSelect = document.getElementById("colorSelect");
        if (colorSelect.value) colorSelect.remove(colorSelect.selectedIndex);
    };
};

