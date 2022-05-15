s = "()"

const isValid = function(s) {
    let [count1, count2, count3] = [0, 0, 0]
    let count1IsOpen, count2IsOpen, count3IsOpen
    let current = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            count1 += 1
            current.push(1)
            // console.log(`Increase Type 1. Current level: ${count1}. Current: ${current}`)
        }
        if (s[i] === '[') {
            count2 += 1
            current.push(2)
            // console.log(`Increase Type 2. Current level: ${count2}. Current: ${current}`)
        }
        if (s[i] === '{') {
            count3 += 1
            current.push(3)
            // console.log(`Increase Type 3. Current level: ${count3}. Current: ${current}`)
        }

        if (s[i] === ')') {
            count1 -= 1
            // console.log('Decrease level of Type 1')
            if (i > 1 && count1IsOpen === false || current[current.length - 1] !== 1) return false
            current.pop()
        }
        if (s[i] === ']') {
            count2 -= 1
            // console.log('Decrease level of Type 2')
            if (i > 1 && count2IsOpen === false || current[current.length - 1] !== 2) return false
            current.pop()
        }
        if (s[i] === '}') {
            count3 -= 1
            // console.log('Decrease level of Type 3')
            if (i > 1 && count3IsOpen === false || current[current.length - 1] !== 3) return false
            current.pop()
        }

        count1 > 0 ? count1IsOpen = true : count1IsOpen = false
        count2 > 0 ? count2IsOpen = true : count2IsOpen = false
        count3 > 0 ? count3IsOpen = true : count3IsOpen = false
        // console.log(`Current: Type ${current}`)
        }
    // console.log('Checking final counts...')
    return (count1IsOpen === false && count2IsOpen === false && count3IsOpen === false)
}

const isValid2 = function(s) {
    let [count1, count2, count3] = [0, 0, 0]
    let count1IsOpen, count2IsOpen, count3IsOpen
    let current = []

    const str = Array.from(s);
    console.log(str)
    str.forEach = (char) => {
        if (s[i] === '(') {
            count1 += 1
            current.push(1)
            // console.log(`Increase Type 1. Current level: ${count1}. Current: ${current}`)
        }
        if (s[i] === '[') {
            count2 += 1
            current.push(2)
            // console.log(`Increase Type 2. Current level: ${count2}. Current: ${current}`)
        }
        if (s[i] === '{') {
            count3 += 1
            current.push(3)
            // console.log(`Increase Type 3. Current level: ${count3}. Current: ${current}`)
        }

        if (s[i] === ')') {
            count1 -= 1
            // console.log('Decrease level of Type 1')
            if (i > 1 && count1IsOpen === false || current[current.length - 1] !== 1) return false
            current.pop()
        }
        if (s[i] === ']') {
            count2 -= 1
            // console.log('Decrease level of Type 2')
            if (i > 1 && count2IsOpen === false || current[current.length - 1] !== 2) return false
            current.pop()
        }
        if (s[i] === '}') {
            count3 -= 1
            // console.log('Decrease level of Type 3')
            if (i > 1 && count3IsOpen === false || current[current.length - 1] !== 3) return false
            current.pop()
        }

        count1 > 0 ? count1IsOpen = true : count1IsOpen = false
        count2 > 0 ? count2IsOpen = true : count2IsOpen = false
        count3 > 0 ? count3IsOpen = true : count3IsOpen = false
        // console.log(`Current: Type ${current}`)
    }
    // console.log('Checking final counts...')
    return (count1IsOpen === false && count2IsOpen === false && count3IsOpen === false)
}

console.log(isValid2(s))