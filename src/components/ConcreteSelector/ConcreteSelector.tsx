import {
    FormControl,
    MenuItem,
    Select,
    SelectChangeEvent,
} from "@mui/material";
import { useEffect, useState } from "react";
import { fetchConcretePurpose } from "../../utils/fetchConcretePurpose";
import CustomSelect from "../Common/CustomSelect/CustomSelect";

type ConcretePurposeType = {
    GeneralPurpose: string;
    DetailedPurpose: string;
    NominalCover?: number | null;
    DesignatedConcrete: string;
};

interface ConcreteSelectorProps {
    selectedConcrete: string;
    setSelectedConcrete: React.Dispatch<React.SetStateAction<string>>;
}

const ConcreteSelector = ({
    selectedConcrete,
    setSelectedConcrete,
}: ConcreteSelectorProps) => {
    const [concretePurposeData, setConcretePurposeData] = useState<
        ConcretePurposeType[]
    >([]);

    //function to map the concrete purpose data into an object shape that is valid for the select
    //component
    const mapObject = () => {
        let outputArr: any[] = [];
        if (concretePurposeData) {
            concretePurposeData.map((concrete) => {
                outputArr.push({
                    label:
                        concrete.DesignatedConcrete +
                        " - " +
                        concrete.GeneralPurpose,
                    value: concrete.DesignatedConcrete,
                });
            });
        }
        return outputArr;
    };

    useEffect(() => {
        const fetchData = async () => {
            setConcretePurposeData(await fetchConcretePurpose());
        };
        fetchData();
    }, []);

    return (
        <div className="border-[1px] w-[400px] justify-center mx-auto h-[120px] p-5 rounded-md">
            <p>Designated Concrete Type</p>
            <div
                id="customSelect"
                className="justify-center mx-auto align-center"
            >
                <CustomSelect
                    options={mapObject()}
                    selectName="Concrete Type"
                    value={selectedConcrete}
                    setValue={setSelectedConcrete}
                    searchable
                />
            </div>
        </div>
    );
};

export default ConcreteSelector;
