import styles from '../styles/components/Mensage.module.css'

export default function Card() {
    return(
        <>
            <h1 className={styles.mainInformation}>
                10,000+ of our <br/>
                users love our <br/> 
                products.
            </h1>
            <p className={styles.complementInformation}>
                We only provide great products combined with excellent <br/>
                customer servicem. See what our satisfied customers are <br/>
                saying about our services
            </p>
        </>
    );
}