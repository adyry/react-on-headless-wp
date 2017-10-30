import React from 'react';

import '../scss/Album.css';

export default class Other extends React.Component {

    render() {
        return (
            <div className="Album">
                <h3>Other</h3>
                <h4 >Released:</h4>
                <ul>
                    <li><a href="http://otium.ru/?id=93" className="content__link " target="_blank">ad.r - Rainy does not equal Sunny [OTR40, 2007.10.07]</a></li>
                    <li>KIK - Wcielenia Dwa [2007]</li>
                    <li>KIK - Codzienność [2006]</li>
                </ul>

                <h4 >Unreleased:</h4>
                <ul>
                    <li><a className="content__link">ad.r - Conceptualism [2008] Physical Edition of 2</a></li>
                    <li><a className="content__link">Kik - Muzka i Muzyczki Początek Wstępu [~2005]</a></li>
                    <li><a className="content__link">Kik - Ełkaliptus [~2004] first Album with my own melodies</a></li>
                    <li><a className="content__link">Daa szoł - Orginal [~2002] first attempt to make music (recorded in ejay 2).</a></li>
                </ul>

                <h4 >Productions / Produkcje</h4>
                <ul>
                    <li>PNP - Gracjan Roztocki [2008]</li>
                    <li >Ad.R - Bez przesady feat. Peno [2008]</li>
                    <li >Ad.R - Zaczarowany ołówek feat. AZR [2007]</li>
                    <li >Zaginiona Mike'a Głowa - Rozkurcz [2008</li>
                    <li >Zaginiona Mike'a Głowa - Cała prawda o nas [2008]</li>
                    <li >Zaginiona Mike'a Głowa - Skit [2008]</li>
                </ul>
                <h4 >Scratching &amp; Cuts / Skrecze</h4>
                <ul>
                    <li >NSR feat.Peno+dj ad.r - Znasz Mnie [2008]</li>
                    <li >Peno + Raszu - Pierwszy raz feat. dj ad.r [2008]</li>
                    <li >Kdj - Być tu feat. Peno, dj. ad.r [2008]</li>
                </ul>
                <h4>Interviews</h4>
                <a href="http://the-questionnaire.blogspot.com/2008/10/adrian-adr-kowalczewski.html" target="_blank" className="content__link ">The questionnaire - ad.r</a><br />
                <small>the questionnaire project is based on the original "questionnaire of Marcel Proust" (french writer), created by Antoinette Faure around 1890 and now, submitted to a few personalities – the interest is on the confrontation and crossover between the original questions and nowadays vision on things</small><br /><br />
            </div>
        );
    }
}