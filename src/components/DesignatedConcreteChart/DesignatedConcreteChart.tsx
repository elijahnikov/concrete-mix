import { useEffect, useState } from "react";
import { fetchConcreteDetails } from "../../utils/fetchConcreteDetails";

type SelectedConcreteDataType = {
    type: string;
    cementContents: Array<{
        id: number;
        label: string;
        value: number;
    }>;
};

interface DesignatedConcreteChartProps {
    selectedConcrete: string;
}

const DesignatedConcreteChart = ({
    selectedConcrete,
}: DesignatedConcreteChartProps) => {
    const [selectedConcreteData, setSelectedConcreteData] =
        useState<SelectedConcreteDataType>({
            type: "",
            cementContents: [
                {
                    id: 0,
                    label: "",
                    value: 0,
                },
            ],
        });

    //run fetch function once selected concrete has been modified
    useEffect(() => {
        const fetchData = async () => {
            if (selectedConcrete) {
                setSelectedConcreteData(
                    await fetchConcreteDetails(selectedConcrete)
                );
            }
        };
        fetchData();
    }, [selectedConcrete]);

    return (
        <div className="border-[1px] p-5 rounded-md">
            {selectedConcrete ? (
                <>
                    <p className="mb-[10px]">Selected Concrete Chart</p>
                    <div className="flex w-[100%]">
                        <p className="flex-0 ml-[5px] float-left">Size</p>
                        <p className="flex-1 ml-[100px] float-right">
                            Min. cement content (kg/m3)
                        </p>
                    </div>
                    <div className="mt-[5px] min-4-[400px]">
                        {selectedConcreteData &&
                            selectedConcreteData.cementContents.map(
                                (concreteData) => (
                                    <div key={concreteData.id} className="flex">
                                        <div className="w-[50px]">
                                            {concreteData.label}
                                        </div>
                                        <div className="min-w-[400px]">
                                            <div
                                                style={{
                                                    width: `${concreteData.value}px`,
                                                }}
                                                className={`rounded-md h-[10px] m-[10px] bg-blue-400`}
                                            ></div>
                                        </div>
                                        <div className="w-[50px] float-right ">
                                            {concreteData.value}
                                        </div>
                                    </div>
                                )
                            )}
                    </div>
                </>
            ) : (
                <p>Please select a Designated Concrete Type</p>
            )}
        </div>
    );
};

export default DesignatedConcreteChart;
