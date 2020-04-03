import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
const styles = {
    input: {
        height: "4em",
        padding: "20px",
        fontSize: "18px",
        borderRadius: "0",
        border: "none"
    },
    buttondiv: {
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        minHeight: "2.5em",
        // margin: "0 10px",
        height: "100%",
        color: "white",
        fontSize: "1.2em",
        backgroundColor: "#F54746"
    },
    nomargin: {
        margin: "0"
    }
};

const stateOptions = [
    { id: "ALL", name: "India" },
    { id: "AN", name: "Andaman & Nicobar Islands" },
    { id: "AP", name: "Andhra Pradesh" },
    { id: "AR", name: "Arunachal Pradesh" },
    { id: "AS", name: "Assam" },
    { id: "BR", name: "Bihar" },
    { id: "CH", name: "Chandigarh" },
    { id: "CT", name: "Chhattisgarh" },
    { id: "DD", name: "Daman & Diu" },
    { id: "DL", name: "Delhi" },
    { id: "DN", name: "Dadra and Nagar Haveli" },
    { id: "GA", name: "Goa" },
    { id: "GJ", name: "Gujarat" },
    { id: "HR", name: "Haryana" },
    { id: "HP", name: "Himachal Pradesh" },
    { id: "JK", name: "Jammu & Kashmir" },
    { id: "JH", name: "Jharkhand" },
    { id: "KA", name: "Karnataka" },
    { id: "KL", name: "Kerala" },
    { id: "LD", name: "Lakshadweep" },
    { id: "MP", name: "Madhya Pradesh" },
    { id: "MH", name: "Maharashtra" },
    { id: "MN", name: "Manipur" },
    { id: "ML", name: "Meghalaya" },
    { id: "MZ", name: "Mizoram" },
    { id: "NL", name: "Nagaland" },
    { id: "OR", name: "Odisha" },
    { id: "PB", name: "Punjab" },
    { id: "PY", name: "Puducherry" },
    { id: "RJ", name: "Rajasthan" },
    { id: "SK", name: "Sikkim" },
    { id: "TN", name: "Tamil Nadu" },
    { id: "TR", name: "Tripura" },
    { id: "TS", name: "Telangana" },
    { id: "UK", name: "Uttarakhand" },
    { id: "UP", name: "Uttar Pradesh" },
    { id: "WB", name: "West Bengal" }
];
const SearchBar = ({ submitfn }) => {
    const [state, setstate] = useState(stateOptions[0].name);
    const [labType, setlabType] = useState("Government");

    return (
        <Container fluid={true}>
            <Row style={styles.nomargin}>
                <Col>
                    <Form>
                        <Form.Row className="justify-content-center">
                            <Form.Group as={Col} md={5} style={{ marginRight: "10px" }} controlId="formGridState">
                                <Form.Label className="typothin">State</Form.Label>

                                <Form.Control
                                    onChange={e => {
                                        setstate(e.target.value);
                                    }}
                                    style={{ borderRadius: "0", height: "3rem" }}
                                    as="select"
                                >
                                    {/* <option disabled>Select State</option> */}
                                    {stateOptions.map(option => (
                                        <option key={option.name} value={option.name}>
                                            {option.name}
                                        </option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} style={{ marginRight: "10px" }} controlId="formGridState">
                                <Form.Label className="typothin">Lab Type</Form.Label>
                                <Form.Control
                                    onChange={e => {
                                        setlabType(e.target.value);
                                    }}
                                    style={{ borderRadius: "0", height: "3rem" }}
                                    as="select"
                                >
                                    <option value={"Government"}>Government</option>
                                    <option value={"Private"}>Private</option>
                                </Form.Control>
                            </Form.Group>
                            <Col
                                md={3}
                                style={{ alignSelf: "end", marginBottom: "1rem" }}
                                onClick={() => submitfn(state, labType)}
                                className="pointer"
                            >
                                <div style={styles.buttondiv}>
                                    <span>Search</span> &nbsp;
                                </div>
                            </Col>
                        </Form.Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default SearchBar;
