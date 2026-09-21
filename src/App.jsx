import { useState } from 'react';
import Button from './components/Button/Button';
import FieldCard from './components/FieldCard/FieldCard';
import InputField from './components/InputField/InputField';
import Accordion from './components/Accordion/Accordion';
import { fields } from './data/fields';
import styles from './App.module.css';

function App() {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');

  const handleDetails = (field) => {
    console.log('Details for:', field.title);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Register:', { email, fullName });
  };

  const forecast = [
    {
      day: 'Today Sep 4',
      temp: '+24°C',
      precipitation: 'None (0.0 mm)',
      humidity: '45%',
      wind: 'Wind: 4.2 m/s NE',
    },
    {
      day: 'Tomorrow Sep 5',
      temp: '+22°C',
      precipitation: 'Light rain (1.2 mm)',
      humidity: '58%',
      wind: 'Wind: 3.1 m/s N',
    },
    {
      day: 'Day after Sep 6',
      temp: '+20°C',
      precipitation: 'Cloudy (0.0 mm)',
      humidity: '61%',
      wind: 'Wind: 2.4 m/s NW',
    },
  ];

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.logo}>Agrodnevnik</div>
        <nav className={styles.nav}>
          <a href="#fields">Fields</a>
          <a href="#weather">Weather</a>
          <a href="#recs">Recommendations</a>
        </nav>
        <Button variant="outline" onClick={() => console.log('Profile click')}>
          Profile
        </Button>
      </header>

      <section className={styles.hero}>
        <h1>Smart Farming Assistant with AI</h1>
        <p>Analyze fields, predict irrigation, increase yields up to 30%</p>
        <Button variant="primary" onClick={() => console.log('Start Now')}>
          Start Now
        </Button>
      </section>

      <section id="fields" className={styles.section}>
        <h2 className={styles.sectionTitle}>Fields Overview</h2>
        <div className={styles.grid}>
          {fields.map((field) => (
            <FieldCard
              key={field.id}
              title={field.title}
              crop={field.crop}
              moisture={field.moisture}
              status={field.status}
              onDetails={() => handleDetails(field)}
            />
          ))}
        </div>
      </section>

      <section id="weather" className={styles.section}>
        <h2 className={styles.sectionTitle}>3-Day Forecast</h2>
        <div className={styles.forecast}>
          {forecast.map((day) => (
            <div key={day.day} className={styles.forecastRow}>
              <div className={styles.forecastHeader}>
                <span>{day.day}</span>
                <span className={styles.temp}>{day.temp}</span>
              </div>
              <div className={styles.forecastMeta}>
                <span>Precipitation: {day.precipitation}</span>
                <span>Humidity: {day.humidity}</span>
                <span>{day.wind}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="recs" className={styles.section}>
        <h2 className={styles.sectionTitle}>Get AI Recommendations</h2>
        <p className={styles.subtitle}>
          Enter your details and start receiving smart recommendations about
          your fields.
        </p>

        <form className={styles.form} onSubmit={handleRegister}>
          <InputField
            label="Email"
            type="email"
            placeholder="you@example.com"
            onChange={setEmail}
          />
          <InputField
            label="Full Name"
            placeholder="John Doe"
            onChange={setFullName}
          />
          <Button variant="primary" type="submit">
            Register
          </Button>
        </form>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>FAQ</h2>
        <Accordion title="How is crop health calculated?" defaultOpen>
          Crop health combines moisture, weather, and recent field activity.
        </Accordion>
        <Accordion title="How often should I water my crops?">
          Recommended interval depends on the crop type, soil moisture, and the
          current weather forecast.
        </Accordion>
        <Accordion title="Can I export my data?">
          Yes. Data can be exported to CSV or PDF from the Settings section.
        </Accordion>
      </section>

      <footer className={styles.footer}>
        <span>© 2026 Agrodnevnik</span>
        <span>Smart Farming Assistant</span>
      </footer>
    </div>
  );
}

export default App;