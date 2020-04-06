import React, { useEffect } from "react";
import { useState } from "react";
import fetch from "isomorphic-fetch";
import CovidLabsList from "./covidlabslist";
import SearchBar from "./Searchbar";
import "./App.css";

const Covid19 = () => {
    const [labs, setlabs] = useState([]);
    const [empty, setempty] = useState(false);
    const submitfn = (state, labType) => {
        let url =
            state === "India"
                ? "http://dev.rxhealthline.com:8020/api/pathology/?tag=covid19&limit=100"
                : `http://dev.rxhealthline.com:8020/api/pathology/?state_ut=${state}&lab_type=${labType}&tag=covid19&limit=100`;
        fetch(url)
            .then((res) => res.json())
            .then((result) => {
                if (result.response.length > 0) {
                    setempty(false);
                    setlabs(result.response);
                } else {
                    setempty(true);
                }
            });
    };
    useEffect(() => {
        fetch(`http://api.rxhealthline.com/api/pathology/?tag=covid19&limit=100`)
            .then((res) => res.json())
            .then((result) => {
                if (result.response.length > 0) {
                    setempty(false);
                    setlabs(result.response);
                } else {
                    setempty(true);
                }
            });
    }, []);
    return (
        <div>
            <div className="typoregular" style={{ padding: "0 5%" }}>
                Search for labs in your state
            </div>
            <SearchBar submitfn={submitfn} />
            {empty ? (
                <div style={{ fontSize: "1.5em", padding: "0 5%" }}>No labs found</div>
            ) : labs && labs.length >= 0 ? (
                <CovidLabsList data={labs} />
            ) : null}
        </div>
    );
};
export default Covid19;
