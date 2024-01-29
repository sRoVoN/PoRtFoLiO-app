import { CoffeeRounded, DataObjectRounded, DomainVerificationRounded } from '@mui/icons-material';
import React from 'react';
import  userAvatar from '../assets/user.png';

export const devInfo = [
    {
        tooltipTitle: 'The count of cup of Teas',
        icon: <CoffeeRounded />,
        total: 300,
        color:'lightgreen '
    },
    {
        tooltipTitle: 'The count of my projects',
        icon: <DataObjectRounded />,
        total: 20,
        color: 'lightskyblue'
    },
    {
        tooltipTitle:' The count of my finished project',
        icon: <DomainVerificationRounded />,
        total: 4,
        color: 'palevioletred'
    }
]
export const devEdu = [
    {
        year:'2005-2008',
        cert: 'Bachelor',
        major: 'History of Religons',
        university: 'Al Zahra university'
    },
    {
        year:'2010-2013',
        cert: 'Master',
        major: 'History of Religons',
        university: 'Semnan university'
    },
    {
        year:'2016-2018',
        cert: 'Master',
        major: 'Psychology',
        university: 'Medical Science Azad university'
    },

];
export const devCareer = [
    {
        year:'2018-2020',
        as:'Frontend Developer',
        office:'blah blah'
    },
    {
        year:'2020-2024',
        as:'Frontend Developer',
        office:'blah blah'
    }
];

export const comments = [
    {
        fullname:"Sarah winston",
        agree:true,
        avatar: userAvatar,
        comment:`Lorem ipsum dolor sit, 
        amet consectetur adipisicing elit. 
        Illo hic veniam earum laboriosam reiciendis cumque eveniet
         fugiat distinctio mollitia nostrum.`
    },
    {
        fullname:"Mark Puper",
        agree:false,
        avatar: userAvatar,
        comment:`Lorem ipsum dolor sit, 
        amet consectetur adipisicing elit. 
        Illo hic veniam earum laboriosam reiciendis cumque eveniet
         fugiat distinctio mollitia nostrum.`
    },
    {
        fullname:"jack Oldman",
        agree:false,
        avatar: userAvatar,
        comment:`Lorem ipsum dolor sit, 
        amet consectetur adipisicing elit. 
        Illo hic veniam earum laboriosam reiciendis cumque eveniet
         fugiat distinctio mollitia nostrum.`
    },
    {
        fullname:"Samantha Smith",
        agree:true,
        avatar: userAvatar,
        comment:`Lorem ipsum dolor sit, 
        amet consectetur adipisicing elit. 
        Illo hic veniam earum laboriosam reiciendis cumque eveniet
         fugiat distinctio mollitia nostrum.`
    },
];