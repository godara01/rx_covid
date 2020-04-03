import React from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
const LabsList = props => {
    const labs = props.data;

    const styles = {
        centerimg: {
            display: "inline-flex",
            justifyContent: "center"
        },
        star: {
            color: "red",
            display: "inline-flex"
        },
        inline: {
            display: "inline-flex"
        },
        buttonsdiv: {
            display: "inline-grid",
            alignContent: "end"
        },
        imgpadd: {
            margin: "0 5px",
            width: "20px",
            alignSelf: "baseline",
            paddingTop: "8px"
        },
        btns: {
            padding: "10px",
            margin: "10px 0"
        }
    };
    return (
        <Container className="hospital" id="labslist" fluid={true}>
            {labs.map((lab, index) => {
                // console.log(cost=== "true" , lab.cost!=null);
                return (
                    <Row key={index} className={"shadealternate"} style={{ padding: "20px 6%" }}>
                        <Col>
                            <div className={"hospitaldetails"}>
                                <h2 className="typoregular">{lab.name}</h2>

                                <div className="typothin">{lab.location.address || "No address available"}</div>
                                <span style={styles.inline}>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        // href={`https://www.google.com/maps/@${lab.location.coordinates[1]},${lab.location.coordinates[0]},15z`}
                                        href={`https://www.google.com/maps/search/?api=1&query=${lab.location.coordinates[1]},${lab.location.coordinates[0]}`}
                                    >
                                        View on map
                                    </a>
                                </span>
                            </div>
                        </Col>
                    </Row>
                );
            })}
        </Container>
    );
};

export default LabsList;
