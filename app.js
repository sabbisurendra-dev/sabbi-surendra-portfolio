import {siteData} from './data.js';
import {renderHeader} from './components/header.js';
import {renderHero} from './components/hero.js';
import {renderImpact} from './components/impact.js';
import {renderWork} from './components/work.js';
import {renderBuilds} from './components/builds.js';
import {renderPhilosophy,renderSkills,renderContact,renderFooter} from './components/sections.js';
import {initInteractions} from './script.js';

document.querySelector('#site').innerHTML=`${renderHeader()}<main id="top">${renderHero(siteData.hero)}${renderImpact(siteData.impact)}${renderWork(siteData.projects)}${renderBuilds(siteData)}${renderPhilosophy(siteData.principles)}${renderAbout(siteData.timeline)}${renderSkills(siteData.skills)}${renderContact()}</main>${renderFooter()}`;
initInteractions();
function renderAbout(data){return `<section class="section about wrap" id="about"><div class="about-copy"><p class="eyebrow">04 · About</p><h2>From analytics to product —<br><span>and now building with AI.</span></h2><p>I started in analytics and data science, moved into Product Management to drive more impact at scale, and built products across marketplaces, fintech and growth.</p><p>Today, I bring that product foundation together with hands-on AI experimentation: understanding the technology, prototyping with it and using it to move faster from idea to product.</p></div><div class="timeline">${data.map(x=>`<div><span>${x[0]}</span><strong>${x[1]}</strong><small>${x[2]}</small></div>`).join('')}</div></section>`}