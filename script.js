let div_1 = document.createElement('div');

div_1.classList.add('container');

let body = document.querySelector('body');

body.append(div_1);

// first-div

let profile = document.createElement('img');

profile.setAttribute(
    'src','images/profile.jpg'
);

profile.classList.add('img_1');

div_1.append(profile);

// profile Image

let background = document.createElement('div');

background.classList.add('cross_bar');

div_1.append(background)

// cross bar for design

let name_bar = document.createElement('div');

name_bar.classList.add('name_div');

div_1.append(name_bar);

// Div for Display Name

let full_name = document.createElement('p');

full_name.innerText = 'Rizul Afridi'

full_name.classList.add('name');

name_bar.append(full_name);

// Name Inside the Name Bar

let address_div = document.createElement('div');

let address_text = document.createElement('p')

address_text.innerText = 'K.M.Rizul Afridi, Chicago 99999 | 999-999-9999 | hello@kickresume.com | www.kickresume.com'

address_div.classList.add('address')

address_text.classList.add('address_text')

body.append(address_div)
address_div.append(address_text)

// Div for Display Address 

let content = document.createElement('content')
content.classList.add('main_div')

body.append(content)

// Main Container Div

let left_div = document.createElement('div')
left_div.classList.add('left_div')

content.append(left_div)

//Left Side Div

let profile_sec = document.createElement('div')

left_div.append(profile_sec)

// Profile Section Div

let profile_top = document.createElement('div')
profile_top.classList.add('profile_top')

profile_sec.append(profile_top)

// Profile Top Section

let icon_bg = document.createElement('div')
icon_bg.classList.add('icon_bg')

profile_top.append(icon_bg)

// Icon Background Div

let icon = document.createElement('i')
icon.classList.add('fa-solid','fa-user')

icon_bg.append(icon)

// Icon on Profile Section

let profile_text = document.createElement('p')
profile_text.innerText='Profile'
profile_text.classList.add('profile_text')

profile_top.append(profile_text)

// Heading for Section

let profile_Content = document.createElement('div')
profile_Content.classList.add('profile_content')
profile_Content.innerText = 'Innovative optimized solution seeker.Excited to be at the deployment phase of my new career as a web developer. I am ambitious, adventurous, assiduous, animated, and an alliteration advocate.'

profile_sec.append(profile_Content)

// Profile Section Content Div

let skill_sec = document.createElement('div')
left_div.append(skill_sec)

// Second Div for Skill (first Div)

let skills = document.createElement('div')
skills.classList.add('skills')
skill_sec.append(skills)

// Div for Skill top Section (second Div)

let icon_bg_2 = document.createElement('div')
icon_bg_2.classList.add('icon_bg')

skills.append(icon_bg_2)

// Skill Div Icon Background

let icon_2 = document.createElement('i')
icon_2.classList.add('fa-solid','fa-flask')

icon_bg_2.append(icon_2)

// Icon on Profile Section

let profile_text_2 = document.createElement('p')
profile_text_2.innerText='Skills'
profile_text_2.classList.add('profile_text')

skills.append(profile_text_2)

// Heading for Section

let subHeading = document.createElement('p')
subHeading.innerHTML='Technical Skills'
subHeading.classList.add('sub_heading')

skill_sec.append(subHeading)

// Sub-Heading in Skills Section

let skills_table = document.createElement('div')
skills_table.classList.add('skills_table')

skill_sec.append(skills_table)

// Div to Display Overall Skills

let skillset_div = document.createElement('div')
skillset_div.classList.add('skillset_div')

skills_table.append(skillset_div)

// Div for Skill Sets

let js = document.createElement('p')
js.innerText='JavaScript'
js.classList.add('skills_txt')

skillset_div.append(js)

let css = document.createElement('p')
css.innerText='CSS'
css.classList.add('skills_txt')

skillset_div.append(css)

let html = document.createElement('p')
html.innerText='HTML'
html.classList.add('skills_txt')

skillset_div.append(html)

let react = document.createElement('p')
react.innerText='React'
react.classList.add('skills_txt')

skillset_div.append(react)

let reduz = document.createElement('p')
reduz.innerText='Redux'
reduz.classList.add('skills_txt')

skillset_div.append(reduz)

let mongo = document.createElement('p')
mongo.innerText='Mongo'
mongo.classList.add('skills_txt')

skillset_div.append(mongo)

let deployment = document.createElement('p')
deployment.innerText='Deployment'
deployment.classList.add('skills_txt')

skillset_div.append(deployment)

// skillset paragraph tags 

let skill_range = document.createElement('div')

skill_range.classList.add('skill_range')

skills_table.append(skill_range)

// div for range

let js_range = document.createElement('input')

js_range.setAttribute('type','range')

skill_range.append(js_range)

js_range.classList.add('range_des')

js_range.value='70'

// seperate range creation

let css_range = document.createElement('input')

css_range.setAttribute('type','range')

skill_range.append(css_range)

css_range.classList.add('range_des')

css_range.value='80'

// seperate range creation

let html_range = document.createElement('input')

html_range.setAttribute('type','range')

skill_range.append(html_range)

html_range.classList.add('range_des')

html_range.value='90'

// seperate range creation

let react_range = document.createElement('input')

react_range.setAttribute('type','range')

skill_range.append(react_range)

react_range.classList.add('range_des')

react_range.value='80'

// seperate range creation

let redux_range = document.createElement('input')

redux_range.setAttribute('type','range')

skill_range.append(redux_range)

redux_range.classList.add('range_des')

redux_range.value='70'

// seperate range creation

let mongo_range = document.createElement('input')

mongo_range.setAttribute('type','range')

skill_range.append(mongo_range)

mongo_range.classList.add('range_des')

mongo_range.value='60'

// seperate range creation

let depl_range = document.createElement('input')

depl_range.setAttribute('type','range')

skill_range.append(depl_range)

depl_range.classList.add('range_des')

depl_range.value='50'

// seperate range creation

let add_subHeading = document.createElement('p')
add_subHeading.innerHTML='Additional Skills'
add_subHeading.classList.add('sub_heading','add_subHeading')

skill_sec.append(add_subHeading)

// Second Sub-Heading in Skills Section

let add_skills_table = document.createElement('div')
add_skills_table.classList.add('skills_table','add_skills_table')

skill_sec.append(add_skills_table)

// Div to Display Overall Skills

let add_skillset_div = document.createElement('div')
add_skillset_div.classList.add('skillset_div','add_skills_div')

add_skills_table.append(add_skillset_div)

// Div for Additional Skill Sets

let prj_mgm = document.createElement('p')
prj_mgm.innerText='Project Management'
prj_mgm.classList.add('skills_txt')

add_skillset_div.append(prj_mgm)

// seperate p creation for Additional Skill Set

let rcrmt = document.createElement('p')
rcrmt.innerText='Recruitment'
rcrmt.classList.add('skills_txt')

add_skillset_div.append(rcrmt)

// seperate p creation for Additional Skill Set

let bsn_dvp = document.createElement('p')
bsn_dvp.innerText='Business Development'
bsn_dvp.classList.add('skills_txt')

add_skillset_div.append(bsn_dvp)

// seperate p creation for Additional Skill Set

let edtng = document.createElement('p')
edtng.innerText='Editing'
edtng.classList.add('skills_txt')

add_skillset_div.append(edtng)

// seperate p creation for Additional Skill Set

let Fndrsg = document.createElement('p')
Fndrsg.innerText='Fundraising'
Fndrsg.classList.add('skills_txt')

add_skillset_div.append(Fndrsg)

// seperate p creation for Additional Skill Set

let add_skill_range = document.createElement('div')

add_skill_range.classList.add('skill_range','add_range')

add_skills_table.append(add_skill_range)

// div for Additional Skill range

let pm_range = document.createElement('input')

pm_range.setAttribute('type','range')

add_skill_range.append(pm_range)

pm_range.classList.add('range_des')

pm_range.value='70'

// seperate range creation

let rcrmt_range = document.createElement('input')

rcrmt_range.setAttribute('type','range')

add_skill_range.append(rcrmt_range)

rcrmt_range.classList.add('range_des')

rcrmt_range.value='80'

// seperate range creation

let bsn_dvp_range = document.createElement('input')

bsn_dvp_range.setAttribute('type','range')

add_skill_range.append(bsn_dvp_range)

bsn_dvp_range.classList.add('range_des')

bsn_dvp_range.value='90'

// seperate range creation

let edtng_range = document.createElement('input')

edtng_range.setAttribute('type','range')

add_skill_range.append(edtng_range)

edtng_range.classList.add('range_des')

edtng_range.value='80'

// seperate range creation

let Fndrsg_range = document.createElement('input')

Fndrsg_range.setAttribute('type','range')

add_skill_range.append(Fndrsg_range)

Fndrsg_range.classList.add('range_des')

Fndrsg_range.value='80'

// seperate range creation

let work_exp_sec = document.createElement('div')
left_div.append(work_exp_sec)

// Third Div for Skill (first Div)

let wrk_xpnc = document.createElement('div')
wrk_xpnc.classList.add('skills')
work_exp_sec.append(wrk_xpnc)

// Div for Work Experience top Section (second Div)

let icon_bg_3 = document.createElement('div')
icon_bg_3.classList.add('icon_bg')

wrk_xpnc.append(icon_bg_3)

// Skill Div Icon Background

let icon_3 = document.createElement('i')
icon_3.classList.add('fa-solid','fa-briefcase')

icon_bg_3.append(icon_3)

// Icon on Profile Section

let profile_text_3 = document.createElement('p')
profile_text_3.innerText='Work Experience'
profile_text_3.classList.add('profile_text')

wrk_xpnc.append(profile_text_3)

// Heading for Section

let xprn_prd = document.createElement('div')
xprn_prd.classList.add('experience-content')
work_exp_sec.append(xprn_prd)

// Div creation for Working Experience period

let wrk_des = document.createElement('div')
let wrk_prd = document.createElement('div')

wrk_des.classList.add('works')
wrk_des.innerText='Event Manager'

wrk_prd.innerText='03/2014 - 02/2017'

xprn_prd.append(wrk_des)
xprn_prd.append(wrk_prd)

// Div for Working Experience

let comp = document.createElement('p')
comp.classList.add('work-place')
comp.innerText='C3 Presents, Washington DC'

work_exp_sec.append(comp)

// Creation of P tag for Company Name

let xpr_lst = document.createElement('div')
xpr_lst.classList.add('experience-list')

work_exp_sec.append(xpr_lst)

// Div for List

let ul = document.createElement('ul')
let li_1 = document.createElement('li')
let li_2 = document.createElement('li')
let li_3 = document.createElement('li')

li_1.innerText='Lead and execute all phases of event planning and production spanning committee recruitment, training, vendor relationships and on-site facilitation.'

li_2.innerText='Brought new business to the organization through relentless networking and stewardship which helped the company win the bid for the State Department Summit on the Middle East and, the companies largest civic event to date, the United State of Women.'

li_3.innerText='Exercise fiscal control over budget creation, tracking and reporting. Collaborate with employees at all organizational levels to advance cohesive operations.'

xpr_lst.append(ul)
ul.append(li_1)
ul.append(li_2)
ul.append(li_3)

//lists in work experience
// Left Side Div Completed

let Right_div = document.createElement('div')
Right_div.classList.add('right_div')

content.append(Right_div)

//Right Side Div

let right_in_div = document.createElement('div')

Right_div.append(right_in_div)

// right inner div

let wrk_exp_2 = document.createElement('div')
wrk_exp_2.classList.add('exp_2')

right_in_div.append(wrk_exp_2)

// heading for second work experience

let icon_bg_4 = document.createElement('div')
icon_bg_4.classList.add('icon_bg')

wrk_exp_2.append(icon_bg_4)

// div for icon background

let icon_4 = document.createElement('i')
icon_4.classList.add('fa-solid','fa-briefcase')


icon_bg_4.append(icon_4)

// icon for second work experience

let profile_text_4 = document.createElement('p')
profile_text_4.innerText='Work Experience'
profile_text_4.classList.add('profile_text')

wrk_exp_2.append(profile_text_4)

// heading text for second work experience heading

let xprn_prd_2 = document.createElement('div')
xprn_prd_2.classList.add('experience-content')
right_in_div.append(xprn_prd_2)

// Div creation for Working Experience period

let wrk_des_2 = document.createElement('div')
let wrk_prd_2 = document.createElement('div')

wrk_des_2.classList.add('works')
wrk_des_2.innerText='Community Relations Manager'

wrk_prd_2.innerText='06/2011 - 01/2014'

xprn_prd_2.append(wrk_des_2)
xprn_prd_2.append(wrk_prd_2)

// Div for Working Experience

let comp_2 = document.createElement('p')
comp_2.classList.add('work-place')
comp_2.innerText='Gay & Lesbian Eld er Housing, Los Angeles'

right_in_div.append(comp_2)

// Creation of P tag for second Company Name 

let xpr_lst_2 = document.createElement('div')
xpr_lst_2.classList.add('experience-list')

right_in_div.append(xpr_lst_2)

// Div for List

let ul_2 = document.createElement('ul')
let li_1_2 = document.createElement('li')
let li_2_2 = document.createElement('li')
let li_3_2 = document.createElement('li')
let li_4_2 = document.createElement('li')

li_1_2.innerText='Arranging presentations and pitch deck.'

li_2_2.innerText='Designing a PR plan and establishing important focus points.'

li_3_2.innerText='Designing, creating and managing content across multiple communication platforms.'

li_4_2.innerText='Building relationships with key media players.'


xpr_lst_2.append(ul_2)
ul_2.append(li_1_2)
ul_2.append(li_2_2)
ul_2.append(li_3_2)
ul_2.append(li_4_2)

//lists in Second work experience

let edu = document.createElement('div')
edu.classList.add('education')

right_in_div.append(edu)

// div for Education Section

let icon_bg_5 = document.createElement('div')
icon_bg_5.classList.add('icon_bg')

edu.append(icon_bg_5)

// div for icon background

let icon_5 = document.createElement('i')
icon_5.classList.add('fa-solid','fa-graduation-cap')

icon_bg_5.append(icon_5)

// icon for second work experience

let profile_text_5 = document.createElement('p')
profile_text_5.innerText='Education'
profile_text_5.classList.add('profile_text')

edu.append(profile_text_5)

// Heading for Education Section

let edu_prd = document.createElement('div')
edu_prd.classList.add('experience-content')
right_in_div.append(edu_prd)

// Div creation for Education period

let edu_des = document.createElement('div')
let edu_date = document.createElement('div')

edu_des.classList.add('works')
edu_des.innerText='Engineering Immersion Program'

edu_date.innerText='11/2018 - 06/2018'

edu_prd.append(edu_des)
edu_prd.append(edu_date)

// Div for Working Experience

let edu_plc = document.createElement('p')
edu_plc.classList.add('work-place')
edu_plc.innerText='Thinkful, Chicago, IL'

right_in_div.append(edu_plc)

// Creation of P tag for Education Place Name 

let edu_about = document.createElement('p')
edu_about.classList.add('edu_about')
edu_about.innerText='Project-Focused intensive program with emphasis on Mongo, Express, React and JavaScript (MERN) technical stack.'

right_in_div.append(edu_about)

// About Section under Education

let edu_li = document.createElement('div')
edu_li.classList.add('experience-list')

right_in_div.append(edu_li)

// Div for List

let ul_3 = document.createElement('ul')
let li_1_3 = document.createElement('li')
let li_2_3 = document.createElement('li')
let li_3_3 = document.createElement('li')

li_1_3.innerText='Developed a full-stack web application, "RenewU", using React that allows users to explore various aspects of meditation. Users progress is stored on a backend created using Node and MongoDB.'

li_2_3.innerText='Developed a language learning app, "Foodie Phonetics" using spaced repetition and a linked list data structure. React was used to create the front end components while Node and Mongo were used to create a backend that stores user data.'

li_3_3.innerText='Developed a concierge app, "Pley", for individuals looking for curated suggestions when visiting a new place. React was used to develop the front end which includes real-time chat, drag and drop and variety of advanced features. The backend, built using Node, Express, and Mongo, takes advantage of well- developed RESTful API, Geospatial searching, and user authentication with JWT.'

edu_li.append(ul_3)
ul_3.append(li_1_3)
ul_3.append(li_2_3)
ul_3.append(li_3_3)

//lists in Second work experience

let edu_prd_2 = document.createElement('div')
edu_prd_2.classList.add('experience-content')
right_in_div.append(edu_prd_2)

// Div creation for Education period


let edu_des_2 = document.createElement('div')
let edu_date_2 = document.createElement('div')

edu_des_2.classList.add('works')
edu_des_2.innerText='BA,English'

edu_date_2.innerText='09/2001 - 09/2005'

edu_prd_2.append(edu_des_2)
edu_prd_2.append(edu_date_2)

// Div for Education Experience

let edu_plc_2 = document.createElement('p')
edu_plc_2.classList.add('work-place')
edu_plc_2.innerText='University of California, Los Angles'

right_in_div.append(edu_plc_2)

// Creation of P tag for Education Place Name 









