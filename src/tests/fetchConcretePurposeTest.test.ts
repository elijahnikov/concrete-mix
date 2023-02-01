import { fetchConcretePurpose } from "../utils/fetchConcretePurpose";

describe("When the concrete purpose api is called", () => {
    let concretePurposeData: any[];

    beforeEach(async () => {
        concretePurposeData = await fetchConcretePurpose();
    });

    it("The correct concrete purpose data should be returned", () => {
        expect(concretePurposeData[0]).toEqual({
            GeneralPurpose: "Building structures",
            DetailedPurpose:
                "Inside enclosed buildings except poorly ventilated rooms with high humidity (XC1)",
            NominalCover: 15,
            DesignatedConcrete: "RC20/25",
        });
    });
});
