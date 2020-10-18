import React from 'react';
import { Image, Container } from 'semantic-ui-react';
import homepageImage from '../../images/homepage.jpg';

export default function Home() {
    return (
        <Container>
            <Image src={homepageImage} rounded />
        </Container>
    )
}