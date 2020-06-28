function allLongestStrings(strings) {
  
    let orderedStrings = strings.sort( (a,b) => {
       return a.length - b.length;
    })

    let newStrings = [];

    strings.forEach( (str) => {
        if(str.length == orderedStrings[orderedStrings.length - 1].length )
            newStrings.push(str);
        
    })
    return newStrings;

}
// another solution
/*function allLongestStrings(strings) {
    // find the longest length
    let longestLength = 0;
    const longestWords = [];

    for(let word of strings){
        longestLength = word.length > longestLength ? word.length : longestLength;
    }

    for(let word of strings){
        if(word.length === longestLength){
            longestWords.push;
        }
    }

    return longestWords;

}*/





/**
* Test Suite 
*/
describe('allLongestStrings()', () => {
    it('returns all longest strings', () => {
        // arrange
        const strings = ["aba", "aa", "ad", "vcd", "aba", "a"];
        
        // act
        const result = allLongestStrings(strings);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual(["aba", "vcd", "aba"]);
    });
});