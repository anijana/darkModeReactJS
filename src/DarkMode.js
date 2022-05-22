import React, { useEffect,useState } from "react";

const DarkMode = () => {
    const [theme, setTheme] = useState('light-theme')
  const toggleTheme = () => {
      theme === "dark-theme" ? setTheme('light-theme') : setTheme('dark-theme')
    
  };

  useEffect(()=> {
      document.body.className = theme;
  }, [theme])

  return (
    <>
      <header>
        <a
          href="https://www.kindpng.com/imgv/Twbbhxh_dark-mode-logo-png-transparent-png/"
          alt="logo"
        >
          DarkModeWeb
        </a>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <div className="container grid grid-two-column">
            <div className="hero-section-data">
              <h1>Toggle Dark Mode</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptate quia earum, facere dicta architecto obcaecati quidem
                fugiat repellat eaque blanditiis praesentium in odit, ratione
                corporis dignissimos quaerat iure accusamus necessitatibus.
              </p>
              <a className="btn" onClick={() => toggleTheme()}>
                Toggle Mode
              </a>
            </div>
            <div className="hero-section-image">
              <img
                src="https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?cs=srgb&dl=pexels-djordje-petrovic-2102415.jpg&fm=jpg"
                alt="programmer img"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default DarkMode;
