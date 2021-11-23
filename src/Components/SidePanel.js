import styles from './Components.module.css';
import avatar from './myAvatar.png';

//<img src={logo} className="App-logo" alt="logo" />

function Avatar() {
    return (
        <div className={styles.avatar}>
         <img src={avatar} alt="myAvatar" />
         <h1>Dilli Luitel</h1>   
         <h5><i>Microsoft Leaper</i></h5>
        </div>
    )
}
function Contact() {
    return (
            <ul className={styles.contact}>
                <li><a href = "mailto: diluitel@microsoft.com">diluitel@microsoft.com</a></li>
                <li>(515) 520-5113</li>
                <li><a href=" https://www.linkedin.com/in/Dilli-Luitel">linkedin.com/in/Dilli-Luitel</a></li>
                <li><a href=" https://github.com/dilliluitel">github.com/dilliluitel</a></li>
            </ul>
    )
}
function Languages() {
    return (
        <div>
        <h4 className={styles.animate}>LANGUAGES</h4>
        <ul className={styles.contact}>
            <li>English (Professional)</li>
            <li>Nepali (Native)</li>
            <li>Hindi (Fluent)</li>
            <li>Sanskrit (Familiar)</li>
        </ul>
        </div>
    )
}
function SidePanel() {
    return (
        <div className={styles.sidePanel}>
            <Avatar />
            <Contact />
            <Languages />
        </div>
    )
}

export default SidePanel
