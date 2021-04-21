import Pic from '../../assets/images/food.png'
import React, { Component } from "react";
import Item from './Item.js'
class Checkout extends Component {
    constructor() {
        super();
        this.state = {
            loadingDone: false,
            dataSource:[],
        };
    }
    componentDidMount(){
        // this.AmbilData()
        this.setState({loadingDone: true})
        // ntar ini tuker in kalo dh ada api
    }
    AmbilData = ()=>{
        this.setState({loadingDone: false})
        fetch("http://")
        .then(response => response.json())
        .then((responseJson)=> {
            console.log(responseJson)
            this.setState({
                loadingDone: true,
                dataSource: responseJson
            })
            console.log("udahan loadya")
        } )
        .catch(error=>console.log(error)) 
    }
    render() {
        //dummy
        const data = [
            {
                //data untuk src components product index.js benerin
                id:"1",
                name: 'Ayam Bakar Khas Paang',
                // profile: photo,
                jumlah: 1,
                harga: "3000",
                lokasi: "Buah Batu, Bandung.",
                rate: "4,2",
                body: "World's most beautiful car in Curabitur <a href='#' title=''>#test drive booking !</a> the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website",
                publishedAt: 'june, 2 2018 19:PM',
            },
            {
                id:"2",
                name: 'Ayam Bakar Khas Padang',
                // profile: photo,
                jumlah: 2,
                harga: 30000,
                lokasi: "Buah Batu, Bandung.",
                rate: "4,4",
                body: "World's most beautiful car in Curabitur <a href='#' title=''>#test drive booking !</a> the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website",
                publishedAt: 'june, 2 2018 19:PM',
            },
            {
                id:"3",
                name: 'Ayam Bakar Khas Padang',
                // profile: photo,
                jumlah: 3,
                harga: 30000,
                lokasi: "Buah Batu, Bandung.",
                rate: "4,2",
                body: "World's most beautiful car in Curabitur <a href='#' title=''>#test drive booking !</a> the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website",
                publishedAt: 'june, 2 2018 19:PM',
            },
            {
                id:"4",
                name: 'Ayam Bakar Khas Padang',
                // profile: photo,
                jumlah: 3,
                harga: 3000,
                lokasi: "Buah Batu, Bandung.",
                rate: "4,2",
                body: "World's most beautiful car in Curabitur <a href='#' title=''>#test drive booking !</a> the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website",
                publishedAt: 'june, 2 2018 19:PM',
            },
            {
                id:"5",
                name: 'Ayam Bakar Khas Padang',
                // profile: photo,
                jumlah: 3,
                harga: 3000,
                lokasi: "Buah Batu, Bandung.",
                rate: "4,2",
                body: "World's most beautiful car in Curabitur <a href='#' title=''>#test drive booking !</a> the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website",
                publishedAt: 'june, 2 2018 19:PM',
            },
        ]
          return (
          <div className="col-lg-12">

            {/* nampilin loader  */}
            {!this.state.loadingDone && <div class="bulat">Tunggu</div>}
            {this.state.loadingDone &&
            <div class="cart-page flex">
              <div class="cart-list">
                  <h3>Cart</h3>
                  <div class="sub-cart flex">
                      <div>
                          <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                          Choose All
                      </div>
                      <a>Hapus</a>
                  </div>
                  <div class="line"></div>
                  <div class="checkout-toko shadow full">
                      {/* lieur mun ditambah ieu mah */}
                      {/* <div className="shop-name">
                          <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                          <b>Toko Nunung</b> - Cileunyi, Bandung
                      </div> */}
                      {data.map((item, index) => (
                            <div className="product-row"> 
                            <Item 
                                key={index}
                                item={item}
                            />
                            </div>
                        ))}   
                        
                      
                      {/* <div class="item-checkout flex">
                          <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                          <img class="shadow" src={Pic}/>
                          <div class="item-teks flex">
                              <h3>Ayam Bakar Khas Padang</h3>
                              <b>Rp. 1000</b>
                              Variant : Sambal Hijau
                              <a>Write Note</a>
                          </div>
                          <div class="add">
                              <b>-  1  +</b>
                          </div>
                      </div> */}
                  </div>
              </div>

              <div class="box-checkout shadow">
                  <div class="promo-code">
                      <a>
                          % Got Promo Code?
                      </a>
                  </div>
                  <div class="line"></div>
                  <div class="subtitle">
                      <b>Summary</b>
                      <div>Price <b>Rp. 1000</b></div>
                      <div>Discount <b>Rp. 0</b></div>
                  </div>
                  <div class="line"></div>
                  <div class="subtitle">
                      <b>Total</b>
                      <div>Price <b>Rp. 1000</b></div>
                  </div>
                  <div class="promo-code checkout">
                      <a>
                          Checkout
                      </a>
                  </div>
              </div>
          </div>}
          
          </div>)
      }
    
    
}

export default Checkout