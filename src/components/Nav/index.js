import React, { useState, useEffect } from 'react';
import { Menu, Segment, Transition } from 'semantic-ui-react';
import '../../App.css'

export default function Nav() {
    const styleOptions = {
        backgroundColor: '#001427',
        color: '#f7f7ff',
        textAlign: 'center'
    };

    const transitions = [
        'jiggle',
        'flash',
        'shake',
        'pulse',
        'tada',
        'bounce'
    ];

    const [menuState, setMenuState] = useState('Home');
    const [animationState, setAnimationState] = useState({
        animation: transitions[0],
        duration: 500,
        visible: true
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
    }, [animationState.visible])

    function handleMenuClick(e, { name }) {
        setMenuState(name);
    }


    return (
    <Segment 
        inverted
        style={styleOptions}
    >
        <Menu 
            inverted 
            pointing 
            secondary
        >
            <Menu.Item name='myName'>
                <Transition
                    animation={animationState.animation}
                    duration={animationState.duration}
                    visible={animationState.visible}
                >
                    <span onClick={handleAnimation}>Stephon Smith</span>
                </Transition>
            </Menu.Item>
            <Menu.Item
                name='Home'
                active={menuState === 'Home'}
                onClick={handleMenuClick}
            >
                Home
            </Menu.Item>
            <Menu.Item
                name='About'
                active={menuState === 'About'}
                onClick={handleMenuClick}
            >
                About
            </Menu.Item>

            <Menu.Item
                name='Portfolio'
                active={menuState === 'Portfolio'}
                onClick={handleMenuClick}
            >
                Portfolio
            </Menu.Item>

            <Menu.Item
                name='contactMe'
                active={menuState === 'contactMe'}
                onClick={handleMenuClick}
                
            >
                Contact Me
            </Menu.Item>
        </Menu>
    </Segment>
    )
}