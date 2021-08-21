import React from 'react';
import {Container, Grid} from 'semantic-ui-react'

export default function Footer() {
    return(
        <footer>
                <div id="footer-container">
                    <Container id="footer-container">
                        <Grid columns={3}>
                            <Grid.Column>
                                <a href="https://www.github.com/SmithBWare89">
                                    <i className="fab fa-github fa-3x" id="github"></i>
                                </a>
                            </Grid.Column>
                            <Grid.Column>
                                <a href="https://stackoverflow.com/users/13443220/smithbware89">
                                    <i className="fab fa-stack-overflow fa-3x" id="stack-overflow"></i>
                                </a>
                            </Grid.Column>
                            <Grid.Column>
                                <a href="https://www.linkedin.com/in/stephonsmith89/">
                                    <i className="fab fa-linkedin fa-3x" id="linked-in"></i>
                                </a>
                            </Grid.Column>
                        </Grid>
                    </Container>
                </div>
        </footer>
    )
}