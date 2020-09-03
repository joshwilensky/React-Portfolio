import React from "react";
import { Card, CardDeck } from 'react-bootstrap'
import '../components/portfolio.css'
const Portfolio = () => (
    <div>
        <h1 >My Portfolio Page</h1>

        {/* Row 1 */}
        <CardDeck>
            <Card border="primary" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <Card.Body>
                    <Card.Title>Eat Da Burger!</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card border="secondary" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://images.pexels.com/photos/544115/pexels-photo-544115.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <Card.Body>
                    <Card.Title>Note Taker</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                </Card.Body>

            </Card>

            <Card border="success" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <Card.Body>
                    <Card.Title>Employee Directory</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                </Card.Body>

            </Card>

            <Card border="success" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://images.pexels.com/photos/235922/pexels-photo-235922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <Card.Body>
                    <Card.Title>Fitness Tracker</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                </Card.Body>

            </Card>
        </CardDeck>

        {/* Row 2 */}
        <CardDeck>
            <Card border="success" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://images.pexels.com/photos/259620/pexels-photo-259620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <Card.Body>
                    <Card.Title>Weather Dashboard</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                </Card.Body>

            </Card>

            <Card border="success" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://images.pexels.com/photos/4475524/pexels-photo-4475524.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <Card.Body>
                    <Card.Title>Progressive Budget</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                </Card.Body>

            </Card>

            <Card border="success" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://images.pexels.com/photos/760720/pexels-photo-760720.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <Card.Body>
                    <Card.Title>Day Planner</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                </Card.Body>

            </Card>

            <Card border="success" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <Card.Body>
                    <Card.Title>The Village App</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                </Card.Body>

            </Card>
        </CardDeck>

        {/* Row 3 */}
        <CardDeck>
            <Card border="success" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://images.pexels.com/photos/3768129/pexels-photo-3768129.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <Card.Body>
                    <Card.Title>Code Quiz</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                </Card.Body>

            </Card>

            <Card border="success" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://images.pexels.com/photos/3184396/pexels-photo-3184396.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <Card.Body>
                    <Card.Title>Employee Management System</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                </Card.Body>

            </Card>

            <Card border="success" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://images.pexels.com/photos/3881247/pexels-photo-3881247.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <Card.Body>
                    <Card.Title>'rona Rover App</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                </Card.Body>

            </Card>

            <Card border="success" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                <Card.Body>
                    <Card.Title>Team Profile Generator</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                </Card.Body>

            </Card>
        </CardDeck>
    </div>
);

export default Portfolio;