function convertCurrency(amount, sourceCurrency, targetCurrency) {
    const conversionRates = {
        usd: { eur: 0.85, gbp: 0.75, jpy: 110.25 },
        eur: { usd: 1.18, gbp: 0.88, jpy: 130.41 },
        gbp: { usd: 1.33, eur: 1.13, jpy: 148.76 },
        jpy: { usd: 0.0091, eur: 0.0077, gbp: 0.0067 }
    };

    // Convert the amount based on the source and target currencies
    const rate = conversionRates[sourceCurrency.toLowerCase()][targetCurrency.toLowerCase()];

    if (rate) {
        const convertedAmount = amount * rate;
        console.log(`${amount} ${sourceCurrency.toUpperCase()} is approximately ${convertedAmount.toFixed(2)} ${targetCurrency.toUpperCase()}.`);
    } else {
        console.log('Invalid currency input.');
    }
}
const amount = 100;
const sourceCurrency = 'USD';
const targetCurrency = 'EUR';

convertCurrency(amount, sourceCurrency, targetCurrency);
