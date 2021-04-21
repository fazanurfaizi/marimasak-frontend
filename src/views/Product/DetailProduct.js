import Pic from '../../assets/images/food.png'
import React, { Component } from "react";
import Modal from '../Addition/Modal.js';

class DetailProduct extends Component {
    constructor() {
        super();
        this.state = {
          show: false,
          dataSource:[]
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
      }
    showModal = () => {
        this.setState({ show: true });
        console.log("Nambh Cart");
        console.log(this.state)
        //untuk tambahin id ke db
        // fetch(perintah, {
        //     method: "POST",
        //     headers: {
        //         "Accept": "application/json",
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         id_staff: this.state.idStaff,
        //     })
        // }).then(this.props.navigation.navigate("DataAkses"))
        //     .catch(() => {
        //       Alert.
        //         this.setState({ errorMessage: "Network Error. Please try again.", loading: false })
        //     })
    };
    
    hideModal = () => {
        this.setState({ show: false });
    };
    
    render() {
        console.log(this.params)
        return(
            <div className="theme-layout">            
            <div className="cart-page flex">
                <Modal show={this.state.show} handleClose={this.hideModal}>
                    <p><div>🎉</div>
                    Barangmu sudah masuk ke cart! Mau checkout sekarang?</p>
                    
                    <div className="promo-code checkout">
                        <a href="checkout">
                            Checkout
                        </a>
                    </div>
                </Modal>
                <div className="detail-product flex full">
                    <div className="detail-photo">
                        <img className="shadow" src={Pic}/>
                    </div>
                    <div className="detail-text">
                        <h3>Judul</h3>
                        <i className="fa fa-star"></i> 4,9<br/>
                        <i className="fa fa-map"></i> Cileunyi, Bandung<br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel dui id ante sodales tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis turpis id dui eleifend faucibus. Sed porttitor vestibulum nunc et efficitur. Proin ac lobortis orci. Mauris fermentum ante a eros lacinia, sed condimentum quam iaculis. In interdum scelerisque imperdiet. Curabitur tincidunt, elit non pellentesque dictum, dolor enim faucibus elit, faucibus facilisis neque massa et nulla. Vestibulum ac fermentum metus. Fusce accumsan ultricies condimentum. Vestibulum feugiat, lacus id pellentesque auctor, magna enim aliquet tortor, ac pretium tellus turpis in nisi. Donec molestie, turpis id tempus sagittis, ante turpis feugiat lorem, vel tempus ex ante in nibh. Pellentesque sed nunc vel nisi bibendum fermentum</p>
                    </div>
                </div>

                <div className="box-checkout shadow">
                    <b>Quantity</b>
                    <div className="line"></div>
                    <div className="subtitle">
                        <div>Price <b>- 1 +</b></div>
                        <div>Additional <b>Rp. 1000</b></div>
                    </div>
                    <div className="line"></div>
                    <div className="subtitle">
                        <div>Total <b>Rp. 1000</b></div>
                    </div>
                    <div className="promo-code">
                        <a onClick={this.showModal}>
                            Add To Cart
                        </a>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}


export default DetailProduct
