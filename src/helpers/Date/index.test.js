import { getMonth } from "./index";

describe("Date helper", () => {
    describe("When getMonth is called", () => {
        it("the function return décembre for 2022-12-01 as date", () => {
            const date = new Date("2022-12-01");
            const month = getMonth(date);
            expect(month).toBe("décembre");
        });
        it("the function return juillet for 2022-07-08 as date", () => {
            const date = new Date("2022-07-08");
            const month = getMonth(date);
            expect(month).toBe("juillet");
        });
    });
})

