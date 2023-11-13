function displayPattern(rows, columns) {
    for (var i = 0; i < rows; i++) {
        var row = '';
        for (var j = 0; j < columns; j++) {
            row += '* ';
        }
        console.log(row);
    }
}

// Example usage for a 4x5 pattern:
displayPattern(4, 5);