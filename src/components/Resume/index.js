import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

export default function Resume() {
    return (
        <Grid celled>   
            <Grid.Row>
            <Grid.Column width={3}>
                <Image src='/images/wireframe/image.png' />
            </Grid.Column>
            <Grid.Column width={13}>
                <Image src='/images/wireframe/centered-paragraph.png' />
            </Grid.Column>
            </Grid.Row>
        
            <Grid.Row>
            <Grid.Column width={3}>
                <Image src='/images/wireframe/image.png' />
            </Grid.Column>
            <Grid.Column width={10}>
                <Image src='/images/wireframe/paragraph.png' />
            </Grid.Column>
            <Grid.Column width={3}>
                <Image src='/images/wireframe/image.png' />
            </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}