"use client"

import {Input} from "antd";

function SearchInputs() {

    const {Search} = Input

    return (
        <Search className="search-input" size="large" placeholder="جستو جوی محتوا ..."/>
    );
}

export default SearchInputs;