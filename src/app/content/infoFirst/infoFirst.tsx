import styles from './infoFirst.module.css';
import Image from 'next/image';


export default function InfoFirst(){
    return(
        <main className={styles.container}>
            <div className={styles.text}>
                <h2>YOU DON’T HAVE TO REMIAN IN A DIM, UNCOMFORTABLE ENVIRONMENT </h2>
                <h4>Are you concerned about the strain on your eyes?</h4>
                <p>A recent study showed that inadequate lighting and screen glare can produce unseen stressors that may lead to headaches, eye discomfort and sometimes dry eyes </p>
                <p>OPTILITE PRO’s advanced technology reduces glare and provides optimal lighting, creating a more comfortable and welcoming environment for everyone.  </p>
            </div>
            <Image className={styles.photo} src={'/productFirst.png'} alt=""  width={500} height={400}></Image>
        </main>
    )
}