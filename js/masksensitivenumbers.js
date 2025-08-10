    const fullNumber = '95343390125121255881';
    const lastFourDigits = fullNumber.slice(-4);
    const maskedNumber = lastFourDigits.padStart(fullNumber.length, '*');
    console.log(maskedNumber);
    