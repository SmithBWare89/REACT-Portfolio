import React, { useState, useEffect } from 'react';
import { Menu, Segment, Transition } from 'semantic-ui-react';

export default function Nav(props) {
    const {
        navLinks,
        setCurrentLink,
        currentLink,
        contactSelected,
        setContactSelected
    } = props;

    const transitions = [
        'jiggle',
        'flash',
        'shake',
        'pulse',
        'tada',
        'bounce'
    ];

    const [menuState, setMenuState] = useState('About Me');
    function handleMenuClick(e, { name }) {
        setMenuState(name);
        setContactSelected(false);
    }

    const [animationState, setAnimationState] = useState({
        animation: transitions[0],
        duration: 700
    });

    const handleAnimation = () => {
        setAnimationState(
            {
                visible: false
            }
        )
    }

    useEffect(() => {
        const transitionSelected = Math.floor(Math.random() * 7)
        setAnimationState({
            animation: transitions[transitionSelected],
            duration: 700,
            visible: true
        })
    },[animationState.visible])

    useEffect(() => {
        document.title = `${currentLink}`
    }, [currentLink])

    return (
    <Segment 
        inverted
        className='segment-style-options'
    >
        <Menu 
            inverted 
            pointing 
            secondary
            className='segment-menu-style'
        >
            {/* Animated Name/Banner */}
            <Menu.Item 
                name='myName'
                className='segment-menu-style'
            >
                <Transition
                    animation={animationState.animation}
                    duration={animationState.duration}
                    visible={animationState.visible}
                >
                    <span onClick={handleAnimation}>Stephon Smith</span>
                </Transition>
            </Menu.Item>
            {/* Map over nav link names and create them */}
            {navLinks.map((link) => {
                return <Menu.Item
                    name={link}
                    active={menuState === link}
                    onClick={handleMenuClick}
                    className={
                        link === 'Contact'
                            ? `${currentLink === link && setContactSelected(true) && 'navActive'}`
                            : `${currentLink === link && !contactSelected && 'navActive'}`
                    }
                    key={link}
                 >
                    <span
                        onClick={() => {
                            setCurrentLink(link);
                        }}
                    >
                        {link}
                    </span>
                </Menu.Item>
            })}
        </Menu>
    </Segment>
    )
}