import React, {useState} from 'react';
import { Grid, Image, Container } from 'semantic-ui-react';
import { Modal, Button } from 'react-bootstrap';
import Magnifier from "react-magnifier";
import resumeImage1 from '../../assets/images/resume-1.png';
import resumeImage2 from '../../assets/images/resume-2.png';

export default function Resume() {
    const h1Style = {
        textAlign: 'center',
        color: '#f7f7ff',
        fontSize: '4em'
    }

    const [open, setOpen] = useState(false);
    const [image, setImage] = useState('');
    const handleOpen = (evt) => {
        evt.target.name === 'resume-1'
            ? setImage(resumeImage1)
            : setImage(resumeImage2);

        return setOpen(true);
    }
    const handleClose = () => setOpen(false);

    return (
        <section>
            <Container>
                <h1 style={h1Style}>Click to Magnify</h1>
                <Grid columns={2}>
                    <Grid.Column>
                        <Image name='resume-1' src={resumeImage1} onClick={handleOpen}/>
                    </Grid.Column>
                    <Grid.Column>
                        <Image name ='resume-2' src={resumeImage2} onClick={handleOpen}/>
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
                        zoomFactor={0.8}
                        mgShape='square'
                        mgHeight={300}
                        mgWidth={400}
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
                                href={require('../../assets/files/resume.pdf')}
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