
import { Bookmark } from 'lucide-react'
const Card = () => {
    return (
        <div>
            <div className="card">
                <div className="top">
                    <img src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning-500x250.jpg" alt="" />
                    <button>Save <Bookmark size={13} /></button>
                </div>
                <div className="centre">
                    <h3>Amazon <span>5 days ago</span></h3>
                    <h2>Senior UI/UX Designer</h2>
                    <div>
                        <h4>Part-Time</h4>
                        <h4>Senior Level</h4>
                    </div>
                </div>
                <div className="bottom">
                    <div>
                        <div>
                            <h3>120$/hr</h3>
                            <p>Mumbai, India</p>
                        </div>
                        <button>Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card