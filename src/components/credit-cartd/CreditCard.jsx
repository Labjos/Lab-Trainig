import './Creditcard.css';
import visa from '../../assets/images/visa.png';
import master from '../../assets/images/master-card.svg';


function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
    const numberCard = `•••• •••• •••• ${number.slice(12)}`;
    const monthCard = expirationMonth < 10 ? `0${expirationMonth}` : expirationMonth;
    const yearcard = expirationYear.toString().slice(2); 

    
return (
    <div className='credit-card' style={{backgroundColor: `${bgColor}`, color: `${color}`}} >
        <img src={type === 'bankCard' ? visa : master} alt='credit card Image' className={type === 'bankCard' ? 'visaCard' : 'masterCard' } />
        <p className='credit-card-number'>{numberCard}</p>
        <div className='credit-card-two'>
            <div className='credit-card-expires'>
                <p className='text-expires'>Expires {monthCard}/{yearcard}</p>
                <p>{bank}</p>
            </div>
            <p className='credit-card-owner'>{owner}</p>

        </div>
    </div>
    );
}

export default CreditCard