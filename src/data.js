import React from 'react';
import lissajousCover from '../src/img/lissajous-cover.png';
import lissajous1 from '../src/img/lissajous-1.png';
import lissajous2 from '../src/img/lissajous-2.png';
import stargazingCover from '../src/img/stargazing-cover.png';
import stargazing1 from '../src/img/stargazing-1.png';
import stargazing2 from '../src/img/stargazing-2.png';
import pacmanCover from '../src/img/pacman-cover.png';
import pacman1 from '../src/img/pacman-1.png';
import pacman2 from '../src/img/pacman-2.png';
import depthCover from '../src/img/glassgrid-cover.png';
import depth1 from '../src/img/glassgrid-1.png';
import depth2 from '../src/img/glassgrid-2.png';

const TimelineData = [
    {
        title: 'STARGAZING',
        subtitle: 'CREATIVE CODING',
        image: stargazingCover,
        year: '2023',
        quarter: 'WINTER',
        alttxt: 'Grainy image of 2 people standing on a cloud amid a sky full of stars'
    },
    {
        title: 'LISSAJOUS ORBITS',
        subtitle: 'CREATIVE CODING',
        image: lissajousCover,
        year: '2023',
        quarter: 'WINTER',
        alttxt: '3 dimensional plane full of lissajous curves and gridlines'
    },
    {
        title: 'DEPTH',
        subtitle: 'CREATIVE CODING',
        image: depthCover,
        year: '2023',
        quarter: 'WINTER',
        alttxt: 'Layered grids of boxes with GUI'
    },
    {
        title: 'GHOST SLAYER',
        subtitle: 'GAME DESIGN',
        image: pacmanCover,
        year: '2022',
        quarter: 'FALL',
        alttxt: 'Wooden board game with removable pieces and pacman characters'
    }

];

export const ProjectDetails = {
    'LISSAJOUS ORBITS': {
        'cover': lissajousCover,
        'intro': 'After receiving the assignment to develop a project that derives from a traditional algorithm, which primarily trains us to modify source code, I opted to experiment with Lissajous curves in a unique way. Specifically, I aimed to implement them in a 3D environment. Consequently, I created a P5 visualization program capable of drawing Lissajous curves in the 3D space.',
        'for': 'DESMA 171 GENERATIVE ART',
        'timeline': '2023 WINTER',
        'tools': 'P5.JS',
        'instructor': 'CASEY REAS',
        'discipline': 'CREATIVE CODING',
        'link': 'https://editor.p5js.org/katherine9wang/full/m-zWqn8wE',
        'description': 'Some additional snapshots: ',
        'img1': lissajous1,
        'img2': lissajous2
    },
    'STARGAZING': {
        'cover': stargazingCover,
        'intro': 'For this assignment, we were tasked with creating a generative landscape. I immediately thought of all the nights I spent stargazing and decided that I wanted to create a landscape of stars. Thus, I programmatically generated clouds using perlin noise layered them with varying opacities.',
        'for': 'DESMA 171 GENERATIVE ART',
        'timeline': '2023 WINTER',
        'tools': 'P5.JS',
        'instructor': 'CASEY REAS',
        'discipline': 'CREATIVE CODING',
        'link': 'https://editor.p5js.org/katherine9wang/full/d4xQD56po',
        'description': 'Some additional snapshots: ',
        'img1': stargazing1,
        'img2': stargazing2
    },
    'DEPTH': {
        'cover': depthCover,
        'intro': 'In attempting to relearn how to code, I decided to experiment with a project that would employ as many intricacies as possible. Paying homage to Tony Longson, I created a piece that replicated his glass architecture mockups. ',
        'for': 'DESMA 171 GENERATIVE ART',
        'timeline': '2023 WINTER',
        'tools': 'P5.JS',
        'instructor': 'CASEY REAS',
        'discipline': 'CREATIVE CODING',
        'link': 'https://editor.p5js.org/katherine9wang/full/LGZf9awwJ',
        'description': 'Some additional snapshots: ',
        'img1': depth1,
        'img2': depth2
    },
    'GHOST SLAYER': {
        'cover': pacmanCover,
        'intro': '“Ghost Slayer” is an asymmetrical free-for-all board game derived from the classic game Pacman. Ghosts from the four nations (Fire, Water, Earth, and Air) race to collect their respective power tokens—and to prevent opposing ghosts from collecting theirs. When all power tokens are collected for one nation, it is able to unleash the true power of its element and defeat all other nations.',
        'for': 'DESMA 157 GAME DESIGN',
        'timeline': '2022 FALL',
        'tools': 'FIGMA, LASER CUT',
        'instructor': 'EDDO STERN',
        'discipline': 'GAME DESIGN',
        'link': 'https://www.figma.com/file/0Z8gFas542hyWGka90Sp0V/Untitled?node-id=81%3A1721&t=CQqMqSUO41Y6PglF-4',
        'description': 'Some additional snapshots: ',
        'img1': pacman1,
        'img2': pacman2
    }
}

export default TimelineData;
