var line_1 = "Hi! <span class='wave'>👋</span> I'm David."
var i = 0;
document.addEventListener("DOMContentLoaded", function () {
    // shit();
    function shit() {
        if (i < line_1.length) {
            document.querySelector(".line-1").innerHTML += line_1.charAt(i);
            i++;
            setTimeout(shit, 20);
        }
    }
})

