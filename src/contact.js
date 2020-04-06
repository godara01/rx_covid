import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import fetch from "isomorphic-fetch";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const RX_RED = "#ff1111";
const styles = {
    container: {
        width: "80%",
        margin: "0 auto",
        padding: "50px 0",
    },
    btns: {
        backgroundColor: RX_RED,
        padding: "10px 20px",
        border: "none",
        width: "100%",
        height: "3em",
        fontSize: "24px",
        fontWeight: "bold",
        borderRadius: "2px",
    },
    labels: {
        fontSize: "11px",
        opacity: "0.8",
    },
    subhead: {
        fontSize: "12px",
        opacity: "0.8",
    },
};

function Contact() {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [message, setmessage] = useState("");
    const postContact = async () => {
        const url = "http://api.rxhealthline.com/api/contactus/";

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message,
            }),
        }).then(function (response) {
            console.log(response);
            if (response.status === 200) {
                setname("");
                setemail("");
                setmessage("");
                console.log(response.json());
                const MySwal = withReactContent(Swal);

                MySwal.fire({ title: <p>Contact mail sent </p>, icon: "success" });
            } else {
                console.log(response.json());
                const MySwal = withReactContent(Swal);

                MySwal.fire({ title: <p>Error sending mail</p>, icon: "error" });
            }
        });
        console.log("mail sent successfully");
    };
    return (
        <>
            <h1 className="typobold">Contact Us</h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label style={styles.labels}>Name</Form.Label>
                    <Form.Control
                        // as={TextField}
                        style={{ borderRadius: "1px" }}
                        type="text"
                        placeholder="Full name"
                        onChange={(e) => {
                            setname(e.target.value);
                        }}
                        value={name}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label style={styles.labels}>Email</Form.Label>
                    <Form.Control
                        // as={TextField}
                        style={{ borderRadius: "1px" }}
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setemail(e.target.value)}
                        value={email}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicChecbox">
                    <Form.Label style={styles.labels}>Message</Form.Label>
                    <Form.Control
                        style={{ borderRadius: "1px" }}
                        as="textarea"
                        rows="3"
                        onChange={(e) => setmessage(e.target.value)}
                        value={message}
                    />
                </Form.Group>
                <Button style={styles.btns} onClick={() => postContact()}>
                    Submit
                </Button>
            </Form>
        </>
    );
}

export default Contact;
