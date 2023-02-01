import { ClickAwayListener, Popper, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";

type Option = {
    label: string;
    value: string;
};

interface CustomSelectProps {
    selectName: string;
    options: Array<Option>;
    value: string | number | null;
    setValue: Function;
    searchable?: boolean;
}

const CustomSelect = ({
    selectName,
    options,
    value,
    setValue,
    searchable,
}: CustomSelectProps) => {
    const [open, setOpen] = useState<boolean>(false);
    const [anchorEl, setAnchorEl] = useState<any>(null);

    const [results, setResults] = useState<Array<Option>>(options || []);
    const [searchString, setSearchString] = useState<string>("");

    //user clicks of the select component
    const handleClick = (e: React.MouseEvent) => {
        setSearchString("");
        setResults(options || []);
        setAnchorEl(e.currentTarget);
        setOpen(!open);
    };

    //function to search the list of options
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchString(e.target.value);
        setResults(
            options.filter((option) =>
                option.label
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
            )
        );
    };

    //user selects an option
    const handleSelect = (option: Option) => {
        setOpen(false);
        setValue(option.value);
    };

    //get the first value of the select and make it default
    const getFirstValue = () => {
        let selectedOption = options.find((option) => option.value === value);
        if (selectedOption) {
            return selectedOption.label;
        } else return "Loading...";
    };

    const isSelectActive = () => {
        return value || value === 0;
    };

    useEffect(() => {
        setResults(options);
    }, [options]);

    return (
        <>
            <div
                className="flex 
                        mx-auto
                        align-center 
                        p-[10px] w-fit 
                        bg-slate-700 
                        text-white 
                        rounded-md 
                        mt-[10px]
                        h-[40px]
                        cursor-pointer
                "
                onClick={handleClick}
            >
                {isSelectActive() ? (
                    <p className="flex ml-[15px] flex-1">{getFirstValue()}</p>
                ) : (
                    <p className="flex-1">{selectName}</p>
                )}
            </div>
            <Popper open={open} anchorEl={anchorEl} style={{ zIndex: 1000 }}>
                <ClickAwayListener onClickAway={() => setOpen(false)}>
                    <div className="rounded-md flex flex-col bg-slate-600 text-white mt-[5px] max-w-[600px]">
                        {searchable && options.length > 0 && (
                            <div className="rounded-md border-b-[1px] bg-slate-700 text-white align-center flex max-w-[600px] min-w-[250px] m-0">
                                <input
                                    className="rounded-md p-[15px] border-none h-[40px] text-[18px] bg-slate-700 text-white p-l-[15px] outline-none flex flex-1"
                                    placeholder="Search"
                                    value={searchString}
                                    onChange={handleSearch}
                                />
                            </div>
                        )}
                        <div className="flex-col flex max-h-[300px] overflow-y-scroll">
                            {results.length > 0 &&
                                results.map((option, index) => (
                                    <div
                                        onClick={() => handleSelect(option)}
                                        key={index}
                                        className="min-w-[150px] cursor-pointer hover:bg-slate-500"
                                    >
                                        <p className="m-[10px]">
                                            {option.label}
                                        </p>
                                    </div>
                                ))}
                        </div>
                    </div>
                </ClickAwayListener>
            </Popper>
        </>
    );
};

export default CustomSelect;
