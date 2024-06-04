import { useState } from 'react'; 
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const correctPassword = process.env.REACT_APP_PASSWORD;

    if (password === correctPassword){
      setIsAuthenticated(true);
    }else{
      alert('Mot de passe incorrect');
    }
  };

  const generatePDF = () => {
    const confirmed = window.confirm('Voulez-vous vraiment générer le PDF ?');
      if (!confirmed) {
        return;
      }

      // Sélectionner le bouton de génération du PDF et le supprimer du DOM
    const pdfButton = document.getElementById('pdf-button');
    const parentNode = pdfButton.parentNode;
    parentNode.removeChild(pdfButton);

    const input = document.getElementById ('cv-content');
    html2canvas(input).then((canvas) =>{
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const width = pdf.internal.pageSize.getWidth();
      const height = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, 'PNG', 0, 0, width, height);

      // Réinsérer le bouton de génération du PDF dans le DOM
      parentNode.insertBefore(pdfButton, null);
      
      pdf.save('cv.pdf');
    })
    .catch((error)=>{
      console.error('Erreur lors de la génération du fichier');
      // Réinsérer le bouton de génération du PDF dans le DOM en cas d'erreur
      parentNode.insertBefore(pdfButton, null);
    });
  };
return(
    <div className='App'>
      {isAuthenticated ? (
        <main className="cv" id='cv-content'>
          <header className='curi'>
          <aside className="enTete">
            <img className="photo" src={process.env.PUBLIC_URL + "/img/photo.jpg"} alt=" portrait" />
            <ul>
              <li>
                <h5>
                  CONTACT
                </h5>
                <div className='contact'>
                  <i class="fa-solid fa-location-dot"></i>
                  <span className='ms-1'>Île-de-France</span>
                  <br></br>
                  <a href="tel:+33612131415"className='mt-3'>
                  <i class="fa-solid fa-mobile-screen-button"></i>
                  <span className='ms-1'>+33 06 14 82 50 09</span>
                  </a>
                  <br></br>
                  <a href="mailto:david.sat@hotmail.fr"className='my-3'>
                  <i className="fa-regular fa-envelope"></i>
                  <span className='ms-1'>david.sat@hotmail.fr</span>
                  </a>
                  <br></br>
                  <a href="https://github.com/reygun888">
                  <i className="fa-brands fa-github"></i>
                  <span className='ms-1'>https://github.com/reygun888</span>
                  </a>
                  <br></br>
                  <a href="https://reygun888.github.io/prosdd/"className='mt-3'>
                  <i class="fa-brands fa-internet-explorer"></i>
                  <span className='net ms-1'>https://reygun888.github.io/prosdd</span>
                  </a>
                </div>
              </li>
              <li>
              <div className='competence'>
                <h5>EXP. TECHNO</h5>
              <div className='contact'>
                <p>Langages de programmation</p>
                <li>- HTML</li>
                <li>- JavaScript</li>
                <li>- PHP</li>
                <li>- CSS</li>
                <hr></hr>
                <p>Framework et bibliothèque</p>
                <li>- Symfony</li>
                <li>- Angular</li>
                <li>- React</li>
                <li>- Bootstrap</li>
              </div>
              </div>
              </li>
              <li>
              <div className='competence'>
                <h5>COMPÉTENCES</h5>
              <div className='contact'>
                <li>- Résolution de BUG</li>
                <li>- Responsive WEB</li>
                <li>- Utilisation de la méthode Agile</li>
                <li>- Conception UML, cahier des charges</li>
              </div>
              </div>
              </li>
              <li>
              <div className='competence'>
                <h5>SAVOIR-ÊTRE</h5>
              <div className='contact'>
                <li>- Adaptabilité</li>
                <li>- Collaboration</li>
                <li>- Organisation</li>
                <li>- Rigueur</li>
              </div>
              </div>
              </li>
              <li>
                <h5>
                  HOBBIES
                </h5>
                <div className='contact'>
                  <i class="fa-solid fa-table-tennis-paddle-ball"></i>
                  <span className='ms-1'>Padel Tennis</span>
                  <br></br>
                  <i class="fa-solid fa-gamepad"></i>
                  <span className='ms-1 my-3'>Jeux vidéo</span>
                  <br></br>
                  <i class="fa-solid fa-motorcycle"></i>
                  <span className='ms-1'>Moto</span>
                </div>
              </li>
              <li>
                <h5>LANGUE</h5>
              <div className='contact'>
                <li>- Anglais : niveau intermédiaire</li>
              </div>
              </li>
              <br></br>
            <button className='pdf' id="pdf-button" onClick={generatePDF}>
            <i class="fa-solid fa-file-pdf ms-1"></i>
            Générer un PDF</button>
            </ul>
          </aside>
          </header>
          <section className="corps">
            <div className='titre'>
              <h1>DAVID SAT</h1>
              <h3>DÉVELOPPEUR WEB</h3>
            </div>
            <hr></hr>
            <h4> PRÉSENTATION</h4>
            <div className='pre my-3'>
              <p>
              Sortant d’une formation de développement Web et Mobile, je souhaiterais me perfectionner en mettant en exergue mes connaissances et étoffer mon savoir-faire par de nouvelles compétences.
              </p>
            </div>
            <h4> PROJETS PERSONNEL</h4>
            <div className='pre my-3'>
              <h3>•	Site vitrine pour ‘Sécurité d’Abord’</h3>
              <ul className='desc my-3'>
                <li className='mb-4'> 
                    <a href="https://reygun888.github.io/security/">
                    <i class="fa-brands fa-internet-explorer"></i>
                    <span> https://reygun888.github.io/security/</span>
                    </a>
                </li>
                <li>-	Élaboration de la page HTML</li>
                <li>-	Mise en forme du site</li>
                <li>-	Rendre le site responsif sur divers supports</li>
                <li>-	Optimiser le SEO et les performances de la page</li>
                <li>- Réalisation d'un CI/CD</li>
                <li>- Déploiement du site</li>
                <li className='my-3'>
                  <a href="https://github.com/reygun888/Security.git">
                  <i className="fa-brands fa-github"></i>
                  <span> https://github.com/reygun888/Security.git</span>
                  </a>
                </li>
              </ul>
              <hr className='sep'></hr>
            </div>
            <div className='pre my-3'>
              <h3>•	Application web d’un gestionnaire de personnel pour ‘Ressources Formation’</h3>
              <ul className='desc my-3'>
                <li>-	Utilisation du Framework Symfony et des langages HTML, PHP, CSS, JavaScript, SQL</li>
                <li>-	Conception du diagramme de classe et de l’User Case</li>
                <li>-	Création d’un calendrier avec des fonctionnalités d’écoute et d’affichage</li>
                <li>-	Mise en place de la base de données</li>
                <li>-	Initialisation de différents CRUD</li>
                <li className='my-3'> 
                  <a href="https://github.com/reygun888/GestionRH.git">
                  <i className="fa-brands fa-github"></i>
                  <span> https://github.com/reygun888/GestionRH.git</span>
                  </a>
                </li>
              </ul>
              <hr className='sep'></hr>
            </div>
            <div className='pre my-3'>
              <h3>•	Création d'un site pour afficher mon profil</h3>
              <ul className='desc my-3'>
                <li className='mb-4'> 
                    <a href="https://reygun888.github.io/prosdd/">
                    <i class="fa-brands fa-internet-explorer"></i>
                    <span> https://reygun888.github.io/prosdd/</span>
                    </a>
                </li>
                <li>-	Élaboration d'un site dynamique avec la bibliothèque 'REACT'</li>
                <li>-	Utilisation de divers API (AOS, Swiper, ...)</li>
                <li>-	Rendre le site responsif sur divers supports</li>
                <li>-	Déploiement du site via GitHub</li>
                <li className='my-3'>
                  <a href="https://github.com/reygun888/prosdd.git">
                  <i className="fa-brands fa-github"></i>
                  <span> https://github.com/reygun888/prosdd.git</span>
                  </a>
                </li>
              </ul>
            </div>
            <h4> EXPÉRIENCE PROFESSIONNELLES</h4>
            <div className='pre my-3'>
              <h3>Conception et réalisation d’un site web pour l’ONG ‘Les Amis Du Monde’ sous Symfony, lors d’un stage en entreprise</h3>
              <ul className='desc my-3'>
                <li>Référent : Paul Gaultier Toti – TMS-web – Tél. : 06 52 22 85 43</li>
                <li className='my-3'>
                  <a href='https://github.com/reygun888/ONG2.git'>
                  <i className="fa-brands fa-github"></i>
                  <span> https://github.com/reygun888/ONG2.git</span>
                  </a>
                </li>
            </ul>
            </div>
            <h4> FORMATION PROFESSIONNELLE</h4>
              <div className='pre my-3'>
                <h3>Certification en Développement Web – Ressources Formation, 2024</h3>
              </div>
          </section>
        </main>
      ) : (
        <main className="champs">
        <section className='connect'>
          <header>
            <h2 className='mb-5'>Bienvenue</h2>
          </header>
            <form onSubmit={handleSubmit}>
              <div>
                <input type='password' id='password' placeholder='Mot de passe' value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <button type='submit' className='btn btn-primary my-3'>Valider</button>
            </form>
        </section>
        </main>
      )}
    </div>
  );
}

export default App;
