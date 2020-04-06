import React, { useEffect, useState, useRef } from "react";
import logo from "./logo_3x.png";
import "./App.css";
import fetch from "isomorphic-fetch";
import Covid19 from "./covid19";
import { Container, Row, Col } from "react-bootstrap";
import Contact from "./contact";
import Helpline from "./helpline";
function App() {
    const ref = useRef(null);
    const [indiadata, setindiadata] = useState([]);
    const [data, setdata] = useState([]);
    const [dims, setdims] = useState([500, 500]);
    const [ismobile, setmobile] = useState(false);
    useEffect(() => {
        fetch("https://api.covid19india.org/data.json")
            .then((resp) => resp.json())
            .then((res) => res.statewise)
            .then((result) => {
                setindiadata(result[0]);
                setdata(result.slice(1, result.length));
            });
    }, []);
    useEffect(() => {
        const width = ref.current ? ref.current.offsetWidth : 0;
        const height = ref.current ? ref.current.offsetHeight : 0;
        if (width < 450) {
            setmobile(true);
        }
        console.log("width", width);
        setdims([width, height]);
    }, []);

    return (
        <Container ref={ref} className="App">
            <Row as="section" id="home" style={{ padding: "2% 0%" }}>
                <Col
                    md={1}
                    xs={2}
                    as="a"
                    href="http://covid19.rxhealthline.com"
                    style={{ paddingLeft: "15px", textAlign: "center" }}
                >
                    <img alt="Rx Healthline" src={logo} width="50em" />

                    <div className="typothin" style={{ fontSize: "12px" }}>
                        RxHealthline
                    </div>
                </Col>
                <Col md={6} xs={10}>
                    <Row style={{ height: "100%", alignContent: "center" }}>
                        <Col
                            as="a"
                            href="https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="typothin"
                            style={{ textAlign: "left", padding: "0 10px", cursor: "pointer" }}
                        >
                            Arogya Setu App
                        </Col>
                        <Col
                            as="a"
                            href="#links"
                            className="typothin"
                            style={{ textAlign: "left", padding: "0 10px", cursor: "pointer" }}
                        >
                            Helpful links
                        </Col>
                        <Col
                            as="a"
                            href="#helpline"
                            className="typothin"
                            style={{ textAlign: "left", padding: "0 10px", cursor: "pointer" }}
                        >
                            State Helplines
                        </Col>
                    </Row>
                </Col>
                <Col md={4} />
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
                                    <th>{ismobile ? "CNFMD" : "Confirmed"}</th>
                                    <th>{ismobile ? "ACTV" : "Active"}</th>
                                    <th>{ismobile ? "RCVRD" : "Recovered"}</th>
                                    <th>{ismobile ? "DCSD" : "Deceased"}</th>
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
            <Row as="section" id="whatiscorona" style={{ paddingTop: "5%" }}>
                <Col md={6} sm={12}>
                    <div className="typobold">What is coronavirus ?</div>
                    <div id="iframediv">
                        <iframe
                            title="What is coronavirus"
                            width={dims[0] * 0.4}
                            height={dims[0] * 0.3}
                            src="https://www.youtube.com/embed/BtN-goy9VOY"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="typothin">
                        Video Credits:{" "}
                        <a href="https://www.youtube.com/channel/UCsXVk37bltHxD1rDPwtNM8Q">
                            Kurzgesagt – In a Nutshell
                        </a>
                    </div>
                </Col>
                <Col>
                    <Contact />
                </Col>
            </Row>
            <Row as="section" id="links" style={{ paddingTop: "5%" }}>
                <Col>
                    <Row className="typobold">Helpful Links</Row>
                    <Row>
                        <Col sm={2} as="a" href="https://www.mohfw.gov.in/#site-awareness" className="linkscontainer">
                            <div className="typomedium">MOHFW</div>
                            <div className="typothin">Do's and Don'ts</div>
                        </Col>
                        <Col
                            sm={2}
                            as="a"
                            href="https://covid.icmr.org.in/index.php/testing-facilities"
                            className="linkscontainer"
                        >
                            <div className="typomedium">ICMR</div>
                            <div className="typothin">Testing facilities across India</div>
                        </Col>
                        <Col sm={2} as="a" href="http://myhealthtech.org/" className="linkscontainer">
                            <div className="typomedium">COVID19 checker</div>
                            <div className="typothin">Self Assessment</div>
                        </Col>
                        <Col
                            sm={2}
                            as="a"
                            href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters"
                            className="linkscontainer"
                        >
                            <div className="typomedium">WHO</div>
                            <div className="typothin">Myth Busters</div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row as="section" id="helpline" style={{ paddingTop: "5%" }}>
                <Col>
                    <Row className="typobold">Helpline Numbers</Row>
                    <Row>
                        <Col>
                            <div style={{ fontWeight: "bold", padding: "20px 0" }}>
                                Central Helpline Number for corona-virus: - +91-11-23978046
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th style={{ fontWeight: "bold" }}>State/UT</th>
                                        <th style={{ fontWeight: "bold" }}>Helpline Number</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Helpline.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <th>{item.name}</th>
                                                <th>{item.phone}</th>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
