import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import { gsap } from 'gsap'
import { motion } from 'framer-motion'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CSSRulePlugin } from 'gsap/CSSRulePlugin'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, CSSRulePlugin)
}

function Politiques() {
  useEffect(() => {
    const tl = gsap.timeline()

    tl.fromTo(
      '.SidouxieLogo',
      { css: { fill: '#1c1c1c' } },
      {
        ease: 'power3.out',
        css: { fill: '#fff' },
        scrollTrigger: {
          id: 'Logo',
          trigger: '.SidouxieLogo',
          start: 'top top',
          end: 'top+=350',
          markers: false,
          toggleActions: 'play reverse play none',
        },
      }
    ).fromTo(
      '.IconUp',
      { css: { fill: '#1c1c1c' } },
      {
        ease: 'power3.out',
        css: { fill: '#fff' },
        scrollTrigger: {
          id: 'Logo',
          trigger: '.IconUp',
          start: 'top top',
          end: 'top+=350',
          markers: false,
          toggleActions: 'play reverse play none',
        },
      }
    )
  }, [])
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1 }}
      >
        <main class="politiques-main">
          <div className="section-heading">
            <div className="title">
              <h2>Politiques de confidentialitÃ©</h2>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="section-textil">
                <h1>POLITIQUE DE CONFIDENTIALITÃ‰.</h1>
                <div
                  className="section-textil-info"
                  style={{ color: '#b3b5bf' }}
                >
                  <span>Cette politique s'applique au site : sidouxie.com</span>
                  <span>Date de derniÃ¨re mise Ã  jour : 25 juillet 2021</span>
                </div>
                <div className="textil">
                  <p>
                    Le respect de votre vie privÃ©e est de la plus haute
                    importance pour sidouxie.com, qui est responsable de ce
                    site.
                  </p>
                  <p>
                    La prÃ©sente politique de confidentialitÃ© a pour but de vous
                    exposer:
                  </p>
                  <p>
                    La maniÃ¨re dont sont collectÃ©s et traitÃ©s vos renseignements
                    personnels. Doivent Ãªtre considÃ©rÃ©s comme renseignements
                    personnels tous les renseignements susceptibles de vous
                    identifier. Il s'agit notamment de votre prÃ©nom et nom, de
                    votre Ã¢ge, de votre adresse postale, de votre adresse
                    courriel de votre localisation ou encore de votre adresse IP
                    ; Quels sont vos droits concernant ces renseignements; Qui
                    est responsable du traitement des renseignements personnels
                    collectÃ©s et traitÃ©s ; Ã€ qui ces renseignements sont
                    transmis ; Ã‰ventuellement, la politique du site en matiÃ¨re
                    de fichiers tÃ©moins ("cookies"). Cette politique de
                    confidentialitÃ© complÃ¨te les Conditions gÃ©nÃ©rales
                    d'utilisation que vous pouvez consulter Ã  l'adresse ci-aprÃ¨s
                    :
                  </p>
                  <Link to="/conditions-gÃ©nÃ©rales">
                    https://sidouxie.com/conditions-gÃ©nÃ©rales
                  </Link>
                </div>
                <h3>1. COLLECTE DE RENSEIGNEMENTS PERSONNELS</h3>
                <div className="textil">
                  <p>
                    Nous collectons les renseignements personnels suivants :
                  </p>
                  <ul>
                    <li>Nom</li>
                    <li>PrÃ©nom</li>
                    <li>Adresse Ã©lectronique</li>
                    <li>NumÃ©ro de tÃ©lÃ©phone/de tÃ©lÃ©copieur</li>
                  </ul>
                  <p>
                    Les renseignements personnels que nous collectons sont
                    recueillis par l'entremise des modes de collecte dÃ©crits
                    ci-bas, dans les sections "Formulaires et modes de collecte"
                    et suivantes.
                  </p>
                </div>
                <h3>2. FORMULAIRES ET MODES DE COLLECTE</h3>
                <div className="textil">
                  <p>
                    Vos renseignements personnels sont collectÃ©s par l'entremise
                    des mÃ©thodes suivantes :
                  </p>
                  <ul>
                    <li>Formulaire d'inscription au site Web</li>
                    <li>Formulaire de commande</li>
                    <p>
                      Nous utilisons les renseignements ainsi collectÃ©s pour les
                      finalitÃ©s suivantes :
                    </p>
                    <li>Suivis de commande</li>
                    <li>Statistiques</li>
                    <li>Contact</li>
                    <li>Gestion du site Web</li>
                  </ul>
                </div>
                <h3>3. INTERACTIVITÃ‰</h3>
                <div className="textil">
                  <p>
                    Vos renseignements personnels sont Ã©galement collectÃ©s par
                    le biais de l'interactivitÃ© pouvant s'Ã©tablir entre vous et
                    notre site Web. Ces renseignements sont collectÃ©s par les
                    moyens suivants :
                  </p>
                  <ul>
                    <li>Formulaire de Contact</li>
                    <p>
                      Nous utilisons les renseignements ainsi collectÃ©s pour les
                      finalitÃ©s suivantes :
                    </p>
                    <li>Statistiques</li>
                    <li>Contact</li>
                    <li>Gestion du site web</li>
                  </ul>
                </div>
                <h3>4. FICHIERS JOURNAUX ET TÃ‰MOINS</h3>
                <div className="textil">
                  <p>
                    Nous recueillons certaines informations par le biais de
                    fichiers journaux ("log files") et de fichiers tÃ©moins
                    ("cookies"). Ces fichiers nous permettent de traiter des
                    statistiques et des informations sur le trafic, de faciliter
                    la navigation et d'amÃ©liorer le service pour votre confort.
                  </p>
                  <strong>
                    a) Description des fichiers tÃ©moins utilisÃ©s par le site
                  </strong>
                  <p>
                    Il s'agit principalement des informations suivantes :
                    Cookies Le recours Ã  de tels fichiers nous permet
                    d'atteindre les objectifs suivants : AmÃ©lioration du service
                    et accueil personnalisÃ© CrÃ©ation de profils personnalisÃ©s de
                    consommation Suivis de commande Ã‰tudes statistiques En
                    navigant sur le site, des fichiers tÃ©moins de tiers peuvent
                    Ãªtre enregistrÃ©s. Il s'agit particuliÃ¨rement des tiers
                    suivants : Cookies De plus, le site intÃ¨gre des boutons de
                    rÃ©seaux sociaux vous permettant de partager votre activitÃ©
                    sur le site. Des fichiers tÃ©moins de ces rÃ©seaux sociaux
                    sont par consÃ©quent susceptibles d'Ãªtre stockÃ©s sur votre
                    ordinateur lorsque vous utilisez ces fonctionnalitÃ©s. Ces
                    sites disposent de politiques de confidentialitÃ© propres et
                    de conditions gÃ©nÃ©rales d'utilisation possiblement
                    diffÃ©rentes de notre site. Nous vous invitons Ã  consulter
                    les politiques de confidentialitÃ© et les conditions
                    gÃ©nÃ©rales d'utilisation de ces sites.
                  </p>
                  <strong>
                    b) Opposition Ã  l'utilisation de fichiers tÃ©moins par le
                    site
                  </strong>
                  <p>
                    Vous pouvez vous opposer Ã  l'enregistrement de ces fichiers
                    tÃ©moins en configurant votre logiciel de navigation. Dans le
                    cas oÃ¹ vous dÃ©cidez de dÃ©sactiver les fichiers tÃ©moins, vous
                    pourrez ensuite poursuivre votre navigation sur le site.
                    Toutefois, tout dysfonctionnement du site provoquÃ© par cette
                    manipulation ne peut Ãªtre considÃ©rÃ© comme Ã©tant de notre
                    fait.
                  </p>
                </div>
                <h3>5. PARTAGE DES RENSEIGNEMENTS PERSONNELS</h3>
                <div className="textil">
                  <p>
                    Les renseignements personnels collectÃ©s par le site ne sont
                    transmis Ã  aucun tiers et ne sont traitÃ©s que par nous.
                  </p>
                </div>
                <h3>6. DURÃ‰E DE CONSERVATION DES RENSEIGNEMENTS PERSONNELS</h3>
                <div className="textil">
                  <p>
                    Le responsable du traitement des renseignements personnels
                    conservera dans ses systÃ¨mes informatiques du site et dans
                    des conditions raisonnables de sÃ©curitÃ© l'ensemble des
                    renseignements personnels collectÃ©s pour une durÃ©e de : 12
                    mois au maximum.
                  </p>
                </div>
                <h3>
                  7. RESPONSABLE DU TRAITEMENT DES RENSEIGNEMENTS PERSONNELS
                </h3>
                <div className="textil">
                  <strong>
                    a) Le responsable du traitement des renseignements
                    personnels
                  </strong>
                  <p>
                    Le responsable du traitement des renseignements personnels
                    est : sidouxie.com. Il peut Ãªtre contactÃ© de la maniÃ¨re
                    suivante :
                  </p>
                  <Link to="/">sidouxie.com</Link>
                  <p>
                    Le responsable du traitement des renseignements personnels
                    est chargÃ© de dÃ©terminer les finalitÃ©s et les moyens mis au
                    service du traitement des renseignements personnels
                  </p>
                  <strong>
                    b) Obligations du responsable du traitement des
                    renseignements personnels
                  </strong>
                  <p>
                    Le responsable du traitement des renseignements personnels
                    s'engage Ã  protÃ©ger les renseignements personnels collectÃ©s,
                    Ã  ne pas les transmettre Ã  des tiers sans que vous n'en ayez
                    Ã©tÃ© informÃ©(e) et Ã  respecter les finalitÃ©s pour lesquelles
                    ces renseignements ont Ã©tÃ© collectÃ©s. De plus, le
                    responsable du traitement des renseignements personnels
                    s'engage Ã  vous aviser en cas de rectification ou de
                    suppression des renseignements personnels, Ã  moins que cela
                    n'entraÃ®ne pour lui des formalitÃ©s, coÃ»ts ou dÃ©marches
                    disproportionnÃ©s. Dans le cas oÃ¹ l'intÃ©gritÃ©, la
                    confidentialitÃ© ou la sÃ©curitÃ© de vos renseignements
                    personnels est compromise, le responsable du traitement
                    s'engage Ã  vous en informer par tout moyen.
                  </p>
                </div>
                <h3>8. DROIT D'OPPOSITION ET DE RETRAIT</h3>
                <div className="textil">
                  <p>
                    Vous avez le droit de vous opposer au traitement de vos
                    renseignements personnels par le site ("droit
                    d'opposition"). Vous avez Ã©galement le droit de demander Ã 
                    ce que vos renseignements personnels ne figurent plus, par
                    exemple, dans une liste de diffusion ("droit de retrait").
                    Afin de formuler une opposition au traitement de vos
                    renseignements personnels ou demander le retrait de vos
                    renseignements personnels, vous devez suivre la procÃ©dure
                    suivante :
                  </p>
                  <Link to="/">sidouxie.com</Link>
                </div>
                <h3>9. DROIT D'ACCÃˆS, DE RECTIFICATION ET DE SUPPRESSION</h3>
                <div className="textil">
                  <p>
                    Vous pouvez prendre connaissance, mettre Ã  jour, modifier ou
                    demander la suppression des renseignements vous concernant,
                    en respectant la procÃ©dure ci-aprÃ¨s Ã©noncÃ©e :
                  </p>
                  <Link to="/">sidouxie.com</Link>
                </div>
                <h3>10. SÃ‰CURITÃ‰</h3>
                <div className="textil">
                  <p>
                    Les informations personnelles que nous collectons sont
                    conservÃ©es dans un environnement sÃ©curisÃ©. Les personnes
                    travaillant pour nous sont tenues de respecter la
                    confidentialitÃ© de vos informations.
                  </p>
                  <p>
                    Pour assurer la sÃ©curitÃ© de vos informations personnelles,
                    nous avons recours aux mesures suivantes :
                  </p>
                  <ul>
                    <li>Protocole SSL (Secure Sockets Layer)</li>
                    <li>Protocole SET (Secure Electronic Transaction)</li>
                    <li>Gestion des accÃ¨s - personne autorisÃ©e</li>
                    <li>Gestion des accÃ¨s - personne concernÃ©e</li>
                    <li>Logiciel de surveillance du rÃ©seau</li>
                    <li>Sauvegarde automatique</li>
                    <li>DÃ©veloppement d'un certificat numÃ©rique</li>
                    <li>Identifiant/mot de passe</li>
                    <li>Pare-feu (Firewalls)</li>
                  </ul>
                  <p>
                    Nous nous engageons Ã  maintenir un haut degrÃ© de
                    confidentialitÃ© en intÃ©grant les derniÃ¨res innovations
                    technologiques permettant d'assurer la confidentialitÃ© de
                    vos transactions. Toutefois, comme aucun mÃ©canisme n'offre
                    une sÃ©curitÃ© maximale, une part de risque est toujours
                    prÃ©sente lorsqu'on utilise Internet pour transmettre des
                    informations personnelles.
                  </p>
                </div>
                <h3>11. ENFANTS</h3>
                <div className="textil">
                  <p>
                    Notre site Web contient des sections destinÃ©es aux enfants.
                    La collecte de leurs renseignements personnels se fait avec
                    le consentement des parents ou du reprÃ©sentant de l'enfant.
                    Nous demandons le consentement de ces derniers par le biais
                    :
                  </p>
                  <ul>
                    <li>Formulaire d'inscription</li>
                    <li>Formulaire de commande</li>
                  </ul>
                </div>
                <h3>
                  12. CONDITIONS DE MODIFICATION DE LA POLITIQUE DE
                  CONFIDENTIALITÃ‰
                </h3>
                <div className="textil">
                  <p>
                    La prÃ©sente politique de confidentialitÃ© peut Ãªtre consultÃ©
                    Ã  tout moment Ã  l'adresse ci-aprÃ¨s indiquÃ©e :
                  </p>
                  <Link to="/politiques-de-confidentialitÃ©">
                    https://sidouxie.com/politiques-de-confidentialitÃ©
                  </Link>
                  <p>
                    Nous nous rÃ©servons le droit de la modifier afin de garantir
                    sa conformitÃ© avec le droit en vigueur. Par consÃ©quent, vous
                    Ãªtes invitÃ©(e) Ã  venir consulter rÃ©guliÃ¨rement cette
                    politique de confidentialitÃ© afin de vous tenir informÃ©(e)
                    des derniers changements qui lui seront apportÃ©s. Toutefois,
                    en cas de modification substantielle de cette politique,
                    vous en serez informÃ©(e) de la maniÃ¨re suivante.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </motion.div>
    </Layout>
  )
}

export default Politiques
