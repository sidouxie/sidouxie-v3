import React from 'react'
import { Link } from 'react-router-dom'
import Layout from './components/Layout'

function Politiques() {
  return (
    <Layout>
      <main class="politiques-main">
        <div className="section-head">
          <div className="title">
            <h2>Politiques de confidentialité</h2>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="section-textil">
              <h1>POLITIQUE DE CONFIDENTIALITÉ.</h1>
              <div className="section-textil-info" style={{ color: '#b3b5bf' }}>
                <span>Cette politique s'applique au site : sidouxie.com</span>
                <span>Date de dernière mise à jour : 25 juillet 2021</span>
              </div>
              <div className="textil">
                <p>
                  Le respect de votre vie privée est de la plus haute importance
                  pour sidouxie.com, qui est responsable de ce site.
                </p>
                <p>
                  La présente politique de confidentialité a pour but de vous
                  exposer:
                </p>
                <p>
                  La manière dont sont collectés et traités vos renseignements
                  personnels. Doivent être considérés comme renseignements
                  personnels tous les renseignements susceptibles de vous
                  identifier. Il s'agit notamment de votre prénom et nom, de
                  votre âge, de votre adresse postale, de votre adresse courriel
                  de votre localisation ou encore de votre adresse IP ; Quels
                  sont vos droits concernant ces renseignements; Qui est
                  responsable du traitement des renseignements personnels
                  collectés et traités ; À qui ces renseignements sont transmis
                  ; Éventuellement, la politique du site en matière de fichiers
                  témoins ("cookies"). Cette politique de confidentialité
                  complète les Conditions générales d'utilisation que vous
                  pouvez consulter à l'adresse ci-après :
                </p>
                <Link to="/conditions-générales">
                  https://sidouxie.com/conditions-générales
                </Link>
              </div>
              <h3>1. COLLECTE DE RENSEIGNEMENTS PERSONNELS</h3>
              <div className="textil">
                <p>Nous collectons les renseignements personnels suivants :</p>
                <ul>
                  <li>Nom</li>
                  <li>Prénom</li>
                  <li>Adresse électronique</li>
                  <li>Numéro de téléphone/de télécopieur</li>
                </ul>
                <p>
                  Les renseignements personnels que nous collectons sont
                  recueillis par l'entremise des modes de collecte décrits
                  ci-bas, dans les sections "Formulaires et modes de collecte"
                  et suivantes.
                </p>
              </div>
              <h3>2. FORMULAIRES ET MODES DE COLLECTE</h3>
              <div className="textil">
                <p>
                  Vos renseignements personnels sont collectés par l'entremise
                  des méthodes suivantes :
                </p>
                <ul>
                  <li>Formulaire d'inscription au site Web</li>
                  <li>Formulaire de commande</li>
                  <p>
                    Nous utilisons les renseignements ainsi collectés pour les
                    finalités suivantes :
                  </p>
                  <li>Suivis de commande</li>
                  <li>Statistiques</li>
                  <li>Contact</li>
                  <li>Gestion du site Web</li>
                </ul>
              </div>
              <h3>3. INTERACTIVITÉ</h3>
              <div className="textil">
                <p>
                  Vos renseignements personnels sont également collectés par le
                  biais de l'interactivité pouvant s'établir entre vous et notre
                  site Web. Ces renseignements sont collectés par les moyens
                  suivants :
                </p>
                <ul>
                  <li>Formulaire de Contact</li>
                  <p>
                    Nous utilisons les renseignements ainsi collectés pour les
                    finalités suivantes :
                  </p>
                  <li>Statistiques</li>
                  <li>Contact</li>
                  <li>Gestion du site web</li>
                </ul>
              </div>
              <h3>4. FICHIERS JOURNAUX ET TÉMOINS</h3>
              <div className="textil">
                <p>
                  Nous recueillons certaines informations par le biais de
                  fichiers journaux ("log files") et de fichiers témoins
                  ("cookies"). Ces fichiers nous permettent de traiter des
                  statistiques et des informations sur le trafic, de faciliter
                  la navigation et d'améliorer le service pour votre confort.
                </p>
                <strong>
                  a) Description des fichiers témoins utilisés par le site
                </strong>
                <p>
                  Il s'agit principalement des informations suivantes : Cookies
                  Le recours à de tels fichiers nous permet d'atteindre les
                  objectifs suivants : Amélioration du service et accueil
                  personnalisé Création de profils personnalisés de consommation
                  Suivis de commande Études statistiques En navigant sur le
                  site, des fichiers témoins de tiers peuvent être enregistrés.
                  Il s'agit particulièrement des tiers suivants : Cookies De
                  plus, le site intègre des boutons de réseaux sociaux vous
                  permettant de partager votre activité sur le site. Des
                  fichiers témoins de ces réseaux sociaux sont par conséquent
                  susceptibles d'être stockés sur votre ordinateur lorsque vous
                  utilisez ces fonctionnalités. Ces sites disposent de
                  politiques de confidentialité propres et de conditions
                  générales d'utilisation possiblement différentes de notre
                  site. Nous vous invitons à consulter les politiques de
                  confidentialité et les conditions générales d'utilisation de
                  ces sites.
                </p>
                <strong>
                  b) Opposition à l'utilisation de fichiers témoins par le site
                </strong>
                <p>
                  Vous pouvez vous opposer à l'enregistrement de ces fichiers
                  témoins en configurant votre logiciel de navigation. Dans le
                  cas où vous décidez de désactiver les fichiers témoins, vous
                  pourrez ensuite poursuivre votre navigation sur le site.
                  Toutefois, tout dysfonctionnement du site provoqué par cette
                  manipulation ne peut être considéré comme étant de notre fait.
                </p>
              </div>
              <h3>5. PARTAGE DES RENSEIGNEMENTS PERSONNELS</h3>
              <div className="textil">
                <p>
                  Les renseignements personnels collectés par le site ne sont
                  transmis à aucun tiers et ne sont traités que par nous.
                </p>
              </div>
              <h3>6. DURÉE DE CONSERVATION DES RENSEIGNEMENTS PERSONNELS</h3>
              <div className="textil">
                <p>
                  Le responsable du traitement des renseignements personnels
                  conservera dans ses systèmes informatiques du site et dans des
                  conditions raisonnables de sécurité l'ensemble des
                  renseignements personnels collectés pour une durée de : 12
                  mois au maximum.
                </p>
              </div>
              <h3>
                7. RESPONSABLE DU TRAITEMENT DES RENSEIGNEMENTS PERSONNELS
              </h3>
              <div className="textil">
                <strong>
                  a) Le responsable du traitement des renseignements personnels
                </strong>
                <p>
                  Le responsable du traitement des renseignements personnels est
                  : sidouxie.com. Il peut être contacté de la manière suivante :
                </p>
                <Link to="/">sidouxie.com</Link>
                <p>
                  Le responsable du traitement des renseignements personnels est
                  chargé de déterminer les finalités et les moyens mis au
                  service du traitement des renseignements personnels
                </p>
                <strong>
                  b) Obligations du responsable du traitement des renseignements
                  personnels
                </strong>
                <p>
                  Le responsable du traitement des renseignements personnels
                  s'engage à protéger les renseignements personnels collectés, à
                  ne pas les transmettre à des tiers sans que vous n'en ayez été
                  informé(e) et à respecter les finalités pour lesquelles ces
                  renseignements ont été collectés. De plus, le responsable du
                  traitement des renseignements personnels s'engage à vous
                  aviser en cas de rectification ou de suppression des
                  renseignements personnels, à moins que cela n'entraîne pour
                  lui des formalités, coûts ou démarches disproportionnés. Dans
                  le cas où l'intégrité, la confidentialité ou la sécurité de
                  vos renseignements personnels est compromise, le responsable
                  du traitement s'engage à vous en informer par tout moyen.
                </p>
              </div>
              <h3>8. DROIT D'OPPOSITION ET DE RETRAIT</h3>
              <div className="textil">
                <p>
                  Vous avez le droit de vous opposer au traitement de vos
                  renseignements personnels par le site ("droit d'opposition").
                  Vous avez également le droit de demander à ce que vos
                  renseignements personnels ne figurent plus, par exemple, dans
                  une liste de diffusion ("droit de retrait"). Afin de formuler
                  une opposition au traitement de vos renseignements personnels
                  ou demander le retrait de vos renseignements personnels, vous
                  devez suivre la procédure suivante :
                </p>
                <Link to="/">sidouxie.com</Link>
              </div>
              <h3>9. DROIT D'ACCÈS, DE RECTIFICATION ET DE SUPPRESSION</h3>
              <div className="textil">
                <p>
                  Vous pouvez prendre connaissance, mettre à jour, modifier ou
                  demander la suppression des renseignements vous concernant, en
                  respectant la procédure ci-après énoncée :
                </p>
                <Link to="/">sidouxie.com</Link>
              </div>
              <h3>10. SÉCURITÉ</h3>
              <div className="textil">
                <p>
                  Les informations personnelles que nous collectons sont
                  conservées dans un environnement sécurisé. Les personnes
                  travaillant pour nous sont tenues de respecter la
                  confidentialité de vos informations.
                </p>
                <p>
                  Pour assurer la sécurité de vos informations personnelles,
                  nous avons recours aux mesures suivantes :
                </p>
                <ul>
                  <li>Protocole SSL (Secure Sockets Layer)</li>
                  <li>Protocole SET (Secure Electronic Transaction)</li>
                  <li>Gestion des accès - personne autorisée</li>
                  <li>Gestion des accès - personne concernée</li>
                  <li>Logiciel de surveillance du réseau</li>
                  <li>Sauvegarde automatique</li>
                  <li>Développement d'un certificat numérique</li>
                  <li>Identifiant/mot de passe</li>
                  <li>Pare-feu (Firewalls)</li>
                </ul>
                <p>
                  Nous nous engageons à maintenir un haut degré de
                  confidentialité en intégrant les dernières innovations
                  technologiques permettant d'assurer la confidentialité de vos
                  transactions. Toutefois, comme aucun mécanisme n'offre une
                  sécurité maximale, une part de risque est toujours présente
                  lorsqu'on utilise Internet pour transmettre des informations
                  personnelles.
                </p>
              </div>
              <h3>11. ENFANTS</h3>
              <div className="textil">
                <p>
                  Notre site Web contient des sections destinées aux enfants. La
                  collecte de leurs renseignements personnels se fait avec le
                  consentement des parents ou du représentant de l'enfant. Nous
                  demandons le consentement de ces derniers par le biais :
                </p>
                <ul>
                  <li>Formulaire d'inscription</li>
                  <li>Formulaire de commande</li>
                </ul>
              </div>
              <h3>
                12. CONDITIONS DE MODIFICATION DE LA POLITIQUE DE
                CONFIDENTIALITÉ
              </h3>
              <div className="textil">
                <p>
                  La présente politique de confidentialité peut être consulté à
                  tout moment à l'adresse ci-après indiquée :
                </p>
                <Link to="/politiques-de-confidentialité">
                  https://sidouxie.com/politiques-de-confidentialité
                </Link>
                <p>
                  Nous nous réservons le droit de la modifier afin de garantir
                  sa conformité avec le droit en vigueur. Par conséquent, vous
                  êtes invité(e) à venir consulter régulièrement cette politique
                  de confidentialité afin de vous tenir informé(e) des derniers
                  changements qui lui seront apportés. Toutefois, en cas de
                  modification substantielle de cette politique, vous en serez
                  informé(e) de la manière suivante.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Politiques
