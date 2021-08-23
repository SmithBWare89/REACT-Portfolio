import React from 'react';
import { Grid, Image, Container, Message } from 'semantic-ui-react';
import homepageImage from '../../assets/images/homepage.jpg';
import profileImage from '../../assets/images/profile.jpg'

export default function AboutMe() {
    const messageStyle = {
        color: '#f7f7ff !important', 
        fontSize: '1.5em !important'
    }
    return (
        <>
        <Container>
            <Grid>
                <Grid.Column width={7}>
                    <Image src={profileImage} rounded alt='A photo of me standing on a walking bridge with the Big Four Bridge in Louisville, Kentucky behind me.'/>
                </Grid.Column>
                <Grid.Column width={9}>
                    <Message style={messageStyle}>
                        <p>Hey!</p>
                        <p>My name is Stephon Smith and I'm a student at the University of Central Florida in their Coding Bootcamp program.
                        I can remember coding websites made out of pure HTML when I was as young as 11 years old. I was (and still am) obsessed with
                        technology and building websites on a popular platform like Geocities was a favorite past time of mine.</p>

                        <p>Like a tale as old as time; I grew older and less involved with the tech community as other interests took their hold.
                        Interests that took me to London, England for an entire school year to study abroad and learn how to properly become a professional wrestler.
                        Don't rub your eyes or think you saw that incorrectly. I <em ><span style={{color: '#fc5130', fontWeight: '700'}}>was</span></em> a professional wrestler.
                        For 10+ years I've traveled traveled the continental United States and abroad in spandex, patent leather boots, and stripes in my bid to work where I do now -- as a
                        professional referee for World Wrestling Entertainment.</p>
                        <p>How does that fit into my developer story? Preparation. My journey has prepared me by teaching me how to be flexible, have an eye for detail, and how to
                        push myself to develop the best experience for not only you but for the paying customer. I feel that a combination of my skills learned throughout my journey in
                        wrestling and those learned throughout my bootcamp experience will make you and me the PERFECT tag team.</p>
                        <p>So what do you say partner? Tag me in?</p>
                    </Message>
                </Grid.Column>
            </Grid>
        </Container>
        <Container style={{marginTop: '10px'}}>
            <Image src={homepageImage} rounded alt='A photo of me on pay per view refereeing a professional wrestling match.'/>
        </Container>
        </>
    )
}