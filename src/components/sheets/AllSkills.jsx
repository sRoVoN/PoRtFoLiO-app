import {Skills} from './';
import React, { useEffect, useState } from 'react';
import { devSkills } from '../../constants/SkillDetails';


const AllSkills = () => {
    const {htmlSkill, cssSkill,jsSkill, reactSkill, nodeSkill, gitSkill} = devSkills;
    const [HTML, setHTML] = useState(0);
    const [CSS, setCSS] = useState(0);
    const [JS, setJS] = useState(0);
    const [REACT, setREACT] = useState(0);
    const [NODE, setNODE] = useState(0);
    const [GIT, setGIT] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setHTML((oldProgress) => {
                const diff = Math.random()* 10;
                return Math.min(oldProgress + diff, 75)
            });
            setCSS((oldProgress) => {
                const diff = Math.random()* 10;
                return Math.min(oldProgress + diff, 50)
            });
            setJS((oldProgress) => {
                const diff = Math.random()* 10;
                return Math.min(oldProgress + diff, 35)
            });
            setREACT((oldProgress) => {
                const diff = Math.random()* 10;
                return Math.min(oldProgress + diff, 45)
            });
            setNODE((oldProgress) => {
                const diff = Math.random()* 10;
                return Math.min(oldProgress + diff, 20)
            });
            setGIT((oldProgress) => {
                const diff = Math.random()* 10;
                return Math.min(oldProgress + diff, 25)
            });

        }, 500);
        return() => {
            clearInterval(timer);
        };

    },[]);

    return(
        <>
                <Skills 
                    name={htmlSkill.name}
                    icon={htmlSkill.icon}
                    color={htmlSkill.color}
                    value={HTML}
                />
                <Skills 
                    name={cssSkill.name}
                    icon={cssSkill.icon}
                    color={cssSkill.color}
                    value={CSS}
               />
                <Skills 
                     name={jsSkill.name}
                     icon={jsSkill.icon}
                     color={jsSkill.color}
                     value={JS}
                />
                <Skills 
                      name={reactSkill.name}
                      icon={reactSkill.icon}
                      color={reactSkill.color}
                      value={REACT}
                />
                 <Skills 
                       name={nodeSkill.name}
                       icon={nodeSkill.icon}
                       color={nodeSkill.color}
                       value={NODE}
                />
                <Skills 
                        name={gitSkill.name}
                        icon={gitSkill.icon}
                        color={gitSkill.color}
                        value={GIT}
                />
        </>
    )
};
export default AllSkills;