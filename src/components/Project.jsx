import dealfinderImage from '../assets/images/dealfinder.png';

export default function Project() {
    return (
        <div className="row">
            <div className="col-lg-4 col-sm-12 mb-3 work-item relative">
                <div className="card img-card highlight-on-hover">
                    {/* Adjust the src attribute to point to the correct image path */}
                    <img className="card-img-top img-fluid img-container" src={dealfinderImage} alt="Scheduler Image" />

                    <div className="overlay">
                        <a className="option-link" href="https://github.com/blessing-o/DealFinder">Code</a>
                        <a className="option-link" href="https://blessing-o.github.io/DealFinder/">Demo</a>
                    </div>

                    <div className="card-body">
                        <p className="card-text">Deal Finder Project</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
