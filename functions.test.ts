const {shuffleArray} = require('./utils')

const testArr = [1,2,3,4,5]

describe('shuffleArray should', () => {
    test('should return an array', ()=>{
        let returnedItemLength = shuffleArray(testArr).length
        let testArrLength = testArr.length
        expect(returnedItemLength).toEqual(testArrLength)
    })

    it('should be in a different order than original', ()=>{
        let returnedItemArray = shuffleArray(testArr)
        expect(returnedItemArray).not.toEqual(testArr)
    })
})


// test('Title shows up when page loads', async () => {
//     const title = await driver.findElement(By.id('title'))
//     const displayed = await title.isDisplayed()
//     expect(displayed).toBe(true)
// })