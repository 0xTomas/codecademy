s = "()"

const isValid = function(s) {
    let [count1, count2, count3] = [0, 0, 0]
    let count1IsOpen, count2IsOpen, count3IsOpen
    let current = []

    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case '(':
                count1 += 1
                current.push(1)
                break

            case '[':
                count2 += 1
                current.push(2)
                break

            case '{':
                count3 += 1
                current.push(3)
                break

            case ')':
                count1 -= 1
                if (i > 1 && count1IsOpen === false || current[current.length - 1] !== 1) return false
                current.pop()
                break

            case ']':
                count2 -= 1
                if (i > 1 && count2IsOpen === false || current[current.length - 1] !== 2) return false
                current.pop()
                break

            case '}':
                count3 -= 1
                if (i > 1 && count3IsOpen === false || current[current.length - 1] !== 3) return false
                current.pop()
                break
            default:
                break
        }

        count1 > 0 ? count1IsOpen = true : count1IsOpen = false
        count2 > 0 ? count2IsOpen = true : count2IsOpen = false
        count3 > 0 ? count3IsOpen = true : count3IsOpen = false
        }
    return (count1IsOpen === false && count2IsOpen === false && count3IsOpen === false)
}


console.log(isValid(s))