import React, { useState, useEffect } from 'react';

function App() {
  const [language, setLanguage] = useState('fr');
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    const isSystemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedMode === 'enabled' || (savedMode === null && isSystemDark);
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const translations = {
    fr: {
      loginTitle: "Connexion",
      RegistreTitle: "Créer un compte",
      ConfirmPassword: "Confirmer le mot de passe",
      Password:"Mot de passe",
      ButtonLogin:"Se connecter",
      Login:"Connexion",
      Registre:"Créer un compte",
      Email: "Email",
      Nom: "Nom",
      Message: "Message",
      ButtonEnvoyer: "Envoyer",
      copyright: "© 2023 Waselni m3ak. Tous droits réservés.",
      contactNous: "Contactez-nous",
      title: "Waselni m3ak",
      heroTitle: "Facilitons le trajet entre étudiants",
      heroSubtitle: "Waselni m3ak — Une solution solidaire, économique et écologique",
      heroButton: "Découvrir l'application",
      objectivesTitle: "Objectifs",
      objective1Title: "Réduction des frais",
      objective1Desc: "Partagez les frais de transport pour économiser de l'argent.",
      objective2Title: "Moins de CO₂",
      objective2Desc: "Réduisez votre empreinte carbone en covoiturant.",
      objective3Title: "Entraide et ponctualité",
      objective3Desc: "Encouragez la solidarité et le respect des horaires entre étudiants.",
      featuresTitle: "Fonctionnalités clés",
      feature1Title: "Connexion avec l'e-mail universitaire",
      feature1Desc: "Connexion sécurisée pour garantir une communauté fiable.",
      feature2Title: "Recherche et publication de trajets",
      feature2Desc: "Proposez ou réservez un trajet en quelques clics.",
      feature3Title: "Système d'évaluation entre étudiants",
      feature3Desc: "Notes et avis pour instaurer la confiance.",
      feature4Title: "Interface intuitive et simple d'utilisation",
      feature4Desc: "Une expérience simple et fluide.",
      MaquettesTitle: "Maquettes",
      ContactTitle: "Contact"
    },
    en: {
      RegistreTitle: "Register",
      ConfirmPassword: "Confirm Password",


      loginTitle: "Login",
      Password:"Password",
      ButtonLogin:"Login",

      Login:"Sign In",
      Registre:"Sign Up",
      Email: "Email",
      Nom: "Name",
      Message: "Message",
      ButtonEnvoyer: "Send",
      copyright: "© 2023 Waselni m3ak. All rights reserved.",
      contactNous: "Contact us",
      title: "Waselni m3ak",
      heroTitle: "Let's facilitate student commuting",
      heroSubtitle: "Waselni m3ak — A supportive, economical, and ecological solution",
      heroButton: "Discover the app",
      objectivesTitle: "Objectives",
      objective1Title: "Cost reduction",
      objective1Desc: "Share transportation costs to save money.",
      objective2Title: "Less CO₂",
      objective2Desc: "Reduce your carbon footprint by carpooling.",
      objective3Title: "Help and punctuality",
      objective3Desc: "Promote solidarity and punctuality among students.",
      featuresTitle: "Key features",
      feature1Title: "Authentication via university email",
      feature1Desc: "Secure login to ensure a trustworthy community.",
      feature2Title: "Search and publish rides",
      feature2Desc: "Offer or book a ride in just a few clicks.",
      feature3Title: "Student rating system",
      feature3Desc: "Ratings and feedback to build trust.",
      feature4Title: "Intuitive interface",
      feature4Desc: "A simple and seamless user experience.",
      MaquettesTitle: "Mockups",
      ContactTitle: "Contact"
    },
    ar: {
      RegistreTitle: "إنشاء حساب",
      ConfirmPassword: "تأكيد كلمة المرور",
      loginTitle: "تسجيل الدخول",
      Password:"كلمة المرور",
      ButtonLogin:"تسجيل الدخول",
      Login:"تسجيل الدخول",
      Registre:"إنشاء حساب",
      Email: "البريد الإلكتروني",
      Nom: "الاسم",
      Message: "رسالة",
      ButtonEnvoyer: "إرسال",
      copyright: "© 2023 وسيلني معاك. جميع الحقوق محفوظة.",
      contactNous: "اتصل بنا",
      title: "وسيلني معاك",
      heroTitle: "لنُسَهّل التنقل بين الطلاب",
      heroSubtitle: "وسيلني معاك — حل تعاوني، اقتصادي وبيئي",
      heroButton: "اكتشف التطبيق",
      objectivesTitle: "الأهداف",
      objective1Title: "خفض التكاليف",
      objective1Desc: "شارك تكاليف النقل لتوفير المال.",
      objective2Title: "انبعاثات أقل من CO₂",
      objective2Desc: "قلل بصمتك الكربونية عبر التنقل المشترك.",
      objective3Title: "المساعدة والالتزام",
      objective3Desc: "شجع التضامن واحترام المواعيد بين الطلاب.",
      featuresTitle: "الميزات الرئيسية",
      feature1Title: "تسجيل الدخول عبر البريد الجامعي",
      feature1Desc: "تسجيل آمن لضمان مجتمع موثوق.",
      feature2Title: "البحث ونشر الرحلات",
      feature2Desc: "اعرض أو احجز رحلة بسهولة.",
      feature3Title: "نظام تقييم بين الطلاب",
      feature3Desc: "تقييمات وتعليقات لتعزيز الثقة.",
      feature4Title: "واجهة مستخدم سهلة",
      feature4Desc: "تجربة استخدام بسيطة وسلسة.",
      MaquettesTitle: "النماذج",
      ContactTitle: "اتصل بنا"
    },
    es: {
      RegistreTitle: "Crear cuenta",
      ConfirmPassword: "Confirmar contraseña",

      loginTitle: "Iniciar sesión",
      Password:"Contraseña",
      ButtonLogin:"Iniciar sesión",
      Login:"Iniciar sesión",
      Registre:"Crear cuenta",
      Email: "Correo electrónico",
      Nom: "Nombre",
      Message: "Mensaje",
      ButtonEnvoyer: "Enviar",
      copyright: "© 2023 Waselni m3ak. Todos los derechos reservados.",
      contactNous: "Contáctanos",
      title: "Waselni m3ak",
      heroTitle: "Facilitamos el trayecto entre estudiantes",
      heroSubtitle: "Waselni m3ak — Una solución solidaria, económica y ecológica",
      heroButton: "Descubre la aplicación",
      objectivesTitle: "Objetivos",
      objective1Title: "Reducción de costes",
      objective1Desc: "Comparte los gastos de transporte para ahorrar dinero.",
      objective2Title: "Menos CO₂",
      objective2Desc: "Reduce tu huella de carbono compartiendo trayectos.",
      objective3Title: "Ayuda y puntualidad",
      objective3Desc: "Fomenta la solidaridad y el respeto de los horarios entre estudiantes.",
      featuresTitle: "Funciones clave",
      feature1Title: "Autenticación mediante correo universitario",
      feature1Desc: "Inicio de sesión seguro para una comunidad confiable.",
      feature2Title: "Buscar y publicar trayectos",
      feature2Desc: "Ofrece o reserva un viaje en pocos clics.",
      feature3Title: "Sistema de valoraciones entre estudiantes",
      feature3Desc: "Opiniones para aumentar la confianza.",
      feature4Title: "Interfaz intuitiva",
      feature4Desc: "Una experiencia sencilla y fluida.",
      MaquettesTitle: "Maquetas",
      ContactTitle: "Contacto"
    },
    de: {
      RegistreTitle: "Konto erstellen",
      ConfirmPassword: "Passwort bestätigen",
      loginTitle: "Anmeldung",
      Password:"Passwort",
      ButtonLogin:"Einloggen",

      Login:"Anmelden",
      Registre:"Konto erstellen",
      Email: "E-Mail",
      Nom: "Name",
      Message: "Nachricht",
      ButtonEnvoyer: "Senden",
      copyright: "© 2023 Waselni m3ak. Alle Rechte vorbehalten.",
      contactNous: "Kontaktieren Sie uns",
      title: "Waselni m3ak",
      heroTitle: "Erleichtern wir das Pendeln unter Studierenden",
      heroSubtitle: "Waselni m3ak — Eine solidarische, wirtschaftliche und ökologische Lösung",
      heroButton: "App entdecken",
      objectivesTitle: "Ziele",
      objective1Title: "Kosten senken",
      objective1Desc: "Teilen Sie die Transportkosten und sparen Sie Geld.",
      objective2Title: "Weniger CO₂",
      objective2Desc: "Reduzieren Sie Ihren CO₂-Fußabdruck durch Mitfahrgelegenheiten.",
      objective3Title: "Hilfe & Pünktlichkeit",
      objective3Desc: "Fördern Sie Solidarität und Pünktlichkeit unter Studierenden.",
      featuresTitle: "Wichtige Funktionen",
      feature1Title: "Anmeldung mit Uni-E-Mail",
      feature1Desc: "Sichere Anmeldung für eine vertrauenswürdige Gemeinschaft.",
      feature2Title: "Fahrten suchen und anbieten",
      feature2Desc: "Bieten oder buchen Sie Fahrten mit wenigen Klicks.",
      feature3Title: "Bewertungssystem für Studierende",
      feature3Desc: "Bewertungen und Rückmeldungen für mehr Vertrauen.",
      feature4Title: "Intuitive Benutzeroberfläche",
      feature4Desc: "Eine einfache und flüssige Nutzererfahrung.",
      MaquettesTitle: "Entwürfe",
      ContactTitle: "Kontakt"
    }
  };
  const Logintoggle=()=>{
      setShowLogin(!showLogin);
      setShowRegister(false);
      setIsMobileMenuOpen(false);
    
  }
  const Registertoggle=()=>{
    setShowLogin(false);
    setShowRegister(!showRegister);
    setIsMobileMenuOpen(false);

  }

  
  

  useEffect(() => {
    document.title = translations[language].title;
    localStorage.setItem('darkMode', darkMode ? 'enabled' : 'disabled');
  }, [language, darkMode]);

  const changeLanguageHandler = (event) => {
    setLanguage(event.target.value);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>      
    <nav className={`flex flex-wrap items-center justify-between p-4  shadow-md sticky top-0 z-50 transition-colors duration-300 ${darkMode ? ' bg-gray-800 text-white' : 'bg-white text-gray-800 '}`}  role="navigation" aria-label="Menu principal">
    <div className="flex items-center space-x-4">
      <img src="logo.webp" alt="Logo EST Oujda" className="h-20 w-40 w-auto" />
         </div>
    <button id="hamburger" aria-label="Toggle menu" aria-expanded={isMobileMenuOpen} aria-controls="mobileMenu" className="xl:hidden focus:outline-none" onClick={toggleMobileMenu}>
      <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 text-blue-700 ${darkMode ? 'text-white' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
    <div className={`hidden xl:flex space-x-8 text-black font-semibold ${darkMode ? 'text-white' : ''}`} id="desktopMenu">
      <div className="flex items-center space-x-4">
        <a href="#home" className="hover:text-green-600 hover:text-green-400 transition">{translations[language].heroTitle}</a>
      <a href="#features" className="hover:text-green-600 hover:text-green-400 transition">{translations[language].featuresTitle}</a>
      <a href="#objectives" className="hover:text-green-600 hover:text-green-400 transition">{translations[language].objectivesTitle}</a>
      <a href="#gallery" className="hover:text-green-600 hover:text-green-400 transition">{translations[language].MaquettesTitle}</a>
      <a href="#contactUs" className="hover:text-green-600 hover:text-green-400 transition">{translations[language].ContactTitle}</a>
      
      <button id="darkModeToggle" aria-label="Toggle dark mode" className={`text-blue-700 hover:text-green-600 ${darkMode ? 'text-white hover:text-green-400' : ''} transition focus:outline-none`} onClick={toggleDarkMode}>
        <svg id="sunIcon" xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${darkMode ? '' : 'hidden'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-9h-1M4.34 12h-1m15.07 6.07l-.7-.7M6.34 6.34l-.7-.7m12.02 12.02l-.7-.7M6.34 17.66l-.7-.7M12 7a5 5 0 100 10 5 5 0 000-10z" />
        </svg>
        <svg id="moonIcon" xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${darkMode ? 'hidden' : ''}`} fill="currentColor" viewBox="0 0 24 24" stroke="none" aria-hidden="true">
          <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
        </svg>
      </button>
      <svg width="20px" height="20px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="languageIconTitle"  stroke="#0000ff" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#0000ff"> <title id="languageIconTitle">Language</title> <circle cx="12" cy="12" r="10"/> <path stroke-linecap="round" d="M12,22 C14.6666667,19.5757576 16,16.2424242 16,12 C16,7.75757576 14.6666667,4.42424242 12,2 C9.33333333,4.42424242 8,7.75757576 8,12 C8,16.2424242 9.33333333,19.5757576 12,22 Z"/> <path stroke-linecap="round" d="M2.5 9L21.5 9M2.5 15L21.5 15"/> </svg>
      <select id="languageSelector" className={` border border-gray-300 px-4 py-2 rounded-full ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-blue-700'}`} value={language} onChange={changeLanguageHandler}>
        <option value="fr">Français</option>
        <option value="en">English</option>
        <option value="de">Deutsch</option>
        <option value="es">Español</option>
        <option value="ar">العربية</option>
      </select>
      <button className={`bg-blue-700 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded-full transition ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : ''}`} id="loginButton" onClick={Logintoggle}>{translations[language].Login}</button>
      <button className={`bg-blue-700 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded-full transition ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : ''}`} id="registerButton" onClick={Registertoggle}>{translations[language].Registre}</button>
    </div>
    </div>
   
  </nav>

  <div id="mobileMenu" className={`${isMobileMenuOpen ? 'flex' : 'hidden'} xl:hidden flex-col space-y-8 p-8  bg-gray-900 text-white shadow-md`} role="menu" aria-label="Menu mobile">
    <a href="#home" className="hover:text-green-600 hover:text-green-400 transition text-sm" role="menuitem">{translations[language].heroTitle}</a>
    <a href="#features" className="hover:text-green-600 hover:text-green-400 transition text-sm" role="menuitem">{translations[language].featuresTitle}</a>
    <a href="#objectives" className="hover:text-green-600 hover:text-green-400 transition text-sm" role="menuitem">{translations[language].objectivesTitle}</a>
    <a href="#gallery" className="hover:text-green-600 hover:text-green-400 transition text-sm" role="menuitem">Maquettes</a>
    <a href="#contactUs" className="hover:text-green-600 hover:text-green-400 transition text-sm" role="menuitem">Contact</a>
    <div className="  lg:justify-end md:justify-end flex items-center space-x-2">
       
      <button id="darkModeToggle" aria-label="Toggle dark mode" className={`text-blue-700 hover:text-green-600 ${darkMode ? 'text-white hover:text-green-400' : ''} transition focus:outline-none`} onClick={toggleDarkMode}>
        <svg id="sunIcon" xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${darkMode ? '' : 'hidden'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-9h-1M4.34 12h-1m15.07 6.07l-.7-.7M6.34 6.34l-.7-.7m12.02 12.02l-.7-.7M6.34 17.66l-.7-.7M12 7a5 5 0 100 10 5 5 0 000-10z" />
        </svg>
        <svg id="moonIcon" xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${darkMode ? 'hidden' : ''}`} fill="currentColor" viewBox="0 0 24 24" stroke="none" aria-hidden="true">
          <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
        </svg>
      </button>
      <svg width="20px" height="20px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="languageIconTitle"  stroke="#0000ff" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#0000ff"> <title id="languageIconTitle">Language</title> <circle cx="12" cy="12" r="10"/> <path stroke-linecap="round" d="M12,22 C14.6666667,19.5757576 16,16.2424242 16,12 C16,7.75757576 14.6666667,4.42424242 12,2 C9.33333333,4.42424242 8,7.75757576 8,12 C8,16.2424242 9.33333333,19.5757576 12,22 Z"/> <path stroke-linecap="round" d="M2.5 9L21.5 9M2.5 15L21.5 15"/> </svg>
      <select id="languageSelector" className={` text-sm  border border-gray-300 px-2 py-1 rounded-full ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-blue-700  '}`} value={language} onChange={changeLanguageHandler}>
        <option value="fr">Français</option>
        <option value="en">English</option>
        <option value="de">Deutsch</option>
        <option value="es">Español</option>
        <option value="ar">العربية</option>
      </select>
      <button className={`bg-blue-700 hover:bg-blue-600 text-sm text-white font-bold px-2 py-1 rounded-full transition ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : ''}`} id="loginButton" onClick={Logintoggle}>{translations[language].Login}</button>
      <button className={`bg-blue-700 hover:bg-blue-600 text-sm  text-white font-bold px-2 py-1 rounded-full transition ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : ''}`} id="registerButton" onClick={Registertoggle}>{translations[language].Registre}</button>
    </div>
  </div> {showLogin && <section id="login" className={`h-screen w-full py-20 bg-gray-50 ${darkMode ? 'bg-gray-800 text-white' : ''}`}>
    <div className="container mx-auto px-6 max-w-lg">
      <h2 className={`text-3xl font-extrabold text-gray-800 mb-8 text-center ${darkMode ? 'text-white' : ''}`}>
        {translations[language].loginTitle}
      </h2>
      <form id="loginForm" className={` p-8 rounded-lg shadow-md ${darkMode ? 'bg-gray-700 text-white' : 'bg-white'}`} noValidate>
        <div className="mb-4">
          <label htmlFor="email" className={`block font-semibold mb-2 ${darkMode ? 'text-gray-200' : ' text-gray-700'}`}>
            {translations[language].Email}
          </label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'bg-gray-800 border-gray-600 focus:ring-blue-400 text-white' : ''}`} 
          />
          <p className="text-red-600 text-sm mt-1 hidden" id="emailError">Veuillez entrer un email valide.</p>
        </div>

        <div className="mb-4">
          <label htmlFor="password" className={`block  font-semibold mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
            {translations[language].Password}
          </label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            required 
            className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'bg-gray-800 border-gray-600 focus:ring-blue-400 text-white' : ''}`} 
          />
          <p className="text-red-600 text-sm mt-1 hidden" id="passwordError">Veuillez entrer un mot de passe.</p>
        </div>

        <div className="mb-10 flex items-center justify-center">
          <button type="submit" className="my-30  bg-blue-700 hover:bg-green-600 text-white font-bold py-2 px-10 rounded-full transition bg-blue-600 hover:bg-green-500">
            {translations[language].ButtonLogin}
          </button>
          <p className="text-green-600 font-semibold hidden" id="successMessage">Connexion réussie !</p>
        </div>
      </form>
    </div>
  </section>}
  {showRegister && (
      <section id="register" className={`h-screen w-full py-20  ${darkMode ? ' bg-gray-800 text-white ' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-6 max-w-lg">
          <h2 className={`text-3xl font-extrabold text-gray-800 mb-8 text-center ${darkMode ? 'text-white' : ''}`}>
            {translations[language].RegistreTitle}
          </h2>
          <form id="registerForm" className={` p-8 rounded-lg shadow-md ${darkMode ? 'bg-gray-700 text-white' : 'bg-white'}`} noValidate>
            <div className="mb-4">
              <label htmlFor="username" className={`block  font-semibold mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                {translations[language].Nom}
              </label>
              <input 
                type="text" 
                id="username" 
                name="username" 
                required 
                className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'bg-gray-800 border-gray-600 focus:ring-blue-400 text-white' : ''}`} 
              />
            </div>
  
            <div className="mb-4">
              <label htmlFor="emailRegister" className={`block  font-semibold mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                {translations[language].Email}
              </label>
              <input 
                type="email" 
                id="emailRegister" 
                name="email" 
                required 
                className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'bg-gray-800 border-gray-600 focus:ring-blue-400 text-white' : ''}`} 
              />
            </div>
  
            <div className="mb-4">
              <label htmlFor="passwordRegister" className={`block  font-semibold mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                {translations[language].Password}
              </label>
              <input 
                type="password" 
                id="passwordRegister" 
                name="password" 
                required 
                className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'bg-gray-800 border-gray-600 focus:ring-blue-400 text-white' : ''}`} 
              />
            </div>
            <div className="mb-4">
              <label htmlFor="passwordRegister" className={`block  font-semibold mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                {translations[language].ConfirmPassword}
              </label>
              <input 
                type="password" 
                id="passwordRegister" 
                name="password" 
                required 
                className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'bg-gray-800 border-gray-600 focus:ring-blue-400 text-white' : ''}`} 
              />
            </div>
  
            <div className="mb-10 flex items-center justify-center">
              <button type="submit" className="bg-blue-700 hover:bg-green-600 text-white font-bold py-2 px-10 rounded-full transition bg-blue-600 hover:bg-green-500">
                {translations[language].Registre}
              </button>
            </div>
          </form>
        </div>
      </section>
    )}
   {!showLogin && !showRegister && (
      <div className={` text-gray-800 transition-colors duration-300 ${darkMode ? ' bg-gray-800 text-white' : 'bg-white'}`} aria-label="Page principale Waselni m3ak">

     

        <section id="home" className={`relative  text-white ${darkMode ? 'bg-gray-800 text-white' : ''}`}>
    
          <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className={`text-5xl md:text-5xl font-extrabold text-black  mb-4 leading-tight  ${darkMode ? 'bg-gray-800 text-white' : ''}`} id="heroTitle">{translations[language].heroTitle}</h1>
              <p className={`text-lg md:text-xl font-extrabold text-black  mb-4 leading-tight  my-8   ${darkMode ? 'bg-gray-800 text-white' : ''}`} id="heroSubtitle">{translations[language].heroSubtitle}</p>
              <a href="#features" className={`inline-block bg-blue-200 text-black my-8   font-bold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : ''}`} id="heroButton">{translations[language].heroButton}</a>
            </div>
            <div className="md:w-full mt-10 md:mt-0 flex justify-center">
              <img src="images.png" alt="Mockup de l'application mobile" className="w-full h-full rounded-lg shadow-lg" loading="lazy" />
            </div>
          </div>
        </section>


        <section id="features" className={`py-16 ${darkMode ? 'bg-gray-800 text-white' : ' bg-white'}`}>
          <div className="container mx-auto px-6 text-center">
            <h2 className={`text-5xl md:text-5xl font-extrabold text-black  mb-4 leading-tight  ${darkMode ? 'bg-gray-800 text-white' : ''}`} id="featuresTitle">{translations[language].featuresTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              <div className={`bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition ${darkMode ? 'bg-gray-700 text-white' : ''}`}>
                <div className="w-full h-1/2">
                <img src="https://www.ionos.fr/digitalguide/fileadmin/DigitalGuide/E-Mail/e-mail-postfach-c.jpg" className={`h-full w-full rounded-lg  text-blue-600 mb-2 ${darkMode ? 'text-blue-400' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true" />
               
                </div>   
                <h3 className={`text-xl font-semibold text-blue-700 mb-4 ${darkMode ? 'text-blue-400' : ''}`} id="feature1Title">{translations[language].feature1Title}</h3>
                <p className={` ${darkMode ? 'text-gray-200' : 'text-gray-600'}`} id="feature1Desc">{translations[language].feature1Desc}</p>
              </div>
              <div className={`bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition ${darkMode ? 'bg-gray-700 text-white' : ''}`}>
              <div className="w-full h-1/2">
              <img src="https://www.weblex.fr/sites/default/files/images/flux_actus/applimobile.jpg" className={` h-full w-full rounded-lg text-blue-600 mb-2 ${darkMode ? 'text-blue-400' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true" />
                </div>

                <h3 className={`text-xl font-semibold text-green-700 mb-4 ${darkMode ? 'text-green-400' : ''}`} id="feature2Title">{translations[language].feature2Title}</h3>
                <p className={` ${darkMode ? 'text-gray-200' : 'text-gray-600'}`} id="feature2Desc">{translations[language].feature2Desc}</p>
              </div>
              <div className={`bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition ${darkMode ? 'bg-gray-700 text-white' : ''}`}>
              <div className="w-full h-1/2">
              <img src="https://www.klarahr.com/blog/wp-content/uploads/2024/10/6422bf4379a047d3713c91f8_62c55054045d30827bd08057_systeCC80me20d27eCC81valuation202.png" className={`h-full w-full rounded-lg  text-blue-600 mb-2 ${darkMode ? 'text-blue-400' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true" />
              </div>
                <h3 className={`text-xl font-semibold text-yellow-700 mb-4 ${darkMode ? 'text-yellow-400' : ''}`} id="feature3Title">{translations[language].feature3Title}</h3>
                <p className={`${darkMode ? 'text-gray-200' : 'text-gray-600 '}`} id="feature3Desc">{translations[language].feature3Desc}</p>
              </div>
              <div className={`bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition ${darkMode ? 'bg-gray-700 text-white' : ''}`}>
              <div className="w-full h-1/2">
              <img src="https://www.icoderzsolutions.com/blog/wp-content/uploads/2019/03/Intuitive-UI-For-Gratifying-UX-Blog-Post-.jpg" className={`h-full w-full rounded-lg text-blue-600 mb-2 ${darkMode ? 'text-blue-400' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true" />
              </div>
                <h3 className={`text-xl font-semibold text-red-700 mb-4 ${darkMode ? 'text-red-400' : ''}`} id="feature4Title">{translations[language].feature4Title}</h3>
                <p className={` ${darkMode ? 'text-gray-200' : 'text-gray-600'}`} id="feature4Desc">{translations[language].feature4Desc}</p>
              </div>
            </div>
          </div>
        </section>
        
        <section id="objectives" className={`py-16 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-50 '}`}>
          <div className="container mx-auto px-6 text-center">
            <h2 className={`text-5xl md:text-5xl font-extrabold text-black  mb-4 leading-tight  ${darkMode ? 'bg-gray-800 text-white' : ''}`} id="objectivesTitle">{translations[language].objectivesTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
              <div className={`p-8 rounded-lg shadow hover:shadow-lg transition ${darkMode ? 'bg-gray-700 text-white' : 'bg-white '}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className={`mx-auto h-16 w-16 text-blue-600 mb-4 ${darkMode ? 'text-blue-400' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3v5h6v5a3 3 0 01-3 3z" />
                </svg>
                <h3 className={`text-xl font-semibold mb-2  ${darkMode ? 'text-blue-400' : 'text-blue-700'}`} id="objective1Title">{translations[language].objective1Title}</h3>
                <p className={`${darkMode ? 'text-gray-200' : 'text-gray-600 '}`} id="objective1Desc">{translations[language].objective1Desc}</p>
              </div>
              <div className={`p-8 rounded-lg shadow hover:shadow-lg transition ${darkMode ? 'bg-gray-700 text-white' : 'bg-white '}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className={`mx-auto h-16 w-16 text-green-600 mb-4 ${darkMode ? 'text-green-400' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m0 0a3 3 0 013 3v5H9v-5a3 3 0 013-3z" />
                </svg>
                <h3 className={`text-xl font-semibold mb-2 text-green-700 ${darkMode ? 'text-green-400' : ''}`} id="objective2Title">{translations[language].objective2Title}</h3>
                <p className={`${darkMode ? 'text-gray-200' : 'text-gray-600 '}`}  id="objective2Desc">{translations[language].objective2Desc}</p>
              </div>
              <div className={`p-8 rounded-lg shadow hover:shadow-lg transition ${darkMode ? 'bg-gray-700 text-white' : 'bg-white '}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className={`mx-auto h-16 w-16 text-yellow-600 mb-4 ${darkMode ? 'text-yellow-400' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 12V8l4 4m0 0l4-4m-4 4l-4-4" />
                </svg>
                <h3 className={`text-xl font-semibold mb-2 text-yellow-700 ${darkMode ? 'text-yellow-400' : ''}`} id="objective3Title">{translations[language].objective3Title}</h3>
                <p className={`${darkMode ? 'text-gray-200' : 'text-gray-600 '}`}  id="objective3Desc">{translations[language].objective3Desc}</p>
              </div>
            </div>
          </div>
        </section>
        <section id="contactUs" className={`py-20  ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-6 max-w-lg">
            <h2 className={`text-3xl font-extrabold   mb-8 text-center ${darkMode ? ' text-white' : 'text-gray-800'}`}>{translations[language].contactNous}</h2>
            <form id="contactForm" className={` p-8 rounded-lg shadow-md ${darkMode ? 'bg-gray-700 text-white' : 'bg-white'}`} noValidate>
              <div className="mb-4">
                <label htmlFor="name" className={`block font-semibold mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-700 '}`}>{translations[language].Nom}</label>
                <input type="text" id="name" name="name" required className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'bg-gray-800 border-gray-600 focus:ring-blue-400 text-white' : ''}`} />
                <p className="text-red-600 text-sm mt-1 hidden" id="nameError">Veuillez entrer votre nom.</p>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className={`block font-semibold mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-700 '}`}>{translations[language].Email}</label>
                <input type="email" id="email" name="email" required className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'bg-gray-800 border-gray-600 focus:ring-blue-400 text-white' : ''}`} />
                <p className="text-red-600 text-sm mt-1 hidden" id="emailError">Veuillez entrer un email valide.</p>
              </div>
              <div className="mb-4">
                <label htmlFor="message" className={`block font-semibold mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-700 '}`}>{translations[language].Message}</label>
                <textarea id="message" name="message" rows="4" required className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'bg-gray-800 border-gray-600 focus:ring-blue-400 text-white' : ''}`}></textarea>
                <p className="text-red-600 text-sm mt-1 hidden" id="messageError">Veuillez entrer un message.</p>
              </div>
              <div className="mb-4 flex items-center justify-between ">

              <button type="submit" className="bg-blue-700 hover:bg-green-600 text-white font-bold py-2 float-right px-10 rounded-full transition bg-blue-600 hover:bg-green-500">{translations[language].ButtonEnvoyer}</button>
              <p className=" text-green-600 font-semibold hidden" id="successMessage">Message envoyé avec succès !</p>
              </div>
              
            </form>
          </div>
        </section>

        <footer className={` py-6 mt-16 shadow-inner ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
          <div className="container mx-auto px-6 text-center">
            <p>{translations[language].copyright}</p>
          </div>
        </footer>
      </div>)}
    </>
  );
}

export default App;