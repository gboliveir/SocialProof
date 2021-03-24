import './styles/global.css'

import styles from './styles/components/App.module.css'

import Mensage from './components/Mensage.js'
import CardPeaple from './components/CardPeaple.js'
import BlockClassification from './components/BlockClassification.js'

import ImageColton from './assets/image-colton.jpg'
import ImageIrene from './assets/image-irene.jpg'
import ImageAnne from './assets/image-anne.jpg'


function App() {
  return (

    <main className={styles.container}> 
      <section>   
        <div>
          <Mensage />
        </div> 

        <div>
          <BlockClassification txt="Rated 5 Stars in Reviews"/>
          <BlockClassification txt="Rated 5 Stars in Report Guru"/>
          <BlockClassification txt="Rated 5 Stars in BestTech"/>
        </div>
      </section>

      <section>
        <CardPeaple
          img={ImageColton}
          name="Colton Smith" 
          txt='"We needed the same printed design as the one we had ordered a week prior.
          Not only did they find the original order, but we also received it in time.
          Excellent!"'
        />

        <CardPeaple 
          img={ImageIrene}
          name="Irene Roberts " 
          txt='"Customer service is always excellent and very quick turn around. Completely
          delighted with the simplicity of the purchase and the speed of delivery."'
        />
        
        <CardPeaple
          img={ImageAnne}
          name="Anne Wallace" 
          txt='"Put an order with this company and can only praise them for the very high
          standard. Will definitely use them again and recommend them to everyone!"'
        />
      </section>

    </main>
  );
}

export default App;


