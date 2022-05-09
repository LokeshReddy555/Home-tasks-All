let data = process.argv.slice(2);  //taking i/p form command line args
if (data[0] == '--operation') {
    const numsArray = data.slice(2);
    if (data[1] === 'addition') {
        let sum = 0;
        if (numsArray.length == 0) {
            console.log("No numbers, so default sum value will be generated");
        }
        for (let i = 0; i < numsArray.length; i++) {
            if (!isNaN(Number(numsArray[i]))) {
                sum += Number(numsArray[i]);
            }
            else {
                console.log(`invalid number at index ${i + 1}, skipping it`);
            }
        } console.log(sum);
    }
    else if (data[1] === 'multiply') {
        let product = 1;
        if (numsArray.length == 0) {
            console.log("No numbers, so default product value will be generated");
        }
        for (let i = 0; i < numsArray.length; i++) {
            if (!isNaN(Number(numsArray[i]))) {
                product *= Number(numsArray[i]);
            }
            else {
                console.log(`invalid number at index ${i + 1}, skipping it`);
            }
        } console.log(product);
    }
    else if (data[1] === 'subtraction') {
        if (numsArray.length != 2) {
            console.log("Invalid number of arguments for operation");
        }
        else {
            if (isNaN(numsArray[0]) || isNaN(numsArray[1])) {
                console.log("invalid number(s)");
            }
            else {
                console.log(numsArray[0] - numsArray[1]);
            }
        }
    }
    else if (data[1] === 'division') {
        if (numsArray.length != 2) {
            console.log("Invalid number of arguments for operation");
        }
        else {
            if (isNaN(numsArray[0]) || isNaN(numsArray[1])) {
                console.log("invalid number(s)");
            }
            else {
                console.log(numsArray[0] / numsArray[1]);
            }
        }
    }
    else {
        console.log("No operation is mentioned / Invalid operation");
    }
}
else {
    console.log("No operation mentioned, please follow format : --operation (ope) ...nums ");
}