import { useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import Layout from "../components/Layout";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);
}

function Conditions() {
  useEffect(() => {
    const tl = gsap.globalTimeline;

    tl.fromTo(
      ".SidouxieLogo",
      { css: { fill: "#1c1c1c" } },
      {
        ease: "power3.out",
        css: { fill: "#fff" },
        scrollTrigger: {
          id: "Logo",
          trigger: ".SidouxieLogo",
          start: "top top",
          end: "top+=350",
          markers: false,
          toggleActions: "play reverse play none",
        },
      }
    ).fromTo(
      ".IconUp",
      { css: { fill: "#1c1c1c" } },
      {
        ease: "power3.out",
        css: { fill: "#fff" },
        scrollTrigger: {
          id: "Logo",
          trigger: ".IconUp",
          start: "top top",
          end: "top+=350",
          markers: false,
          toggleActions: "play reverse play none",
        },
      }
    );
  }, []);
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        // transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1 }}
        transition={{ ease: "easeIn", duration: 1 }}
      >
        <main className="main-condition">
          <div className="section-heading">
            <div className="title">
              <h2>Conditions Générales</h2>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="section-textil">
                <h1>CONDITIONS GÉNÉRALES D’UTILISATION :</h1>
                <div className="section-textil-info">
                  <span>Cette politique s'applique au site : sidouxie.com</span>
                  <span>Date de dernière mise à jour : 25 juin 2021</span>
                </div>
                <h3>1. Objet des Conditions Générales</h3>
                <div className="textil">
                  <p>
                    Sidouxie.com propose à l’Utilisateur, sur son site Internet
                    accessible à l’adresse https://sidouxie.com, (ci-après « le
                    Site »), différents services liés notamment au cinéma et
                    séries télévisées (ci-après les « Services »). Les Services
                    sont présentés sur les pages du Site. Par Service(s), on
                    entend, sans que cette liste soit limitative, les contenus
                    proposés, les éléments de mise en valeur des contenus, la
                    mise à disposition d’outils, notamment l’outil de lecture de
                    contenus vidéos (ci-après désigné par le terme « Lecteur(s)
                    ») et plus généralement tout autre service proposé par
                    Sidouxie.com et disponible notamment à l’adresse :
                    https://sidouxie.com et/ou à toute autre adresse qui
                    viendrait s’ajouter ou de substituer à celle-ci.
                    Sidouxie.com se réserve le droit d'ajouter, de supprimer ou
                    de modifier tout ou partie des espaces des Services qu’elle
                    propose. Sidouxie.com se réserve le droit de mettre à jour,
                    de modifier et/ou de supprimer tout ou partie des Services à
                    tout moment et sans préavis. Les présentes Conditions
                    Générales ont pour objet de régir la mise à disposition
                    et/ou l’accès par l’Utilisateur à ces Services et
                    l’utilisation qu’il en fait. L’accès et l’utilisation de
                    tout ou partie des Services proposés sur le Site impliquent
                    de la part de l’Utilisateur une acceptation pleine et
                    entière de l’ensemble des présentes Conditions Générales.
                    L’Utilisateur confirme donc avoir lu et compris
                    l’intégralité des présentes Conditions Générales avant toute
                    utilisation des Services. L’Utilisateur s’engage à respecter
                    les présentes Conditions Générales. L’acceptation des
                    Conditions Générales exclut l’application de toute
                    disposition différente ou contraire. Les stipulations des
                    présentes Conditions Générales prévaudront en toute
                    hypothèse. Toute utilisation des Services contraire aux
                    Conditions Générales est prohibée et sanctionnée,
                    conformément à l’article 9 des présentes Conditions
                    Générales. Les Conditions Générales constituent
                    l’intégralité du contrat passé entre l’Utilisateur et
                    Sidouxie.com et, le cas échéant, annulent et remplacent
                    l’ensemble des contrats, négociations et ententes
                    antérieures entre l’Utilisateur et Sidouxie.com.
                    Sidouxie.com pourra proposer des conditions particulières
                    complémentaires relatives à certains Services spécifiques,
                    qui doivent être acceptées par l’Utilisateur s’il souhaite
                    avoir accès aux dits Services.
                  </p>
                </div>
                <h3>2. Accès aux Services</h3>
                <div className="textil">
                  <p>
                    Seules les personnes ayant ouvert un compte utilisateur
                    (ci-après dénommé le « Compte » ou « Compte Utilisateur »)
                    et, pour ce faire, dûment rempli le formulaire comportant
                    toutes les informations obligatoires (matérialisées par un
                    astérisque) demandées par Sidouxie.com et ayant consenti
                    sans réserve aux présentes Conditions Générales
                    d’Utilisation peuvent avoir accès et utiliser les Services
                    soumis à un accès. Ces services sont notamment les suivants
                    : possibilité de noter et de rédiger des appréciations sur
                    les films, séries et personnalités publication de critiques
                    choix de cinémas favoris publication de commentaires choix
                    d’amis configuration du profil accès et participation aux
                    forums Sidouxie.com participation aux jeux-concours
                    Sidouxie.com réception d’alertes et de newsletters par email
                    Cette inscription peut s’effectuer soit par le Site, soit,
                    le cas échéant, selon d’autres modalités proposées par
                    Sidouxie.com, et notamment par l’utilisation d’outils
                    nomades (dont les téléphones portables). Les autres Services
                    proposés par Sidouxie.com sont en accès libre. Sidouxie.com
                    peut créer des nouveaux services soumis à un accès et/ou
                    décider qu’un service en accès libre sera soumis à un accès.
                  </p>
                </div>
                <h3>
                  3. Ouverture d’un Compte Utilisateur (inscription de
                  l’Utilisateur)
                </h3>
                <div className="textil">
                  <p>
                    L’Utilisateur est amené à communiquer à Sidouxie.com des
                    informations personnelles, qui permettront ensuite de
                    l’identifier et de faciliter l’accès sécurisé au Site et aux
                    Services et l’utilisation des Services. L’Utilisateur doit
                    ainsi communiquer : ses nom, prénom, date de naissance,
                    adresse électronique. Lorsque l’Utilisateur remplit le
                    formulaire d’inscription aux Services, il s’engage à le
                    remplir correctement, et notamment à ne communiquer que des
                    informations exactes, à jour et complètes. L’Utilisateur
                    s’engage à mettre à jour les informations le concernant à
                    chaque changement de sa situation. L’Utilisateur s’engage à
                    effectuer ces modifications sur le Site directement depuis
                    son Compte. Si Sidouxie.com a connaissance que tout ou
                    partie des informations communiquées lors de l’inscription
                    sont erronées ou incomplètes, Sidouxie.com se réserve le
                    droit de suspendre et/ou clôturer le Compte de l’Utilisateur
                    et/ou de bloquer tout nouvel accès et/ou usage des Services,
                    sans préjudice de tout autre recours ou action.
                    L’inscription entraîne l’acceptation expresse et sans
                    réserve par l’Utilisateur des présentes Conditions Générales
                    matérialisée par le « cochage » obligatoire de la case
                    d’acceptation des Conditions Générales « J’ai lu et
                    j’accepte l’ensemble des règles édictées par les présentes
                    Conditions Générales d’Utilisation ». L’Utilisateur s’engage
                    à conserver sur un support durable les Conditions Générales
                    d’Utilisation qui lui sont fournies par Sidouxie.com sur un
                    tel support. En cliquant sur le bouton « J’ai lu et
                    j’accepte l’ensemble des règles édictées par les présentes
                    Conditions Générales d’Utilisation », l'Utilisateur
                    reconnaît qu'il a la capacité juridique pour conclure une
                    telle convention ou qu'il dispose de l'autorisation de la
                    personne habilitée. L’Utilisateur a la possibilité de
                    s’inscrire en utilisant son compte Facebook. En cas
                    d’inscription via le compte Facebook de l’Utilisateur, ce
                    dernier est seul responsable du respect de ses obligations
                    vis-à-vis de Facebook. En cas de contradiction entre les
                    conditions générales de Facebook et les présentes Conditions
                    Générales, les stipulations des Conditions Générales
                    prévaudront en toute hypothèse. 4. Identifiants et mot de
                    passe Lors de son inscription, l’Utilisateur est amené à
                    rentrer son adresse email servant à l’identifier (l’ «
                    Identifiant de Connexion ») et à permettre une connexion
                    plus rapide lors de l’utilisation des Services ainsi qu’à
                    choisir un mot de passe d'au moins quatre caractères
                    alphanumériques (le « Mot de Passe »). Lors de son
                    inscription, l’Utilisateur doit également choisir un
                    pseudonyme (ci-après le « Pseudo »). Le Pseudo est différent
                    de l’identifiant de connexion. Le Pseudo est visible des
                    autres Utilisateurs. Le Pseudo identifie l’Utilisateur en
                    tant que personne. L’Utilisateur s’engage à choisir un
                    Identifiant de Connexion et un Pseudo qui soient disponibles
                    et licites. Il s’interdit notamment de choisir un
                    Identifiant de Connexion ou un Pseudo pouvant porter
                    atteinte à un quelconque droit de propriété intellectuelle,
                    nom commercial ou droit de la personnalité de tiers.
                    L’Identifiant de Connexion et le Pseudo choisis par
                    l’Utilisateur ne doivent en outre pas : faire référence à
                    une orientation politique, à une ethnie, une communauté, une
                    religion, être vulgaires ou insultants, avoir de connotation
                    sexuelle voire pornographique, faire référence à un produit
                    stupéfiant ou toute autre substance interdite par la
                    législation française, faire référence à des boissons
                    alcoolisées, au tabac ou aux produits du tabac, être
                    orthographié ou épelé alternativement dans le but de
                    contourner les règles imposées ci-dessus. Sidouxie.com se
                    réserve le droit de supprimer et/ou de demander à récupérer
                    des Identifiants de Connexion, à tout moment et quelle qu’en
                    soit la raison, et notamment, sans toutefois s’y limiter, en
                    raison de prétentions de tiers indiquant qu’un identifiant
                    constitue une violation de leurs droits. L’Utilisateur
                    accepte que sur le Site son nom ou Pseudo soient accessibles
                    publiquement, et les conséquences attachées, notamment le
                    fait que certains moteurs de recherche puissent les indexer,
                    sans que la responsabilité de Sidouxie.com puisse être
                    engagée. Le Mot de Passe est personnel et confidentiel.
                    L’Utilisateur en est seul responsable. Il s’engage à ne pas
                    le divulguer à des tiers et à prendre toutes les précautions
                    nécessaires pour éviter que des tiers puissent y avoir
                    accès. Pour garantir la sécurité de son Compte,
                    l’Utilisateur s’engage à : ne pas divulguer à des tiers ni
                    son Identifiant de Connexion, ni son Mot de Passe ; prendre
                    toutes les précautions nécessaires pour éviter que des tiers
                    puissent y avoir accès ; prendre toutes les mesures afin
                    d’éviter qu’un tiers puisse accéder au Compte que
                    l’Utilisateur a activé, même à son insu ; ne pas donner
                    accès à son Compte à un tiers ; utiliser une boîte courriel
                    personnelle et ne pas partager cette adresse ; ce
                    qu’Sidouxie.com puisse facilement entrer en contact avec
                    l’Utilisateur, pour quelque raison que ce soit, via son
                    adresse courriel. Le prêt, le partage, l’échange, le don,
                    l’achat, le transfert et la vente de Comptes sont interdits.
                    Tout prêt, partage, échange, achat, transfert ou vente de
                    Compte ne sera pas opposable à Sidouxie.com et pourra donner
                    lieu aux sanctions prévues à l’article 9 des présentes
                    Conditions Générales. L’Utilisateur est seul responsable de
                    l’utilisation de son Compte. Toute connexion ou transmission
                    d’ordres ou de données effectuée au moyen de son Mot de
                    Passe sera réputée avoir été effectuée par lui-même et sous
                    sa responsabilité exclusive. Afin de préserver le caractère
                    personnel et confidentiel de son accès, il est recommandé à
                    l’Utilisateur de se déconnecter de son Compte à la fin de
                    chaque session d’accès en cliquant sur « Me déconnecter » ou
                    toute mention similaire proposée. En cas d’utilisation
                    frauduleuse de son Compte et/ou Mot de Passe, ou en cas de
                    perte ou de vol de son Mot de Passe, l’Utilisateur s’engage
                    à en informer immédiatement Sidouxie.com. Dans le cas où
                    l’Utilisateur suspecte raisonnablement une faille dans la
                    sécurité, y compris la perte, le vol ou l’utilisation non
                    autorisée de son identifiant de connexion et mot de passe ou
                    tout autre problème lié à la sécurité de son Compte, il doit
                    avertir immédiatement Sidouxie.com. Sidouxie.com pourra
                    alors réinitialiser son mot de passe. Sidouxie.com pourra
                    également bloquer l’accès au Compte en question. En cas
                    d’oubli du Mot de Passe, l’Utilisateur le signale sur la
                    page d’ouverture du Site en cliquant sur la rubrique «J’ai
                    oublié mon mot de passe ». Dans ce cas, l’Utilisateur doit
                    renseigner son Identifiant de Connexion et recevra à
                    l’adresse électronique renseignée lors de son inscription un
                    courriel lui indiquant un nouveau mot de passe.
                  </p>
                </div>
                <h3>5. Protection des données à caractère personnel</h3>
                <div className="textil">
                  <p>
                    6.1. Conformément à la loi n°78-17 du 6 janvier 1978
                    modifiée, relative à l’informatique, aux fichiers et aux
                    libertés, Sidouxie.com informe l’Utilisateur qu’elle
                    respecte la confidentialité, l’intégrité et la sécurité des
                    données qu’il peut être amené à lui communiquer par le biais
                    du Site ou des Services. Toute donnée à caractère personnel
                    identifiant indirectement ou directement l’Utilisateur,
                    notamment : nom, prénom, coordonnées postales,
                    électroniques, téléphoniques, ou indirectement, est
                    considérée selon la législation applicable comme une donnée
                    confidentielle et traitée comme telle. Il est toutefois
                    entendu que si l’Utilisateur choisit comme pseudonyme ses
                    nom et prénom, il ne pourra opposer le caractère
                    confidentiel de ces données à Sidouxie.com. L’ouverture d’un
                    Compte Utilisateur est soumise à la réalisation d’un
                    traitement de données à caractère personnel dont le
                    responsable est Sidouxie.com, ce que l’Utilisateur accepte.
                    Ce traitement des données personnelles de l’Utilisateur est
                    déclaré à la Commission Nationale de l'Informatique et des
                    Libertés (CNIL). Sidouxie.com procède aux mises à jour de la
                    déclaration CNIL si nécessaire. Les données collectées
                    proviennent de la fourniture de leurs informations par les
                    personnes désireuses d’accéder ou d’utiliser les Services et
                    de devenir Utilisateur. Les données pourront être utilisées
                    pour les besoins de la gestion des opérations effectuées sur
                    le Site et notamment l’accès et l’utilisation des Services.
                    Sidouxie.com conserve les données personnelles de
                    l’Utilisateur pour la durée nécessaire aux finalités
                    décrites au présent article et aux fins de conserver les
                    éléments nécessaires en cas de mise en jeu de sa
                    responsabilité contractuelle et/ou délictuelle. Au-delà de
                    cette durée, seules des données statistiques rendues
                    anonymes seront conservées et ne donneront lieu à aucune
                    exploitation, de quelque nature que ce soit. Sous réserve de
                    justifier de son identité, l’Utilisateur dispose d'un droit
                    d'accès, de modification, de rectification et de suppression
                    des données qui le concernent. L’Utilisateur peut mettre en
                    œuvre ce droit en écrivant à Sidouxie.com à l'adresse
                    électronique suivante : sidouxie.com, ou à l’adresse postale
                    suivante: Sidouxie.com. Conformément à l'article 32 loi
                    informatique et libertés et au vu de cette Newsletter qui
                    collecte des données personnelles, l'utilisateur doit être
                    informé de : De l'identité du responsable du traitement et,
                    le cas échéant, de celle de son représentant De la finalité
                    poursuivie par le traitement auquel les données sont
                    destinées Du caractère obligatoire ou facultatif des
                    réponses Des conséquences éventuelles, à son égard, d'un
                    défaut de réponse Des destinataires ou catégories de
                    destinataires des données Des droits qu'elle tient des
                    dispositions de la section 2 du présent chapitre dont celui
                    de définir des directives relatives au sort de ses données à
                    caractère personnel après sa mort Le cas échéant, des
                    transferts de données à caractère personnel envisagés à
                    destination d'un Etat non membre de la Communauté européenne
                    De la durée de conservation des catégories de données
                    traitées ou, en cas d'impossibilité, des critères utilisés
                    permettant de déterminer cette durée. 6.2. Pour des besoins
                    statistiques, Sidouxie.com peut être amenée à recueillir des
                    informations de navigation via l'utilisation de cookies.
                    L'acceptation de ces cookies est obligatoire pour toute
                    souscription, gratuite ou payante. L’Utilisateur peut à tout
                    moment supprimer l’enregistrement des cookies, ou les
                    cookies déjà enregistrés sur son ordinateur, en paramétrant
                    les options de protection de la vie privée de son navigateur
                    Internet (par exemple : Outils =&gt; Effacer mes traces
                    =&gt; Cookies, sur Mozilla Firefox et Outils =&gt; Supprimer
                    l’historique de navigation =&gt; Supprimer les cookies, sur
                    Microsoft Internet Explorer). Sidouxie.com se réserve
                    également le droit de collecter certaines informations :
                    liées à l’ordinateur de l’Utilisateur (IP, fournisseur
                    d'accès, configuration matérielle, configuration logicielle)
                    liées aux Services (log et historique de tous les échanges
                    de données, « log » et historique des connexions).
                    Sidouxie.com pourra utiliser ces informations à toutes fins,
                    notamment pour cibler les bandeaux publicitaires, améliorer
                    l'utilisation des Services ou contrôler le respect des
                    termes des présentes Conditions Générales. Sidouxie.com
                    pourra par ailleurs transmettre les données de l’Utilisateur
                    à des partenaires commerciaux, sous réserve de
                    l’autorisation expresse de l’Utilisateur lors de son
                    inscription. Toutes les informations contenues sur les
                    serveurs pourront être utilisées par Sidouxie.com pour
                    effectuer tout type de contrôle à des fins de prévention et
                    de sanction. 6.3. En règle générale, Sidouxie.com s’engage à
                    ne pas divulguer les données personnelles de ses
                    Utilisateurs, sauf avec leur autorisation expresse ou dans
                    des circonstances très particulières, telles celles qui sont
                    envisagées et précisées dans les présentes Conditions
                    Générales, et notamment ; Sidouxie.com pourra être amenée –
                    du fait de la loi, dans le cadre d’une procédure en justice,
                    d’un litige et /ou d’une requête des autorités publiques du
                    pays de résidence de l’Utilisateur ou autre – à divulguer
                    les données personnelles précitées ; Sidouxie.com pourra
                    également divulguer ces données si la divulgation est
                    nécessaire à des fins de sécurité nationale, d’application
                    de la loi ou autre sujet d’intérêt public ; Sidouxie.com
                    peut également divulguer des données concernant ses
                    Utilisateurs si cette divulgation est raisonnablement
                    nécessaire pour faire valoir le respect des présentes
                    Conditions Générales ou protéger ses activités ou ses
                    Utilisateurs ; en cas de restructuration ou de cession,
                    Sidouxie.com pourra transférer toute donnée personnelle
                    qu’elle conserve au tiers concerné.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </motion.div>
    </Layout>
  );
}

export default Conditions;
