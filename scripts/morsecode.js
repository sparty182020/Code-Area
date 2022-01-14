// Morse Code Dictionary
const stmca = {
    a : ".-",
    b : "-...",
    c : "-.-.",
    d : "-..",
    e : ".",
    f : "..-.",
    g : "--.",
    h : "....",
    i : "..",
    j : ".---",
    k : "-.-",
    l : ".-..",
    m : "--",
    n : "-.",
    o : "---",
    p : ".--.",
    q : "--.-",
    r : ".-.",
    s : "...",
    t : "-",
    u : "..-",
    v : "...-",
    w : ".--",
    x : "-..-",
    y : "-.--",
    z : "--..",
    specials : [{
        space : "/",
        period : ".-.-.-",
        comma : "--..--",
        dash : "-..-.",
        slash : "-....-"
    }],
    numbers : [{
        0 : "-----",
        1 : ".----",
        2 : "..---",
        3 : "...--",
        4 : "....-",
        5 : ".....",
        6 : "-....",
        7 : "--...",
        8 : "---..",
        9 : "----.",
    }] 
}

// String to Morse Code
function stmc(string) {
    const scRegex = /\w/
    const ncRegex = /\d/
    const splitstr = string.toLowerCase().split('')
    const length = splitstr.length
    let i;
    var output = ''
    for (i=0;i<length;i++) {
        // Tests if its a "non-word character"
        if (scRegex.test(splitstr[i]) == false) {
            // Test if its a number
            if (ncRegex.test(parseInt(splitstr[i],10)) == true) {
                if (splitstr[i] == 0) {
                    output += `${stmca.numbers[0][0]} `
                } else if (splitstr[i] == 1) {
                    output += `${stmca.numbers[0][1]} `
                } else if (splitstr[i] == 2) {
                    output += `${stmca.numbers[0][2]} `
                } else if (splitstr[i] == 3) {
                    output += `${stmca.numbers[0][3]} `
                } else if (splitstr[i] == 4) {
                    output += `${stmca.numbers[0][4]} `
                } else if (splitstr[i] == 5) {
                    output += `${stmca.numbers[0][5]} `
                } else if (splitstr[i] == 6) {
                    output += `${stmca.numbers[0][6]} `
                } else if (splitstr[i] == 7) {
                    output += `${stmca.numbers[0][7]} `
                } else if (splitstr[i] == 8) {
                    output += `${stmca.numbers[0][8]} `
                } else if (splitstr[i] == 9) {
                    output += `${stmca.numbers[0][9]} `
                }
            } else {
                if (splitstr[i] == " ") {
                    output += `${stmca.specials.space} `
                } else if (splitstr[i] == ".") {
                    output += `${stmca.specials.period} `
                } else if (splitstr[i] == ",") {
                    output += `${stmca.specials.comma} `
                } else if (splitstr[i] == "-") {
                    output += `${stmca.specials.dash} `
                } else if (splitstr[i] == "/") {
                    output += `${stmca.specials.slash} `
                } else {
                }
            }
        } else {
            if (splitstr[i] == "a") {
                output += `${stmca.a} `
            } else if (splitstr[i] == "b") {
                output += `${stmca.b} `
            } else if (splitstr[i] == "c") {
                output += `${stmca.c} `
            } else if (splitstr[i] == "d") {
                output += `${stmca.d} `
            } else if (splitstr[i] == "e") {
                output += `${stmca.e} `
            } else if (splitstr[i] == "f") {
                output += `${stmca.f} `
            } else if (splitstr[i] == "g") {
                output += `${stmca.g} `
            } else if (splitstr[i] == "h") {
                output += `${stmca.h} `
            } else if (splitstr[i] == "i") {
                output += `${stmca.i} `
            } else if (splitstr[i] == "j") {
                output += `${stmca.j} `
            } else if (splitstr[i] == "k") {
                output += `${stmca.k} `
            } else if (splitstr[i] == "l") {
                output += `${stmca.l} `
            } else if (splitstr[i] == "m") {
                output += `${stmca.m} `
            } else if (splitstr[i] == "n") {
                output += `${stmca.n} `
            } else if (splitstr[i] == "o") {
                output += `${stmca.o} `
            } else if (splitstr[i] == "p") {
                output += `${stmca.p} `
            } else if (splitstr[i] == "q") {
                output += `${stmca.q} `
            } else if (splitstr[i] == "r") {
                output += `${stmca.r} `
            } else if (splitstr[i] == "s") {
                output += `${stmca.s} `
            } else if (splitstr[i] == "t") {
                output += `${stmca.t} `
            } else if (splitstr[i] == "u") {
                output += `${stmca.u} `
            } else if (splitstr[i] == "v") {
                output += `${stmca.v} `
            } else if (splitstr[i] == "w") {
                output += `${stmca.w} `
            } else if (splitstr[i] == "x") {
                output += `${stmca.x} `
            } else if (splitstr[i] == "y") {
                output += `${stmca.y} `
            } else if (splitstr[i] == "z") {
                output += `${stmca.z} `
            }
        }
    }
    return output.replace(/^[ \t]+|[ \t]+$/gmi,'')
}

// Morse Code to String
function mcts(morseCode) {
    const splitMC = morseCode.split(' ')
    const length = splitMC.length
    let i;
    let output = ''
    for (i=0;i<length;i++) {
        if (splitMC[i] == stmca.a) {
            output += `a`
        } else if (splitMC[i] == stmca.b) {
            output += `b`
        } else if (splitMC[i] == stmca.c) {
            output += `c`
        } else if (splitMC[i] == stmca.d) {
            output += `d`
        } else if (splitMC[i] == stmca.e) {
            output += `e`
        } else if (splitMC[i] == stmca.f) {
            output += `f`
        } else if (splitMC[i] == stmca.g) {
            output += `g`
        } else if (splitMC[i] == stmca.h) {
            output += `h`
        } else if (splitMC[i] == stmca.i) {
            output += `i`
        } else if (splitMC[i] == stmca.j) {
            output += `j`
        } else if (splitMC[i] == stmca.k) {
            output += `k`
        } else if (splitMC[i] == stmca.l) {
            output += `l`
        } else if (splitMC[i] == stmca.m) {
            output += `m`
        } else if (splitMC[i] == stmca.n) {
            output += `n`
        } else if (splitMC[i] == stmca.o) {
            output += `o`
        } else if (splitMC[i] == stmca.p) {
            output += `p`
        } else if (splitMC[i] == stmca.q) {
            output += `q`
        } else if (splitMC[i] == stmca.r) {
            output += `r`
        } else if (splitMC[i] == stmca.s) {
            output += `s`
        } else if (splitMC[i] == stmca.t) {
            output += `t`
        } else if (splitMC[i] == stmca.u) {
            output += `u`
        } else if (splitMC[i] == stmca.v) {
            output += `v`
        } else if (splitMC[i] == stmca.w) {
            output += `w`
        } else if (splitMC[i] == stmca.x) {
            output += `x`
        } else if (splitMC[i] == stmca.y) {
            output += `y`
        } else if (splitMC[i] == stmca.z) {
            output += `z`
        } else if (splitMC[i] == stmca.specials.space) {
            output += ` `
        } else if (splitMC[i] == stmca.specials.period) {
            output += `.`
        } else if (splitMC[i] == stmca.specials.comma) {
            output += `,`
        } else if (splitMC[i] == stmca.specials.dash) {
            output += `-`
        } else if (splitMC[i] == stmca.specials.slash) {
            output += `/`
        } else if (splitMC[i] == stmca.number[0][0]) {
            output += `0`
        } else if (splitMC[i] == stmca.number[0][1]) {
            output += `1`
        } else if (splitMC[i] == stmca.number[0][2]) {
            output += `2`
        } else if (splitMC[i] == stmca.number[0][3]) {
            output += `3`
        } else if (splitMC[i] == stmca.number[0][4]) {
            output += `4`
        } else if (splitMC[i] == stmca.number[0][5]) {
            output += `5`
        } else if (splitMC[i] == stmca.number[0][6]) {
            output += `6`
        } else if (splitMC[i] == stmca.number[0][7]) {
            output += `7`
        } else if (splitMC[i] == stmca.number[0][8]) {
            output += `8`
        } else if (splitMC[i] == stmca.number[0][9]) {
            output += `9`
        }
    }
    return output;
}