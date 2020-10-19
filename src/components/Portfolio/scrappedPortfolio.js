import projects from '../../projects.json';
import React from "react";
import { Card, Container, Image } from 'semantic-ui-react';
const { Meta, Group, Header, Description, Content } = Card;

export default function Portfolio() {
    return (
        <section id="portfolio">
            <Group>
                {
                    projects.map(project => {
                        return <Card>
                            <Image src={require(`../../images/${project.altName}.png`)} />
                            <Content>
                                <Header>{project.header}</Header>
                                <Container>
                                    <Meta>
                                        <p>
                                            {
                                                project.languages.map(language => {
                                                    return `${language}, ` 
                                                })
                                            }
                                        </p>
                                    </Meta>
                                </Container>
                                <Description>
                                    <p className={{marginTop: '5px'}}>
                                        {project.description}
                                    </p>
                                </Description>
                            </Content>
                        </Card>
                    })
                }
            </Group>
        </section>
    )
}