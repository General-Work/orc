export default function paginate(arr, startingIndex, paginate) {
    let itemcount = 0
    let paginated = []
    let appendAfter = function() {
        paginated = [...paginated, arr[startingIndex]]
    }
    let appendBefore = function() {
        paginated = [arr[startingIndex], ...paginated]
    }
    if (!(startingIndex === (arr.length - 1))) {
        do {
            // console.log('is for first argrument')
            if (arr[startingIndex]) {
                appendAfter()
                startingIndex++
                itemcount++;
            } else {
                startingIndex = startingIndex - paginate
                appendBefore()
                startingIndex++
                itemcount++

            }
        } while (itemcount < paginate);
    } else {
        startingIndex++
        for (let apl = startingIndex - paginate; apl < arr.length; apl++) {
            // console.log('is for second argument')
            paginated = [...paginated, arr[apl]]
            startingIndex++
            itemcount++
        }
    }
    return paginated
}