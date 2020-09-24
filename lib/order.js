let numberArr = [];
Outer: while (true) {
    let number = prompt('Enter a positive integer', '');
    let numCheck = parseFloat(number);
    let numCheck2 = parseInt(number);
    if (number > 0 && numCheck - numCheck2 == 0) {
        alert(`You would like to order ${number} books`)
        break Outer;
    }
    else {
        continue;
    }
}

