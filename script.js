var N = new Array();

N[0] = "Jackson";
N[1] = "Roy";
N[2] = "Sheldon";
N[3] = "Eva";
N[4] = "Johnson";
N[5] = "Jimmy";
N[6] = "Geirge";
N[7] = "Dakota";
N[8] = "William";
N[9] = "Thomas";
for (var i = 0; i < N.length; i++) {
   
    if (N[i].charAt(0) === 'j' || N[i].charAt(0) === 'J') {
        console.log("goodbye " + N[i]);
    }
    else {
        console.log("hello " + N[i]);
    }
}
