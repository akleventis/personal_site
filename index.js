var lst1 = [["1", "> print(\"hey i'm alex\")"], ["2", "> print(hometown)"],
["3", "> print(interests)"], ["4", "> print(degree)"],
["5", "> print(resume)"], ["6", "> print(links)"],
["7", "> print(email)"], ["8", "> alex.image()"], ["9", ""]]

var lst2 = [["a", " hey i'm alex"], ["b", " Santa Maria, Ca"],
["c", " [\"Snowboarding\", \"Biking\", \"Coding\", \"Books\"]"], ["d", " Associates of Applied Science in Computer Programming and Development"],
["e", "<a href=\"document/resume.pdf\" target=\"_blank\">resume.pdf</a>"], ["f", " [<a href=\"https://github.com/akleventis\" target=\"_blank\">github.com</a>, <a href=\"https://www.linkedin.com/in/alex-leventis-ab443220b/\" target=\"_blank\">linkdin.com</a>]"],
["g", "<a href=\"mailto:alex.leventis1@gmail.com\">alex.leventis1@gmail.com</a>"], ["h", "<a style=\"cursor:pointer\">Click me!</a>"]]

function terminal(key, value) {
    var app = document.getElementById(key);

    var typewriter = new Typewriter(app, 
        {delay: 75}
    );

    typewriter.typeString(value)
        .pauseFor(2000)
        .start();
}
var i = 0
var j = 0
function loop() {
    if (i > 0) {
        document.getElementById(lst1[i - 1][0]).innerHTML = lst1[i - 1][1];
    }
    if (j > 0) {
        document.getElementById(lst2[j - 1][0]).innerHTML = lst2[j - 1][1];
    }
    terminal(lst1[i][0], lst1[i][1]);
    i++;
    j++;
    if (i < lst1.length) {
        setTimeout(loop, 2200);
    }
}

function img() {
    document.getElementById("my_image").className="my_image_click";
    document.getElementById("t-c").style.justifyContent = "space-evenly";
}   

const mode = document.querySelector('input');
const wake = document.getElementById('wake');
const me = document.getElementById('my_image');
var src = ["/images/wake.png", "/images/wake2.png"]
var x = 0
var y = 0
mode.addEventListener('change', () => {
    document.body.classList.toggle('light-mode');
    wake.src = (x%2==1) ? "/images/wake.png" : "/images/wake2.png";
    me.style.backgroundImage = (y%2==1) ? "url(images/me.jpg)" : "url(images/me2.jpg)";
    y++;
    x++;
}); 