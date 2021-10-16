const index = require("./index")
// @ponicode
describe("index", () => {
    test("0", () => {
        let callFunction = () => {
            index(["Jean-Philippe", "George", "Michael"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index(["Michael", "George", "Jean-Philippe"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index(["Michael", "George", "Pierre Edouard"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index(["Jean-Philippe", "Michael", "Pierre Edouard"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index(["George", "Pierre Edouard", "Pierre Edouard"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
