import { fetchConcreteDetails } from "../utils/fetchConcreteDetails";

describe("When the concrete details api is called", () => {
    let concreteDetailsData: any[];

    beforeEach(async () => {
        concreteDetailsData = await fetchConcreteDetails("RC20/25");
    });

    it("When RC20/25 concrete type is called the correct data should be returned", () => {
        expect(concreteDetailsData).toEqual({
            type: "RC20/25",
            cementContents: [
                { id: 0, label: "10", value: 280 },
                { id: 1, label: "14", value: 260 },
                { id: 2, label: "20", value: 240 },
                { id: 3, label: "≥40", value: 240 },
            ],
        });
    });
});
