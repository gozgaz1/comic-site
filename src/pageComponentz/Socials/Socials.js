import React from 'react';
import * as FaIcons from "react-icons/fa";
import '../../Styling/SocialLink.css';

export default function Socials() {
    return (
        <div className='container'>
            <h1>Socials</h1>
            <div className="link-grid">
                <table className="link-table">
                    <tr>
                        <td><a href="https://www.twitter.com/gozgaz1" target="_blank" rel="noopener noreferrer"><FaIcons.FaTwitter /></a></td>
                    </tr>
                    <tr>
                        <td><a href="https://www.twitch.tv/gozgaz01" target="_blank" rel="noopener noreferrer"><FaIcons.FaTwitch /></a></td>
                    </tr>
                    <tr>
                        <td><a href="https://www.instagram.com/gozgaz01" target="_blank" rel="noopener noreferrer"><FaIcons.FaInstagram /></a></td>
                    </tr>
                    <tr>
                        <td><a href="https://www.artstation.com/gozgaz1" target="_blank" rel="noopener noreferrer"><FaIcons.FaArtstation /></a></td>
                    </tr>
                    <tr>
                        <td><a href="https://www.deviantart.com/gozgaz1" target="_blank" rel="noopener noreferrer"><FaIcons.FaDeviantart /></a></td>
                    </tr>
                </table>
            </div>            
        </div>
    )
}
