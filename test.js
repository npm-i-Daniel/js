//Task 01
        function feb() {
            let a = 0; b = 1 ; n= 10;
            for (let i = 0; i <= n; i++) {
                console.log(a);
                [a, b] = [b, a + b]
            }
        }
        feb()

//Task 02 
        let mark = 55
        if (mark >= 90) {
            console.log(`grade A = ${mark}`);

        } 
        else if (mark >= 75 && mark <= 89) {
            console.log(`grade B = ${mark}`);
        }
        else if(mark >= 60 && mark <= 74){
            console.log(`grade C = ${mark}`);
        }
        else {
            console.log(`Fail ${mark}`);
        }

//Task 03
        function ar(c, d, operator) {

            if (operator == "add") console.log(c + d);
            else if (operator == "sub") console.log(c - d);
            else if (operator == "multiply") console.log(c * d);
            else if (operator == "division") console.log(c / d);
        }
        ar(2, 4, "multiply")

        
        

        


   