function deciphering(s, n) {

    let shiftBack = n;
    let encryptedMessage = s.split('');
    let decipheredMessage = [];

    for (let letter of encryptedMessage) {
        letter = String.fromCharCode(letter.charCodeAt(0) - shiftBack);
        decipheredMessage.push(letter);
    }

    console.log(decipheredMessage.join(''));

}

deciphering('Uifsf!jt!b!tfdsfu"', 1);         // There is a secret!
deciphering('Wkurz#lw#lq#wkh#iluh$', 3);      // Throw it in the fire!
deciphering('Fwfltws', 5);                    // Aragorn
