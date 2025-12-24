import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import WhyParticipate from '../components/WhyParticipate';
import Prizes from '../components/Prizes';
import Details from '../components/Details';
import RegisterQR from '../components/RegisterQR';
import FAQ from '../components/FAQ';
import Sponsors from '../components/Sponsors';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    const handleRegister = () => {
        window.open('https://forms.gle/GPabwEze85byzdPT7', '_blank');
    };

    return (
        <div className="min-h-screen bg-background text-gray-100 font-sans selection:bg-primary/30 selection:text-white">
            <Navbar onRegisterClick={handleRegister} />

            <main>
                <Hero onRegisterClick={handleRegister} />
                <About />
                <WhyParticipate />
                <Prizes />
                <Details />
                <RegisterQR />
                <FAQ />
                <Sponsors />
            </main>

            <Footer />
        </div>
    );
};

export default Home;
