function parseStringToJSON(str) {
    let stack = [];
    let rootNode = null;
    let currentNode = null;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char === '(') {
            // Create a new node and push it to the stack
            let newNode = { n: '', d: 0, c: [] };
            if (currentNode !== null) {
                if (currentNode.c.length > 0) {
                    stack.push(currentNode);
                }
                currentNode.c.push(newNode);
                newNode.d = currentNode.d + 0.5;
                currentNode = newNode;
            } else {
                currentNode = newNode;
                if (rootNode === null) {
                    rootNode = currentNode;
                }
            }
        } else if (char === ')') {
            // Move to the parent node
            if (stack.length > 0) {
                currentNode = stack.pop();
            }
        } else if (char === ',') {
            // Move to the next sibling node
            if (currentNode.parent !== null) {
                let siblingNode = { n: '', d: 0, c: [], parent: currentNode.parent };
                currentNode.c.push(siblingNode);
                currentNode = siblingNode;
            }
        } else if (char !== ' ') {
            // Append character to the current node's value
            currentNode.n += char;
        }
    }

    return rootNode;
}

const inputString = "(((42, 43), (((25, 27), 22), 18)))";
const rootNode = parseStringToJSON(inputString);
console.log(JSON.stringify(rootNode, null, 2));
