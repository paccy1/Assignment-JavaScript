function printPattern(rows) {
    for (let i = 1; i <= rows; i++) {
        let row = '';
        for (let j = 1; j <= rows; j++) {
            if (j === rows - i + 1) {
                row += '1 ';
            } else {
                row += '  ';
            }
        }
        console.log(row);
    }
}
printPattern(4);