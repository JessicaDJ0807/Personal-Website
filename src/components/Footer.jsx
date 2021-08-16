import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
    const bgStyle = { backgroundColor: "#f5f5f5" };

    return (
        <footer style={bgStyle} className="mt-auto py-5 text-center ">
            <Container>
                {props.children}
                <a
                    href="https://github.com/AlbertLin0327/Personal-Website"
                    className="badge badge-light"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i
                        className="fab fa-github"
                        aria-hidden="true"
                        style={{ fontSize: "1.5em" }}
                    >
                        {" "}
                        Albert Lin
                    </i>
                </a>
                <p>
                    <small className="text-muted">
                        Project code is open source. Feel free to fork and make
                        your own version.
                    </small>
                </p>
            </Container>
        </footer>
    );
};

export default Footer;
