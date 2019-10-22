// 1. firstLast6
// Given an array of ints, return true if 6 appears as either the first or last element in the array.
// The array will be length 1 or more.
//
// firstLast6([1, 2, 6]) → true
// firstLast6([6, 1, 2, 3]) → true
// firstLast6([13, 6, 1, 2, 3]) → false

function firstLast6(array){
    var length = array.length;
    var num1 = array[0];
    var lastnum = array[length - 1];
    return (lastnum === 6 || num1 === 6);
}
// 2. has_23
// Given an array of length 2, return true if it contains a 2 or a 3.

// has23([2, 5]) → true
// has23([4, 3]) → true
// has23([4, 5]) → false

function has23(array){
    result = false;
    for(var i = 0; i < 2; i++){
        if (array[i] === 2 || array[i] === 3){
            result = true;
        }
    }
    return result;
}

// 3. fix_23
// Given an int array length 3, if there is a 2 in the array immediately followed by a 3, set the 3 element to 0.
// Return the changed array.

// fix23([1, 2, 3]) → [1, 2, 0]
// fix23([2, 3, 5]) → [2, 0, 5]
// fix23([1, 2, 1]) → [1, 2, 1]

function fix23 (array){
    var newArray = array;
    for(var i = 0; i < 3; i++){
        if(array[i] === 2 && array[i+1] === 3){
            newArray[i + 1] = 0;
        }
    }
    return newArray;
}

// 4. countYZ
// Given a string, count the number of words ending in 'y' or 'z' -- so the 'y' in "heavy" and the 'z' in "fez" count,
// but not the 'y' in "yellow" (not case sensitive). We'll say that a y or z is at the end of a word if there is a
// space (“ “) immediately following it.
//
// countYZ("fez day") → 2
// countYZ("day fez") → 2
// countYZ("day fyyyz") → 2

function countYZ(string){
    var count = 0;
    var length = string.length;
    for (var i = 0; i < length; i++) {
        var letter = string.substring(i, i + 1);
        var nextLetter = string.substring(i + 1, i + 2);
        if (nextLetter === " " || i + 1 === string.length){
            if (letter === "y" || letter === "z" || letter === "Y" || letter === "Z"){
                count++;
            }
        }
    }
    return count;
}

// 5. endOther
// Given two strings, return true if either of the strings appears at the very end of the other string,
// ignoring upper/lower case differences (in other words, the computation should not be "case sensitive").
// Note: str.toLowerCase() returns the lowercase version of a string.
//
// endOther("Hiabc", "abc") → true
// endOther("AbC", "HiaBc") → true
// endOther("abc", "abXabc") → true

function endOther(string1, string2) {
    var length2 = string2.length;
    var length1 = string1.length;
    var endString2 = string2.substring(length2 - length1);
    var endString1 = string1.substring(length1 - length2);
    var lowerEnd2 = endString2.toLowerCase();
    var lowerEnd1 = endString1.toLowerCase();
    if (lowerEnd1 === lowerEnd2) {
        return true;
    } else {
        return false;
    }
}


// 6. starOut
// Return a version of the given string, where for every star (*) in the string the star and the chars immediately
// to its left and right are gone. So "ab*cd" yields "ad" and "ab**cd" also yields "ad".
//
// starOut("ab*cd") → "ad"
// starOut("ab**cd") → "ad"
// starOut("sm*eilly") → "silly"

function starOut(string){
    var newString = "";
    var length = string.length;
    for (var i = 0; i < length; i++){
        var currentLetter = string.substring(i, i + 1);
        var lastLetter = string.substring(i - 1, i);
        var nextLetter = string.substring(i + 1, i + 2);

        if(nextLetter !== "*" && currentLetter !== "*" && lastLetter !== "*"){
            newString += currentLetter;
        }
    }
    return newString;
}

// 7. getSandwich
//
// A sandwich is two pieces of bread with something in between. Return the string that is between the first and last
// appearance of "bread" in the given string, or return the empty string "" if there are not two pieces of bread.
//
// getSandwich("breadjambread") → "jam"
// getSandwich("xxbreadjambreadyy") → "jam"
// getSandwich("xxbreadyy") → ""

function getSandwich(string){
    var bread1 = string.indexOf("bread");
    var bread2 = string.lastIndexOf("bread");
    var breadth = 5;
    var yummyStuff = "";

    if(bread1 !== bread2){
        yummyStuff += string.substring(bread1 + breadth, bread2);
    }
    return yummyStuff;
}

// 8. canBalance
// Given a non-empty array, return true if there is a place to split the array so that the sum of the numbers on one
// side is equal to the sum of the numbers on the other side.
//
// canBalance([1, 1, 1, 2, 1]) → true
// canBalance([2, 1, 1, 2, 1]) → false
// canBalance([10, 10]) → true

function canBalance(array){
    var length = array.length;
    var gradist = 0;
    var a = 0;
    for (var i = 0; 1 < length; i++) {
        gradist += array[i];
    }
    var callahan = gradist / 2;
    var footBlock = 0;
    var layout = 0;
    while(footBlock < callahan){
        footBlock += array[layout];
        layout++;
    }
    return (footBlock === callahan);
}

// 9. countClumps
// Say that a "clump" in an array is a series of 2 or more adjacent elements of the same value. Return the number of
// clumps in the given array.
//
// countClumps([1, 2, 2, 3, 4, 4]) → 2
// countClumps([1, 1, 2, 1, 1]) → 2
// countClumps([1, 1, 1, 1, 1]) → 1

function countClumps(array){
    var clumpyClams = 0;
    for (var i = 0; i < array.length; i++){
        var clumpyFish = array[i];
        var clumpySeaweed = array[i + 1];
        var clumpySharks = array[i + 2];
            if (clumpyFish === clumpySeaweed && clumpyFish !== clumpySharks){
                clumpyClams++;
        }
    }
    return clumpyClams;
}

// 10. evenlySpaced
// Given three ints, a b c, one of them is small, one is medium and one is large. Return true if the three values are
// evenly spaced, so the difference between small and medium is the same as the difference between medium and large.
//
// evenlySpaced(2, 4, 6) → true
// evenlySpaced(4, 6, 2) → true
// evenlySpaced(4, 6, 3) → false

function evenlySpaced(a, b, c) {
    var big = a;
    var med = b;
    var small = c;

    if(b > a && a > c){
        big = b;
        med = a;
        small = c
    }
    if(c > b && b > a){
        big = c;
        med = b;
        small = a;
    }
    if(b > c && c > a){
        big = b;
        med = c;
        small = a;
    }
    if(a > c && c > b){
        big = a;
        med = c;
        small = b
    }
    if(c > a && a > b){
        big = c;
        med = a;
        small = b;
    }
    if ((big - med) === (med - small)){
        return true;
    } else {
        return false;
    }
}

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += firstlast6([1, 5, 8]);
    document.getElementById("output").innerHTML += has_23([5, 14]);
    document.getElementById("output").innerHTML += fix_23([1, 4, 6]);
    document.getElementById("output").innerHTML += countYZ("hey buddies!");
    document.getElementById("output").innerHTML += endOther("hello", "goodethbyeth");
    document.getElementById("output").innerHTML += starOut(hei*llll*oo);
    document.getElementById("output").innerHTML += getSandwich("breadpeanutbutterjamcheesebreadewww");
    document.getElementById("output").innerHTML += canBalance([1, 3, 5, 7, 2]);
    document.getElementById("output").innerHTML += countClumps([1, 6, 6, 7, 7, 7, 8, 9, 8]);
    document.getElementById("output").innerHTML += evenlySpaced(1, 6, 11);
}
