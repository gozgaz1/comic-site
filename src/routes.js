import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GiIcons from 'react-icons/gi';
import Home from './pageComponentz/Home/Home';
import Comic from './pageComponentz/Comic/Comic';
import Faq from './pageComponentz/Faq/Faq';
import Portfolio from './pageComponentz/Portfolio/Portfolio';
import Socials from './pageComponentz/Socials/Socials';
import UnderConstruction from './pageComponentz/UnderConstruction/UnderConstruction';


/* Samples of icons you can get from react-icons */
/* Component import from pages */

export const routes = [
    {
        title: 'Home',
        icon: <AiIcons.AiFillHome />,
        path: '/',
        className: 'sidebar-text',
        avail: 'Y',
        comp: Home,
        key: 'home',
    },
    {
        title: 'Portfolio',
        icon: <GiIcons.GiBookshelf />,
        path: '/portfolio',
        className: 'sidebar-text',
        avail: 'Y',
        comp: Portfolio,
        key: 'portfolio',
    },
    {
        title: 'Comic',
        icon: <GiIcons.GiEvilBook />,
        path: '/comic',
        className: 'sidebar-text',
        avail: 'Y',
        comp: Comic,
        key: 'comic',
    },
    {
        title: 'TBA',
        icon: <IoIcons.IoIosConstruct />,
        path: '/tba',
        className: 'sidebar-text',
        avail: 'N',
        comp: UnderConstruction,
        key: 'TBA1',
    },
    {
        title: 'TBA',
        icon: <IoIcons.IoIosConstruct />,
        path: '/tba',
        className: 'sidebar-text',
        avail: 'N',
        comp: UnderConstruction,
        key: 'TBA2',
    },
    {
        title: 'TBA',
        icon: <IoIcons.IoIosConstruct />,
        path: '/tba',
        className: 'sidebar-text',
        avail: 'N',
        comp: UnderConstruction,
        key: 'TBA3',
    },
    {
        title: 'Socials',
        icon: <AiIcons.AiOutlineLink />,
        path: '/socials',
        className: 'sidebar-text',
        avail: 'Y',
        comp: Socials,
        key: 'socials',
    },
    {
        title: 'FAQ',
        icon: <AiIcons.AiFillQuestionCircle />,
        path: '/faq',
        className: 'sidebar-text',
        avail: 'Y',
        comp: Faq,
        key: 'faq',
    },
]