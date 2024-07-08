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
                  {/* <a href="tel:+33612131415"className='mt-3'> */}
                  <i class="fa-solid fa-mobile-screen-button my-2"></i>
                  <span className='ms-1 my-2'>+33 06 14 82 50 09</span>
                  {/* </a> */}
                  <br></br>
                  {/* <a href="mailto:david.sat@hotmail.fr"className='my-3'> */}
                  <i className="fa-regular fa-envelope"></i>
                  <span className='ms-1'>david.sat@hotmail.fr</span>
                  {/* </a> */}
                  <br></br>
                  {/* <a href="https://github.com/reygun888"> */}
                  <i className="fa-brands fa-github my-2"></i>
                  <span className='ms-1 my-2'>https://github.com/reygun888</span>
                  {/* </a> */}
                  <br></br>
                  {/* <a href="https://reygun888.github.io/prosdd/"className='mt-3'> */}
                  <i class="fa-brands fa-internet-explorer"></i>
                  <span className='net ms-1'>https://reygun888.github.io/prosdd</span>
                  {/* </a> */}
                </div>
              </li>
              <li>
              <div className='competence'>
                <h5>LANGAGES DE PROGRAMMATION</h5>
              <div className='contact'>
                <li>- HTML</li>
                <li>- JavaScript</li>
                <li>- PHP</li>
                <li>- CSS</li>
              </div>
              </div>
              </li>
              <li>
              <div className='competence'>
                <h5>FRAMEWORKS ET BIBLIOTHÈQUES</h5>
              <div className='contact'>
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
            <div className='titre d-flex justify-content-between'>
              <div>
                <img src={process.env.PUBLIC_URL + "/img/qr_1.jpeg"} alt="Portfolio" className="pics" width="100"/>
                <p>Lien vers mon profil</p>
              </div>
              <div>
                <h1 className='d-flex justify-content-end'>DAVID SAT</h1>
                <h3 className='mt-4'>DÉVELOPPEUR WEB FULLSTACK</h3>
              </div>
            </div>
            <hr></hr>
            <h4> PRÉSENTATION</h4>
            <div className='pre my-2'>
              <p>
              Mes expériences m'ont permis de développer des qualités essentielles telles que la rigueur, la gestion du temps, et la capacité à travailler sous pression, atouts qui seront indéniablement bénéfiques dans le domaine du Dev.Web. De plus, ma certification en développement web et mobile témoigne de ma capacité à assimiler rapidement de nouvelles technologies et à m'adapter à des environnements techniques variés.
              </p>
            </div>
            <h4> EXPÉRIENCE PROFESSIONNELLES</h4>
            <div className='pre my-2'>
              <h6 className='periode'>MARS - MAI 2024</h6>
              <h3>Conception et réalisation d'un site web pour l'ONG 'Les Amis Du Monde' sous Symfony, pour TMS qui est une startup qui s’occupe de concevoir des applications et de sites WEB en FullStack. </h3>
              <p>Développement d'un site web permettant la gestion des adhérents selon des rôles définis et la mise en place de fonctionnalités d'inscription, de don et de connexion. Le projet a impliqué la création d'un diagramme de classe pour modéliser les entités, la gestion des tâches selon leur difficulté et l'organisation des sprints. Un Dashboard a été mis en place pour permettre la modification du visuel du site. Cette expérience m'a permis de renforcer mes compétences en développement web avec Symfony, en gestion de projet agile et en conception de base de données.</p>
              <ul className='desc my-2'>
              <div className='d-flex justify-content-around'>
              <div> 
                <li>-	Conception du diagramme de classe</li>
                <li>-	Création des formulaires</li>
                <li>-	Mise en place de la gestion des rôles pour les adhérents</li>
              </div>
              <div>
                <li>-	Organisation des tâches selon leur difficulté</li>
                <li>- Planification des sprints pour le développement du site</li>
                <li>-	Modification du visuel du site via un Dashboard</li>
              </div>
              </div>
                <li className='liens my-2'>Référent : Paul Gaultier Toti – TMS-web – Tél. : 06 52 22 85 43</li>
            </ul>
            <hr className='sep'></hr>
            </div>
            <div className='pre my-2'>
              <h6 className='periode'>SEPTEMBRE 2023 - MARS 2024</h6>
              <h3>Application web interne d'un gestionnaire de personnel pour l’organisme 'Ressources Formation' qui sont en charge de diverses formations pour Pôle Emploi</h3>
              <p>Cette expérience professionnelle m'a permis de renforcer mes compétences en développement web avec Symfony, en conception de base de données et en gestion de projet. J'ai également acquis une expérience pratique dans la création d'interfaces utilisateur et la mise en place de fonctionnalités complexes.</p>
              <ul className='desc my-2'>
              <div className='d-flex justify-content-around'>
              <div> 
                <li>-	Utilisation du Framework Symfony</li>
                <li>- Utilisation des langages HTML, PHP, CSS, JavaScript, SQL	</li>
                <li>-	Conception du diagramme de classe et de l’User Case</li>
              </div>
              <div>
                <li>-	Mise en place de la base de données</li>
                <li>-	Initialisation de différents CRUD</li>
                <li>-	Création d’un calendrier avec des fonctionnalités d’écoute et d’affichage</li>
              </div>
              </div>
                <li className='liens my-2'> 
                  {/* <a href="https://github.com/reygun888/GestionRH.git"> */}
                  {/* <i className="fa-brands fa-github"></i>
                  <span> https://github.com/reygun888/GestionRH.git</span> */}
                  {/* </a> */}
                </li>
              </ul>
            </div>
            <h4> PROJETS PERSONNEL</h4>
            <div className='pre my-2'>
              <h3>Site vitrine pour ‘Sécurité d’Abord’</h3>
              <p>Développement d'un site vitrine pour une société de sécurité en respectant une maquette fournie et en assurant une visibilité multiplatforme. Le projet a impliqué la création de la structure HTML, la mise en forme avec CSS, l'optimisation du SEO et des performances, la réalisation d'un CI/CD et le déploiement du site. Cette expérience m'a permis de renforcer mes compétences en développement web, en intégration de maquette, en optimisation de performances et en déploiement continu.</p>
              <ul className='desc my-2'>
              <div className='d-flex justify-content-around'>
                <div> 
                  <li>-	Élaboration de la page en HTML</li>
                  <li>-	Mise en forme du site</li>
                  <li>-	Rendre le site responsif sur divers supports</li>
                </div>
               <div>
                  <li>-	Optimiser le SEO et les performances de la page</li>
                  <li>- Réalisation d'un CI/CD</li>
                  <li>- Déploiement du site</li></div>
                </div>
                <div className=' liens my-2 d-flex justify-content-center'>
                <li className='mx-2'>
                  {/* <a href="https://github.com/reygun888/Security.git"> */}
                  <i className="fa-brands fa-github"></i>
                  <span> https://github.com/reygun888/Security.git</span>
                  {/* </a> */}
                </li>
                <li className='mx-2'> 
                    {/* <a href="https://reygun888.github.io/security/"> */}
                    <i class="fa-brands fa-internet-explorer"></i>
                    <span> https://reygun888.github.io/security/</span>
                    {/* </a> */}
                </li>
                </div>
              </ul>
              <hr className='sep'></hr>
            </div>
            <div className='pre my-2'>
              <h3>Création d'un site pour afficher mon profil</h3>
              <p>Développement d'un site dynamique avec React pour présenter mon profil et mes projets. Utilisation de diverses API pour ajouter des fonctionnalités telles que des animations et un carrousel de projets. Le site a été rendu responsif pour une visibilité optimale sur différents supports et déployé via GitHub Pages. Cette expérience m'a permis de renforcer mes compétences en développement web avec React et en intégration d'API.</p>
              <ul className='desc my-2'>
              <div className='d-flex justify-content-around'>
              <div> 
                <li>-	Élaboration d'un site dynamique avec la bibliothèque 'REACT'</li>
                <li>-	Utilisation de divers API (AOS, Swiper, ...)</li>
              </div>
              <div>
                <li>-	Rendre le site responsif sur divers supports</li>
                <li>-	Déploiement du site via GitHub</li>
              </div>
              </div>
                <div className='liens my-2 d-flex justify-content-center'>
                <li className='mx-2'>
                  {/* <a href="https://github.com/reygun888/prosdd.git"> */}
                  <i className="fa-brands fa-github"></i>
                  <span> https://github.com/reygun888/prosdd.git</span>
                  {/* </a> */}
                </li>
                <li className='mx-2'> 
                    {/* <a href="https://reygun888.github.io/prosdd/"> */}
                    <i class="fa-brands fa-internet-explorer"></i>
                    <span> https://reygun888.github.io/prosdd/</span>
                    {/* </a> */}
                </li>
                </div>
              </ul>
            </div>
            <h4> FORMATION PROFESSIONNELLE</h4>
              <div className='pre my-2'>
                <h3 className='certif'>Certification Professionnel Niv.5 en Développement Web et Web Mobile – Ressources Formation, 2024</h3>
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
