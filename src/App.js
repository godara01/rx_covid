import React, { useEffect, useState, useRef } from "react";
import logo from "./logo_3x.png";
import "./App.css";
import fetch from "isomorphic-fetch";
import Covid19 from "./covid19";
import { Container, Row, Col } from "react-bootstrap";

function App() {
    const ref = useRef(null);
    const [indiadata, setindiadata] = useState([]);
    const [data, setdata] = useState([]);
    const [dims, setdims] = useState([500, 500]);
    useEffect(() => {
        fetch("https://api.covid19india.org/data.json")
            .then(resp => resp.json())
            .then(res => res.statewise)
            .then(result => {
                setindiadata(result[0]);
                setdata(result.slice(1, result.length));
            });
    }, []);
    useEffect(() => {
        const width = ref.current ? ref.current.offsetWidth : 0;
        const height = ref.current ? ref.current.offsetHeight : 0;
        console.log("width", width);
        setdims([width, height]);
    }, [ref.current]);
    return (
        <Container className="App">
            <Row style={{ padding: "2% 0" }}>
                <Col style={{ padding: "0 5%" }}>
                    <img src={logo} width="55px" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="typoregular">COVID-19 INDIA</div>
                    <Row id="allindiadata">
                        <Col style={{ backgroundColor: "#d9ceed" }} className={"indiacol"}>
                            <div className="typothin">{indiadata.confirmed}</div>
                            <div className="typothin">Total Cases</div>
                        </Col>
                        <Col style={{ backgroundColor: "#bfebff" }} className={"indiacol"}>
                            <div className="typothin">{indiadata.active}</div>
                            <div className="typothin">Active</div>
                        </Col>
                        <Col style={{ backgroundColor: "#b9f6ca" }} className={"indiacol"}>
                            <div className="typothin">{indiadata.recovered}</div>
                            <div className="typothin">Recovered</div>
                        </Col>
                        <Col style={{ backgroundColor: "#ffc4bf" }} className={"indiacol"}>
                            <div className="typothin">{indiadata.deaths}</div> <div className="typothin">Deaths</div>
                        </Col>
                    </Row>
                    <Row id="statetable">
                        <table>
                            <thead>
                                <tr>
                                    <th>State/UT</th>
                                    <th>Confirmed</th>
                                    <th>Active</th>
                                    <th>Recovered</th>
                                    <th>Deceased</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <th>{item.state}</th>
                                            <th>{item.confirmed}</th>
                                            <th>{item.active}</th>
                                            <th>{item.recovered}</th>
                                            <th>{item.deaths}</th>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </Row>
                </Col>
                <Col style={{ padding: "0 5%" }}>
                    <Covid19 />
                </Col>
            </Row>
            <Row style={{ paddingTop: "5%" }}>
                <Col ref={ref} style={{ padding: "0 5%" }}>
                    <div className="typobold">What is coronavirus ?</div>
                    <iframe
                        width={dims[0] * 0.8}
                        height={dims[0] * 0.5}
                        src="https://www.youtube.com/embed/BtN-goy9VOY"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>

                    <div className="typothin">
                        Video Credits:{" "}
                        <a href="https://www.youtube.com/channel/UCsXVk37bltHxD1rDPwtNM8Q">
                            Kurzgesagt – In a Nutshell
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
