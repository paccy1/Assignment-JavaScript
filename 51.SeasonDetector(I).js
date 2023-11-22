function getSeason(month) {
    switch (month.toLowerCase()) {
        case 'january':
        case 'february':
        case 'march':
            console.log('Season: Spring');
            break;
        case 'april':
        case 'may':
        case 'june':
            console.log('Season: Summer');
            break;
        case 'july':
        case 'august':
        case 'september':
            console.log('Season: Fall');
            break;
        case 'october':
        case 'november':
        case 'december':
            console.log('Season: Winter');
            break;
        default:
            console.log('Invalid month input');
    }
}
const inputMonth = 'may';
getSeason(inputMonth);
