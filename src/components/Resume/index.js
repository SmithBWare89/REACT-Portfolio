import React, {useState} from 'react';
import { Grid, Image, Container, Header } from 'semantic-ui-react';
import { Modal, Button } from 'react-bootstrap';
import Magnifier from "react-magnifier";
import resumeImage from '../../assets/images/resume.png';

export default function Resume() {
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState('');
    const handleOpen = (evt) => {
        if (evt.target.name === 'resume') {
            setImage(resumeImage);
        }

        return setOpen(true);
    }
    const handleClose = () => setOpen(false);

    return (
        <section>
            <Container>
                <Header className='resume-header'>Click to Magnify</Header>
                <Grid columns={1}>
                    <Grid.Column>
                        <Image name='resume' src={resumeImage} onClick={handleOpen} centered={true} alt='A photo copy of my work resume.'/>
                    </Grid.Column>
                </Grid>
            </Container>
        <>
            <Modal show={open} onHide={handleClose} centered>
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
                                href={'https://drive.google.com/file/d/1vY8aK_VtbEy2vrUSG6xT9Ey7Q4vlm7Eq/view?usp=sharing'}
                                download="Stephon Smith Resume"
                                style={{ color: '#f7f7ff' }}
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