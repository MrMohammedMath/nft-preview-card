export default function Card() {
    return (
        <div className="card">
            <div className="card.image">
                <img src="./images/image-equilibrium.jpg" alt="nft" className="card.image.view" />
                <div className="card.image.filter">
                    <div className="card.image.filter.color"></div>
                    <img src="./images/icon-view.svg" alt="" className="card.image.filter.icon" />
                </div>
            </div>

            <h1 className="card.title">Equilibrium #3429</h1>
            <p className="card.paragraph">
                Our Equilibrium collection promotes balance and calm.
            </p>
            <div className="card.status">
                <div className="card.status.price">
                    <img src="./images/icon-ethereum.svg" alt="" className="card.status.price.icon" />
                    0.041 ETH
                </div>

                <div className="card.status.time-left">
                    <img src="./images/icon-clock.svg" alt="" className="card.status.time-left.icon" />
                    3 days left
                </div>
            </div>

            <div className="card.about">
                <img src="./images/image-avatar.png" alt="avatar" className="card.about.avatar" />
                Creation of &nbsp;<span className="card.about.author">Jules Wyvern</span>
            </div>
        </div>
    );
}