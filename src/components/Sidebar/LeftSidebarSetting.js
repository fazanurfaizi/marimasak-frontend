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
                            <NavLink to="/settings-basic" title="Basic">Umum</NavLink>                            
                        </li>                        
                        <li>
                            <i className="ti-shield"></i>
                            <NavLink to="/settings-security" title="Security">Keamanan dan Info Login</NavLink>                            
                        </li>                        
                        <li>
                            <i className="ti-info"></i>
                            <NavLink to="/settings-info" title="info">Informasi Marimasak Anda</NavLink>   
                        </li>
                        <hr/>
                        <li>
                            <i className="ti-lock"></i>
                            <NavLink to="/settings-privacy" title="Privasi">Privasi</NavLink>                            
                        </li>                                                
                        <li>
                            <i className="ti-user"></i>
                            <NavLink to="/settings-facerec" title="Pengenalan Wajah">Pengenalan Wajah</NavLink>                            
                        </li>                                                
                        <li>
                            <i className="ti-clip"></i>
                            <NavLink to="/settings-timeline" title="Profile dan Penandaan">Profile dan Penandaan</NavLink>                            
                        </li>                                                
                        <li>
                            <i className="ti-world"></i>
                            <NavLink to="/settings-posts" title="Postingan Publik">Postingan Publik</NavLink>                            
                        </li>                                                
                        <li>
                            <i className="ti-close"></i>
                            <NavLink to="/settings-blocking" title="Pemblokiran">Pemblokiran</NavLink>                            
                        </li>                                                
                        <li>
                            <i className="ti-location-pin"></i>
                            <NavLink to="/settings-location" title="Lokasi">Lokasi</NavLink>                            
                        </li>                                                
                        <li>
                            <i className="fa fa-language"></i>
                            <NavLink to="/settings-localization" title="Bahasa dan Wilayah">Bahasa dan Wilayah</NavLink>                            
                        </li>                                                
                        <li>
                            <i className="ti-book"></i>
                            <NavLink to="/settings-stories" title="Cerita">Cerita</NavLink>                            
                        </li>                            
                        <hr />   
                        <li>
                            <i className="ti-bell"></i>
                            <NavLink to="/settings-notifications" title="Notifikasi">Notifikasi</NavLink>                            
                        </li>
                        <li>
                            <i className="ti-tablet"></i>
                            <NavLink to="/settings-mobile" title="Seluler">Seluler</NavLink>                            
                        </li>
                        <hr />             
                        <li>
                            <i className="ti-cloud"></i>
                            <NavLink to="/settings-basic" title="Aplikasi dan Situs Web">Aplikasi dan Situs Web</NavLink>                            
                        </li>
                        <li>
                            <i className="ti-agenda"></i>
                            <NavLink to="/settings-basic" title="Integrasi Bisnis">Integrasi Bisnis</NavLink>                            
                        </li>
                        <li>
                            <i className="ti-flag-alt-2"></i>
                            <NavLink to="/settings-basic" title="Iklan">Iklan</NavLink>                            
                        </li>
                        <li>
                            <i className="ti-credit-card"></i>
                            <NavLink to="/settings-basic" title="Pembayaran Iklan">Pembayaran Iklan</NavLink>                            
                        </li>
                        <li>
                            <i className="ti-money"></i>
                            <NavLink to="/settings-basic" title="Pembayaran">Pembayaran</NavLink>                            
                        </li>
                        <li>
                            <i className="ti-home"></i>
                            <NavLink to="/settings-basic" title="Kotak Masuk Dukungan">Kotak Masuk Dukungan</NavLink>                            
                        </li>
                        <li>
                            <i className="ti-video-camera"></i>
                            <NavLink to="/settings-basic" title="Video">Video</NavLink>                            
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    )
}

export default LeftSidebarSetting
