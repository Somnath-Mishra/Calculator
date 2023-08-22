let inputExp = document.querySelector("#input");
let nthPowerN = false;

//all button events
for (let i = 0; i < 25; i++) {
    document.querySelectorAll("td")[i].addEventListener('click', function () {

        var buttonInnerHTML = this.className;
        let exp = '';

        switch (buttonInnerHTML) {
            case "backspace":
                exp = inputExp.innerHTML;
                let newExp = exp.slice(0, exp.length - 1);
                inputExp.innerHTML = newExp;
                break;

            case "firstBracketOpen":
                exp += '(';
                inputExp.innerHTML = inputExp.innerHTML + exp;
                break;

            case "firstBracketClose":
                exp += ')';
                inputExp.innerHTML = inputExp.innerHTML + exp;
                break;

            case "mod":
                let expression = document.querySelector("#input").innerText;
                let result = evaluate(expression);
                if (result < 0) {
                    result = -result;
                }
                document.querySelector(".output").innerHTML = "mod(" + expression + ")=" + result;
                break;

            case "Pie":
                exp += '3.14159';
                inputExp.innerHTML = inputExp.innerHTML + exp;

                break;
            case "seven":
                exp += '7';
                inputExp.innerHTML = inputExp.innerHTML + exp;
                break;

            case "eight":
                exp += '8';
                inputExp.innerHTML = inputExp.innerHTML + exp;
                break;

            case "nine":
                exp += '9';
                inputExp.innerHTML = inputExp.innerHTML + exp;
                break;

            case "divide":
                exp += '/';
                inputExp.innerHTML = inputExp.innerHTML + exp;
                break;

            case "root":
                let Expression = document.querySelector("#input").innerText;
                let Result = evaluate(Expression);
                let squareRoot = Math.sqrt(Result);
                document.querySelector(".output").innerHTML = "Square Root(" + Expression + ")=" + squareRoot;
                inputExp.innerHTML = squareRoot;
                break;

            case "four":
                exp += '4';
                inputExp.innerHTML = inputExp.innerHTML + exp;
                break;

            case "five":
                exp += '5';
                inputExp.innerHTML = inputExp.innerHTML + exp;
                break;

            case "six":
                exp += '6';
                inputExp.innerHTML = inputExp.innerHTML + exp;
                break;

            case "x":
                exp += 'x';
                inputExp.innerHTML = inputExp.innerHTML + exp;
                break;

            case "x^2":
                let squareExp = document.querySelector("#input").innerText;
                let squareResult = evaluate(squareExp);
                squareResult = squareResult * squareResult;
                document.querySelector(".output").innerHTML = "Square (" + squareExp + ")=" + squareResult;
                inputExp.innerHTML = squareResult;
                break;

            case "one":
                exp += '1';
                inputExp.innerHTML = inputExp.innerHTML + exp;
                break;

            case "two":
                exp += '2';
                inputExp.innerHTML = inputExp.innerHTML + exp;
                break;

            case "three":
                exp += '3';
                inputExp.innerHTML = inputExp.innerHTML + exp;
                break;

            case "minus":
                exp += '-';
                inputExp.innerHTML = inputExp.innerHTML + exp;
                break;

            case "xToThePowern":
                let nthPowerExp = document.querySelector("#input").innerText;
                let beforePowerEvaluation = evaluate(nthPowerExp);
                inputExp.innerHTML = beforePowerEvaluation + "^";
                nthPowerN = true;
                break;

            case "zero":
                exp += '0';
                inputExp.innerHTML = inputExp.innerHTML + exp;
                break;

            case "dot":
                exp += '.';
                inputExp.innerHTML = inputExp.innerHTML + exp;
                break;

            case "percent":
                let percentExp = document.querySelector("#input").innerText;
                let percentResult = evaluate(percentExp);
                percentResult = percentResult * 100;
                document.querySelector(".output").innerHTML = "(" + percentExp + ")% = " + percentResult;
                inputExp.innerHTML = percentResult;
                break;

            case "plus":
                exp += '+';
                inputExp.innerHTML = inputExp.innerHTML + exp;
                break;

            default:
                console.log(buttonInnerHTML);

        }
    });
}

//Adding backspace key event
document.addEventListener("keydown", function (event) {
    let key = event.key;
    if (key == "Backspace") {
        exp = inputExp.innerHTML;
        let newExp = exp.slice(0, exp.length - 1);
        inputExp.innerHTML = newExp;
        var activeButton = document.querySelector(".backspace");
        activeButton.classList.add("keyPress");
        setTimeout(function () {
            activeButton.classList.remove("keyPress");
        }, 100);
    }
})
//Adding keyboard event
document.addEventListener("keypress", function (event) {
    var keyName = event.key;
    let exp = '';
    buttonAnimation(keyName);

    switch (keyName) {
        case "(":
            exp += '(';
            inputExp.innerHTML = inputExp.innerHTML + exp;

            break;
        case ")":
            exp += ')';
            inputExp.innerHTML = inputExp.innerHTML + exp;
            break;
        case "mod":

            break;
        case "p":
            exp += '3.14159';
            inputExp.innerHTML = inputExp.innerHTML + exp;
            break;

        case "7":
            exp += '7';
            inputExp.innerHTML = inputExp.innerHTML + exp;
            break;

        case "8":
            exp += '8';
            inputExp.innerHTML = inputExp.innerHTML + exp;
            break;

        case "9":
            exp += '9';
            inputExp.innerHTML = inputExp.innerHTML + exp;
            break;

        case "/":
            exp += '/';
            inputExp.innerHTML = inputExp.innerHTML + exp;
            break;

        case "4":
            exp += '4';
            inputExp.innerHTML = inputExp.innerHTML + exp;
            break;

        case "5":
            exp += '5';
            inputExp.innerHTML = inputExp.innerHTML + exp;
            break;

        case "6":
            exp += '6';
            inputExp.innerHTML = inputExp.innerHTML + exp;
            break;

        case "*":
            exp += 'x';
            inputExp.innerHTML = inputExp.innerHTML + exp;
            break;

        case "1":
            exp += '1';
            inputExp.innerHTML = inputExp.innerHTML + exp;
            break;

        case "2":
            exp += '2';
            inputExp.innerHTML = inputExp.innerHTML + exp;
            break;

        case "3":
            exp += '3';
            inputExp.innerHTML = inputExp.innerHTML + exp;
            break;

        case "-":
            exp += '-';
            inputExp.innerHTML = inputExp.innerHTML + exp;
            break;

        case "^":
            let nthPowerExp = document.querySelector("#input").innerText;
            let beforePowerEvaluation = evaluate(nthPowerExp);
            inputExp.innerHTML = beforePowerEvaluation + "^";
            nthPowerN = true;
            break;

        case "0":
            exp += '0';
            inputExp.innerHTML = inputExp.innerHTML + exp;
            break;

        case ".":
            exp += '.';
            inputExp.innerHTML = inputExp.innerHTML + exp;
            break;

        case "%":
            let percentExp = document.querySelector("#input").innerText;
            let percentResult = evaluate(percentExp);
            percentResult = percentResult * 100;
            document.querySelector(".output").innerHTML = "(" + percentExp + ")% = " + percentResult;
            inputExp.innerHTML = percentResult;
            break;
        case "+":
            exp += '+';
            inputExp.innerHTML = inputExp.innerHTML + exp;
            break;

        case "Enter":
            if (nthPowerN) {
                let nthPowerExpression = inputExp.innerText;
                inputExp.innerHTML = evaluate_xToPowerN(nthPowerExpression);
                document.querySelector(".output").innerHTML = nthPowerExpression + "=" + inputExp.innerText;
                nthPowerN = false;
            }
            else {
                let expression = document.querySelector("#input").innerText;
                let result = evaluate(expression);
                console.log(expression);
                console.log(typeof (expression));
                document.querySelector(".output").innerHTML = expression + "=" + result;
            }
            break;
        case "=":
            if (nthPowerN) {
                let nthPowerExpression = inputExp.innerText;
                inputExp.innerHTML = evaluate_xToPowerN(nthPowerExpression);
                document.querySelector(".output").innerHTML = nthPowerExpression + "=" + inputExp.innerText;
                nthPowerN = false;
            }
            else {
                let express = document.querySelector("#input").innerText;
                let Result = evaluate(express);
                console.log(express);
                console.log(typeof (express));
                document.querySelector(".output").innerHTML = express + "=" + Result;
            }
            break;
        default:
            console.log(keyName);

    }

});


//Adding event for equal button
document.querySelector(".equal").addEventListener("click", function () {
    if (nthPowerN) {
        let nthPowerExpression = inputExp.innerText;
        inputExp.innerHTML = evaluate_xToPowerN(nthPowerExpression);
        document.querySelector(".output").innerHTML = nthPowerExpression + "=" + inputExp.innerText;
        nthPowerN = false;
    }
    else {
        let expression = document.querySelector("#input").innerText;
        let result = evaluate(expression);
        document.querySelector(".output").innerHTML = expression + "=" + result;
    }
});


//Evaluating X^n Expression
function evaluate_xToPowerN(expression) {
    let tokens = expression.split('^');
    return Math.pow(tokens[0], tokens[1]);
}

//Evaluating Expression
function evaluate(expression) {
    let tokens = expression.split('');

    // Stack for numbers: 'values'
    let values = [];

    // Stack for Operators: 'ops'
    let ops = [];

    for (let i = 0; i < tokens.length; i++) {
        // Current token is a whitespace, skip it
        if (tokens[i] == ' ') {
            continue;
        }

        // Current token is a number,
        // push it to stack for numbers
        if ((tokens[i] >= '0' && tokens[i] <= '9') || tokens[i] == '.') {
            let sbuf = "";

            // There may be more than
            // one digits in number
            while (i < tokens.length && ((
                tokens[i] >= '0' &&
                tokens[i] <= '9') || tokens[i] == '.')) {
                sbuf = sbuf + tokens[i++];
            }
            values.push(parseFloat(sbuf, 10));

            // Right now the i points to
            // the character next to the digit,
            // since the for loop also increases
            // the i, we would skip one
            //  token position; we need to
            // decrease the value of i by 1 to
            // correct the offset.
            i--;
        }

        // Current token is an opening
        // brace, push it to 'ops'
        else if (tokens[i] == '(') {
            ops.push(tokens[i]);
        }

        // Closing brace encountered,
        // solve entire brace
        else if (tokens[i] == ')') {
            while (ops[ops.length - 1] != '(') {
                values.push(applyOp(ops.pop(),
                    values.pop(),
                    values.pop()));
            }
            ops.pop();
        }

        // Current token is an operator.
        else if (tokens[i] == '+' ||
            tokens[i] == '-' ||
            tokens[i] == 'x' ||
            tokens[i] == '/') {

            // While top of 'ops' has same
            // or greater precedence to current
            // token, which is an operator.
            // Apply operator on top of 'ops'
            // to top two elements in values stack
            while (ops.length > 0 &&
                hasPrecedence(tokens[i],
                    ops[ops.length - 1])) {
                values.push(applyOp(ops.pop(),
                    values.pop(),
                    values.pop()));
            }

            // Push current token to 'ops'.
            ops.push(tokens[i]);
        }
    }

    // Entire expression has been
    // parsed at this point, apply remaining
    // ops to remaining values
    while (ops.length > 0) {
        values.push(applyOp(ops.pop(),
            values.pop(),
            values.pop()));
    }

    // Top of 'values' contains
    // result, return it
    return values.pop();
}

// Returns true if 'op2' has
// higher or same precedence as 'op1',
// otherwise returns false.
function hasPrecedence(op1, op2) {
    if (op2 == '(' || op2 == ')') {
        return false;
    }
    if ((op1 == 'x' || op1 == '/') &&
        (op2 == '+' || op2 == '-')) {
        return false;
    }
    else {
        return true;
    }
}

// A utility method to apply an
// operator 'op' on operands 'a'
// and 'b'. Return the result.
function applyOp(op, b, a) {
    switch (op) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case 'x':
            return a * b;
        case '/':
            if (b == 0) {
                // document.write("Cannot divide by zero");
                document.querySelector(".output").innerHTML = "Cannot divide by zero";
                inputExp.innerHTML = "";
            }
            return a / b;
    }
    return 0;
}

function buttonAnimation(currentKey) {
    switch (currentKey) {
        case "(":
            var activeButton = document.querySelector(".firstBracketOpen");
            activeButton.classList.add("keyPress");
            setTimeout(function () {
                activeButton.classList.remove("keyPress");
            }, 100);
            break;
        case ")":
            var activeButton = document.querySelector(".firstBracketClose");
            activeButton.classList.add("keyPress");
            setTimeout(function () {
                activeButton.classList.remove("keyPress");
            }, 100);
            break;
        case "p":
            var activeButton = document.querySelector(".Pie");
            activeButton.classList.add("keyPress");
            setTimeout(function () {
                activeButton.classList.remove("keyPress");
            }, 100);
            break;
        case "7":
            var activeButton = document.querySelector(".seven");
            activeButton.classList.add("keyPress");
            setTimeout(function () {
                activeButton.classList.remove("keyPress");
            }, 100);
            break;
        case "8":
            var activeButton = document.querySelector(".eight");
            activeButton.classList.add("keyPress");
            setTimeout(function () {
                activeButton.classList.remove("keyPress");
            }, 100);
            break;
        case "9":
            var activeButton = document.querySelector(".nine");
            activeButton.classList.add("keyPress");
            setTimeout(function () {
                activeButton.classList.remove("keyPress");
            }, 100);
            break;
        case "/":
            var activeButton = document.querySelector(".divide");
            activeButton.classList.add("keyPress");
            setTimeout(function () {
                activeButton.classList.remove("keyPress");
            }, 100);
            break;
        case "4":
            var activeButton = document.querySelector(".four");
            activeButton.classList.add("keyPress");
            setTimeout(function () {
                activeButton.classList.remove("keyPress");
            }, 100);
            break;
        case "5":
            var activeButton = document.querySelector(".five");
            activeButton.classList.add("keyPress");
            setTimeout(function () {
                activeButton.classList.remove("keyPress");
            }, 100);
            break;
        case "6":
            var activeButton = document.querySelector(".six");
            activeButton.classList.add("keyPress");
            setTimeout(function () {
                activeButton.classList.remove("keyPress");
            }, 100);
            break;
        case "*":
            var activeButton = document.querySelector(".x");
            activeButton.classList.add("keyPress");
            setTimeout(function () {
                activeButton.classList.remove("keyPress");
            }, 100);
            break;
        case "1":
            var activeButton = document.querySelector(".one");
            activeButton.classList.add("keyPress");
            setTimeout(function () {
                activeButton.classList.remove("keyPress");
            }, 100);
            break;
        case "2":
            var activeButton = document.querySelector(".two");
            activeButton.classList.add("keyPress");
            setTimeout(function () {
                activeButton.classList.remove("keyPress");
            }, 100);
            break;
        case "3":
            var activeButton = document.querySelector(".three");
            activeButton.classList.add("keyPress");
            setTimeout(function () {
                activeButton.classList.remove("keyPress");
            }, 100);
            break;
        case "-":
            var activeButton = document.querySelector(".minus");
            activeButton.classList.add("keyPress");
            setTimeout(function () {
                activeButton.classList.remove("keyPress");
            }, 100);
            break;
        case "^":
            var activeButton = document.querySelector(".xToThePowern");
            activeButton.classList.add("keyPress");
            setTimeout(function () {
                activeButton.classList.remove("keyPress");
            }, 100);
            break;
        case "0":
            var activeButton = document.querySelector(".zero");
            activeButton.classList.add("keyPress");
            setTimeout(function () {
                activeButton.classList.remove("keyPress");
            }, 100);
            break;
        case ".":
            var activeButton = document.querySelector(".dot");
            activeButton.classList.add("keyPress");
            setTimeout(function () {
                activeButton.classList.remove("keyPress");
            }, 100);
            break;
        case "%":
            var activeButton = document.querySelector(".percent");
            activeButton.classList.add("keyPress");
            setTimeout(function () {
                activeButton.classList.remove("keyPress");
            }, 100);
            break;
        case "+":
            var activeButton = document.querySelector(".plus");
            activeButton.classList.add("keyPress");
            setTimeout(function () {
                activeButton.classList.remove("keyPress");
            }, 100);
            break;
        case "=":
            var activeButton = document.querySelector(".equal");
            activeButton.classList.add("keyPress");
            setTimeout(function () {
                activeButton.classList.remove("keyPress");
            }, 100);
            break;
        case "Enter":
            var activeButton = document.querySelector(".equal");
            activeButton.classList.add("keyPress");
            setTimeout(function () {
                activeButton.classList.remove("keyPress");
            }, 100);
            break;
        default:
            console.log(currentKey);
    }
}