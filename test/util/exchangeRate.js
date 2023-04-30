
function deriveWholeNumberRate(value) {
    let b = value;
    while (Math.floor(b) != b) {
        b = b * 10;
    }
    const a = deriveRateForAFromB(b);
    //console.log(b);
    return [a, b];
}

function deriveRateForAFromB(rateForB) {
    const len = Math.floor(rateForB).toString().length;
    let output = "1".padEnd(len, '0');
    return parseInt(output);
}

class ExchangeRate {

    constructor(a, b) {
        this.bondToken = a;
        this.baseToken = b;
        this.useIntegerMath = false;
    }

    bondToBaseToken(a) {
        if (this.useIntegerMath) {
            return Math.floor(Math.floor(a) * Math.floor(this.baseToken) / Math.floor(this.bondToken));
        } else {
            return (a * this.baseToken / this.bondToken);
        }
    }

    baseToBondToken(b) {
        if (this.useIntegerMath) {
            return Math.floor(Math.floor(b) * Math.floor(this.bondToken) / Math.floor(this.baseToken));
        } else {
            return (b * this.bondToken / this.baseToken);
        }
    }

    static increaseByPercent(exchangeRate, percentIncrease) {
        const rate = deriveWholeNumberRate(exchangeRate.baseToken + (exchangeRate.baseToken * (percentIncrease / 100)));
        return new ExchangeRate(rate[0], rate[1]);
    }

    static copy(exchangeRate) {
        return new ExchangeRate(exchangeRate.bondToken, exchangeRate.baseToken);
    }
}

module.exports = {
    ExchangeRate
}