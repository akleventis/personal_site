var lst1 = [["1", "> print(\"hey i'm alex\")"], ["2", "> print(hometown)"],
["3", "> print(interests)"], ["4", "> print(degree)"],
["5", "> print(resume)"], ["6", "> print(links)"],
["7", "> print(email)"], ["8", ">"]]

var lst2 = [["a", " hey i'm alex"], ["b", " Santa Maria, Ca"],
["c", " [\"Snowboarding\", \"Biking\", \"Coding\", \"Books\"]"], ["d", " Associates of Applied Science in Computer Programming and Development"],
["e", " resume.pdf"], ["f", " [github.com, linkdin.com]"],
["g", " alex.leventis1@gmail.com"], ["h", ""]]

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
        setTimeout(loop, 3000);
    }
}