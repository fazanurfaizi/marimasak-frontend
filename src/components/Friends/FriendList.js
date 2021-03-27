import ChatBox from '../Chat/ChatBox'
import profile from '../../assets/images/Annie.PNG'

const FriendList = () => {
    return (
        <div className="widget friend-list stick-widget d-none d-sm-block">
            <h4 className="widget-title">Friends</h4>
            <div id="searchDir"></div>
            <ul id="people-list" className="friendz-list">
                <li>
                    <figure>
                        <img src={profile} alt="annie" />
                        <span className="status f-online"></span>
                    </figure>
                    <div className="friendz-meta">
                        <a href="time-line.html">Syarif Hidayat</a>
                        <i><a href="https://wpkixx.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="c2b5abacb6a7b0b1adaea6a7b082a5afa3abaeeca1adaf">[email&#160;protected]</a></i>
                    </div>
                </li>
                <li>
                    <figure>
                        <img src={profile} alt="annie" />
                        <span className="status f-away"></span>
                    </figure>
                    <div className="friendz-meta">
                        <a href="time-line.html">Faza Nurfaizi</a>
                        <i><a href="https://wpkixx.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="2f4d4e5d414a5c6f48424e4643014c4042">[email&#160;protected]</a></i>
                    </div>
                </li>
                <li>
                    <figure>
                        <img src={profile} alt="annie" />
                        <span className="status f-off"></span>
                    </figure>
                    <div className="friendz-meta">
                        <a href="time-line.html">Aulia Agustina</a>
                        <i><a href="https://wpkixx.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="90faf1e3fffef2d0f7fdf1f9fcbef3fffd">[email&#160;protected]</a></i>
                    </div>
                </li>
                <li>
                    <figure>
                        <img src={profile} alt="annie" />
                        <span className="status f-off"></span>
                    </figure>
                    <div className="friendz-meta">
                        <a href="time-line.html">Taufik Muhammad</a>
                        <i><a href="https://wpkixx.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="f19b90829e9f93b1969c90989ddf929e9c">[email&#160;protected]</a></i>
                    </div>
                </li>
                <li>
                    
                    <figure>
                        <img src={profile} alt="annie" />
                        <span className="status f-online"></span>
                    </figure>
                    <div className="friendz-meta">
                        <a href="time-line.html">Raden Daffa</a>
                        <i><a href="https://wpkixx.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="88e2e9fbe7e6eac8efe5e9e1e4a6ebe7e5">[email&#160;protected]</a></i>
                    </div>
                </li>
                <li>
                    
                    <figure>
                        <img src={profile} alt="annie" />
                        <span className="status f-away"></span>
                    </figure>
                    <div className="friendz-meta">
                        <a href="time-line.html">Muhammad Fachri</a>
                        <i><a href="https://wpkixx.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="e882899b87868aa88f85898184c68b8785">[email&#160;protected]</a></i>
                    </div>
                </li>
            </ul>

            <ChatBox />
        </div>
    )
}

export default FriendList
