import React, {useState} from 'react';
import { Grid, Image, Container, Header } from 'semantic-ui-react';
import { Modal, Button } from 'react-bootstrap';
import Magnifier from "react-magnifier";
import resumeImage from '../../assets/images/resume.png';
import resumeImage2 from '../../assets/images/resume2.png';
import resumeImage3 from '../../assets/images/resume3.png';

export default function Resume() {
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState('');
    const handleOpen = (evt) => {      
        if (evt.target.name === 'resumeImage') {
            setImage(resumeImage)
        } else if (evt.target.name === 'resumeImage2') {
            setImage(resumeImage2)
        } else if (evt.target.name === 'resumeImage3') {
            setImage(resumeImage3)
        }

        return setOpen(true);
    }
    const handleClose = () => setOpen(false);

    return (
        <section>
            <Container>
                <Header className='resume-header'>Click to Magnify</Header>
                <Grid columns={3} stackable={true}>
                    <Grid.Column>
                        <Image className="resume-image" name='resumeImage' src={resumeImage} onClick={handleOpen} centered={true} alt='A photo copy of my work resume.'/>
                    </Grid.Column>
                    <Grid.Column>
                        <Image className="resume-image" name='resumeImage2' src={resumeImage2} onClick={handleOpen} centered={true} alt='A photo copy of my work resume.'/>
                    </Grid.Column>
                    <Grid.Column>
                        <Image className="resume-image" name='resumeImage3' src={resumeImage3} onClick={handleOpen} centered={true} alt='A photo copy of my work resume.'/>
                    </Grid.Column>
                </Grid>
            </Container>
        <>
            <Modal show={open} onHide={handleClose} centered size="small">
                <Modal.Header closeButton>
                    <Modal.Title>
                        My Resume
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Magnifier 
                        src={image}
                        zoomFactor={0.4}
                        mgShape='square'
                        mgHeight={500}
                        mgWidth={600}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button 
                        variant="primary" 
                        onClick={handleClose}
                    >
                        <a 
                                href={'https://docs.google.com/document/d/12WD5M30YpEIaFR_-V7CxwfBqvGT3XXTd/edit?usp=sharing&ouid=112589527590195417361&rtpof=true&sd=true'}
                                download="Stephon Smith Resume"
                                style={{ color: '#f7f7ff' }}
                                name='resume'
                        >
                            Save Resume
                        </a>
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
        </section>
    )
}