import React from 'react';
import '../../App.css';
import { Image } from 'semantic-ui-react';

import bootstrap from '../../assets/images/skills/bootstrap.png';
import css3 from '../../assets/images/skills/css3.png';
import html5 from '../../assets/images/skills/html5.png';
import heroku from '../../assets/images/skills/heroku.png';
import javascript from '../../assets/images/skills/javascript.png';
import mongodb from '../../assets/images/skills/mongodb.png';
import node from '../../assets/images/skills/node.png';
import react from '../../assets/images/skills/react.png';
import jquery from '../../assets/images/skills/jquery.png';
import sql from '../../assets/images/skills/sql.png';

export default function SkillImages() {
    return (
        <div className="skills">
            <Image className="skill-images" size="small" name="html5" src={html5} centered={true} rounded={true} alt="HTML 5 icon"/>
            <Image className="skill-images" size="small" name="css3" src={css3} centered={true} rounded={true} alt="CSS 3 icon"/>
            <Image className="skill-images" size="small" name="javascript" src={javascript} centered={true} rounded={true} alt="JavaScript icon"/>
            <Image className="skill-images" size="small" name="node" src={node} centered={true} rounded={true} alt="Node icon"/>
            <Image className="skill-images" size="small" name="react" src={react} centered={true} rounded={true} alt="React icon"/>
            <Image className="skill-images" size="small" name="mongodb" src={mongodb} centered={true} rounded={true} alt="MongoDB icon"/>
            <Image className="skill-images" size="small" name="heroku" src={heroku} centered={true} rounded={true} alt="Heroku icon"/>
            <Image className="skill-images" size="small" name="sql" src={sql} centered={true} rounded={true} alt="SQL icon"/>
            <Image className="skill-images" size="small" name="jquery" src={jquery} centered={true} rounded={true} alt="Jquery icon"/>
            <Image className="skill-images" size="small" name="bootstrap" src={bootstrap} centered={true} rounded={true} alt="Bootstrap icon"/>
        </div>
    )
}