
// function favorite(actor,movie,sports){
//     console.log("Actor: ",actor);
//     console.log("Movie: ",movie);
//     console.log("Sports: ",sports);

// }
// favorite("Vijay","Leo","Cricket");
function pipelines(l, r) {
    console.log(pipeline1(), pipeline2());

    function pipeline1() {
        return "Pipeline: " + l;

    }
    function pipeline2() {
        return "Pipeline: " + r;
    }
}
pipelines("left", "right");




// function maths() {
//     return {
//         add(a,b) {
//             console.log(a + b)
//         },
//         sub(a,b) {
//             console.log(a - b)
//         },

//         multi(a,b) {

//             console.log(a * b)
//         }
//     }

// }
// let math = maths();
// math.sub(20,40)
// function vada(name) {
//     console.log(`${name} class iruka`);
// }

// function dai(callback) {
//     callback("jagan")
// }

// dai(vada)

let daniel = new Promise((resolve, reject) => {
    reached = true;

    if (reached == true) {
        resolve()
    } else {
        reject()
    }
});
daniel.then(() => console.log("Yes, i reached Home"))
    .catch(() => console.log("Nope, im stucked in traffic"))


