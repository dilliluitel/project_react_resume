import styles from './Components.module.css';
import * as data from './data.js';

function Skills() {
    return (
        <>
         {data.skills}   
        </>
    )
}
const Works = () => {
    return (
        <>
        {data.works.map((work) => (
        <div>
            <h3 key={work.id}>{work.title}{", "}{work.location}</h3>
                <li>{work.item1}</li>
                <li>{work.item2}</li>
                <li>{work.item3}</li>
        </div>
        ))}
        </>
    )
}
const Educations = () => {
    return (
        <>
        {data.educations.map((education) => (
        <div className={styles.edu}>
            <h3 key={education.id}>{education.degree}</h3>
            <p>{education.school}</p>
            <p>{education.year}</p>
        </div>
        ))}
        </>
    )
}

function MainPanel(props) {
    
    return (
        <div className={styles.mainPanel}>
            <h1>Work Experience</h1>
            <Works />
            <h1>Skills</h1>
            <Skills />
            <h1>Education</h1>
            <Educations />
        </div>
    );
}

export default MainPanel
