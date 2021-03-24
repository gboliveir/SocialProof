import styles from '../styles/components/CardPeaple.module.css'

export default function BlockClassification({img, name, txt}) {
    return(
        <div className={styles.container}>
            <header>
                <img src={img} alt="imagem"></img>
                <div className={styles.groupSpan}>
                    <span>{name}</span>
                    <span>Verified Buyer</span>
                </div>
            </header>

            <main>
                <p>
                    {txt}
                </p>
            </main>
        </div>          
    );
}