import { useState, useRef } from 'react';

import './Facebook.css';
import profiles from '../../data/berlin.json';




function Facebook() {

    const countries = [ 'England', 'USA', 'Malaysia', 'Germany', 'Sweden', 'Nigeria', 'Italy', 'Scotland', 
    'Kazakhstan', 'Russia', 'Catalonia', 'France', 'Israel', 'Brazil', 'Taiwan', 'Turkey', 'Norway']
    
    const profileCardsRef = useRef([]);

    const [select, setSelect] = useState(null);

    const scrollToCountry = (country) => {
        if (select === country) {
            setSelect(null);
        } else {
            setSelect(country);
        
        const targetCard = profileCardsRef.current.find((card) => card.id === country);

        if (targetCard) {
            targetCard.scrollView({behavior: "smooth"});
        }
      }
    };

    const countryButtons = () => {
        return countries.map((country, index) => {
            return (
                <button
                key={index}
                id={country}
                className={select === country ? "highlighted" : ""}
                onClick={() => scrollToCountry(country)}
                >{country}</button>
            );
        });
    };

    const profileCards = () => {
        return profiles.map((profile, index) => {
            return (
                <div 
                key={index}
                className={`facebook ${select === profiles.country ? "highlighted" : ""}`}
                id={profiles.country}
                ref={(el) => (profileCardsRef.current[index] = el)}>
            
                <img src={profile.img} alt="profile image" className="facebook-img" />
                <div className="facebook-container">
                    <p><b>First Name</b>: {profile.firstName}</p>
                    <p><b>Last Name</b>: {profile.lastName}</p>
                    <p><b>Country</b>: {profile.country}</p>
                    <p><b>Type</b>: {profile.isStudent ? "Student" : "Teacher"}</p>
                </div>
            </div>
            );
        });
    }

    return (
    <div>
        {countryButtons()}
        {profileCards()}
    </div>
    );
}


export default Facebook;