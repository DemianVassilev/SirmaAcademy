function fights(actions) {

    let isStrike = true;
    let isMagic = true;
    let lifoStack = [];

    if (actions.length % 2 === 0) {
        for (let action of actions) {
            if (action === '(' || action === '{') {
                lifoStack.push(action);
            } else if (action === ')') {
                if (lifoStack.pop() !== '(') {
                    isStrike = false;
                    break;
                }
            } else if (action === '}') {
                if (lifoStack.pop() !== '{') {
                    isMagic = false;
                    break;
                }
            } else if (action === '!') {
                if (lifoStack[lifoStack.length - 1] === '!') {
                    lifoStack.pop();
                } else {
                    lifoStack.push(action);
                }
            }
        }
    }

    if (actions.length % 2 !== 0 || lifoStack.length > 0 || !isStrike || !isMagic) {
        console.log('Not Legendary');
    } else {
        console.log('Legendary');
    }

}

fights('()()(()())');                  // Legendary
fights('((!!)(({!!})))');              // Legendary
fights('((())');                       // Not Legendary
fights('{!}!');                        // Not Legendary
fights('({(!!}))');                    // Not Legendary