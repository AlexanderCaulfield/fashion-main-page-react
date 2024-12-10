import './community.css';

const Community = () => {
    return (
        <section className="community">
            <div className="container">
                <div className="community__header">
                    JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
                </div>
                <div className="community__text">
                    Type your email down below and be young wild generation
                </div>
                </div>
                <div className="community__input-container">
                    <input type="text" placeholder="Add your email here" />
                    <div className="community__btn">
                        SEND
                    </div>
                </div>
        </section>
    );
}
 
export default Community;