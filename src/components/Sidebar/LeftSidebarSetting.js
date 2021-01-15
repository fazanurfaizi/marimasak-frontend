import { NavLink } from 'react-router-dom'

const LeftSidebarSetting = () => {
    return (
        <div className="col-lg-4">
            <aside className="sidebar static left d-none d-sm-none d-lg-block">
                <div className="widget">
                    <NavLink to="/settings" className="widget-title" title="Settings">Settings</NavLink>                              
                    <ul className="naves">                        
                        <li>
                            <i className="ti-settings"></i>
                            <NavLink to="/" title="Basic">Umum</NavLink>                            
                        </li>                        
                        <li>
                            <i className="ti-shield"></i>
                            <NavLink to="/" title="Security">Keamanan dan Info Login</NavLink>                            
                        </li>                        
                        <li>
                            <i className="ti-info"></i>
                            <NavLink to="/" title="info">Informasi Marimasak Anda</NavLink>   
                        </li>
                        <hr/>
                        <li>
                            <i className="ti-lock"></i>
                            <NavLink to="/" title="Privasi">Privasi</NavLink>                            
                        </li>                                                
                        <li>
                            <i className="ti-user"></i>
                            <NavLink to="/" title="Pengenalan Wajah">Pengenalan Wajah</NavLink>                            
                        </li>                                                
                        <li>
                            <i className="ti-clip"></i>
                            <NavLink to="/" title="Profile dan Penandaan">Profile dan Penandaan</NavLink>                            
                        </li>                                                
                        <li>
                            <i className="ti-world"></i>
                            <NavLink to="/" title="Postingan Publik">Postingan Publik</NavLink>                            
                        </li>                                                
                        <li>
                            <i className="ti-close"></i>
                            <NavLink to="/" title="Pemblokiran">Pemblokiran</NavLink>                            
                        </li>                                                
                        <li>
                            <i className="ti-location-pin"></i>
                            <NavLink to="/" title="Lokasi">Lokasi</NavLink>                            
                        </li>                                                
                        <li>
                            <i className="fa fa-language"></i>
                            <NavLink to="/" title="Bahasa dan Wilayah">Bahasa dan Wilayah</NavLink>                            
                        </li>                                                
                        <li>
                            <i className="ti-book"></i>
                            <NavLink to="/" title="Cerita">Cerita</NavLink>                            
                        </li>                            
                        <hr />   
                        <li>
                            <i className="ti-bell"></i>
                            <NavLink to="/" title="Notifikasi">Notifikasi</NavLink>                            
                        </li>
                        <li>
                            <i className="ti-tablet"></i>
                            <NavLink to="/" title="Seluler">Seluler</NavLink>                            
                        </li>
                        <hr />             
                        <li>
                            <i className="ti-cloud"></i>
                            <NavLink to="/" title="Aplikasi dan Situs Web">Aplikasi dan Situs Web</NavLink>                            
                        </li>
                        <li>
                            <i className="ti-agenda"></i>
                            <NavLink to="/" title="Integrasi Bisnis">Integrasi Bisnis</NavLink>                            
                        </li>
                        <li>
                            <i className="ti-flag-alt-2"></i>
                            <NavLink to="/" title="Iklan">Iklan</NavLink>                            
                        </li>
                        <li>
                            <i className="ti-credit-card"></i>
                            <NavLink to="/" title="Pembayaran Iklan">Pembayaran Iklan</NavLink>                            
                        </li>
                        <li>
                            <i className="ti-money"></i>
                            <NavLink to="/" title="Pembayaran">Pembayaran</NavLink>                            
                        </li>
                        <li>
                            <i className="ti-home"></i>
                            <NavLink to="/" title="Kotak Masuk Dukungan">Kotak Masuk Dukungan</NavLink>                            
                        </li>
                        <li>
                            <i className="ti-video-camera"></i>
                            <NavLink to="/" title="Video">Video</NavLink>                            
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    )
}

export default LeftSidebarSetting
