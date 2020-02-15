import React from "react";
import Carousel from "../components/Carousel";
import { Container, Row, Col } from "../components/Grid";

function Home() {
    return (
        <>
            <Carousel />
            <Container>
                <Row>
                    <Col size="md-12">
                        <h1>Ready to get away?</h1>
                        <p>
                            Not quite?? That makes sense. Trips take a lot of planning.
                            Let GroupAway help.</p>

                        With our app, you and your traveling companions can:
                            <ul><li>Collaborate to plan <strong>when</strong> to go, <strong>where</strong> to go, and the attractions your group members want to visit.</li>
                            <li>Map out and organize all aspects of your upcoming trip.</li>
                            <li>View the group's itinerary.</li>
                            <li>Store all the trip details so your whole group is on the same page.</li>
                            <li>See a countdown to the start of your trip!</li>
                        </ul>
                        <p>Get you group ready to get away with GroupAway!</p>
                        <hr />
                        <h6>If you’re new, press “Register” at the top of this page (it’s free). If you already began organizing a trip, just “Log In” to resume your plans.</h6>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Home;