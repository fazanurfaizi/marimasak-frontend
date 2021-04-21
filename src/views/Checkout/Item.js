import { Link } from 'react-router-dom';
import Pic from '../../assets/images/food.png'
import React, { Component } from "react";
class Item extends Component{
    constructor(props) {
        super(props);
        this.state = {
            item:this.props.item,
            jml:this.props.item.jumlah
        };
        
        this.tambah = this.tambah.bind(this);
        this.kurang = this.kurang.bind(this);
    }    
    tambah = () => {
        this.setState({jml:this.state.jml+1})
        console.log("ini "+this.state.jml)
    }
        
    kurang = () => {
        this.setState({jml:this.state.jml-1})
        console.log("ini "+this.state.jml)
    }
    render() {
    return (
        <div className="product">
        
                <div class="item-checkout flex">
                          <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                          <Link
                            to={{pathname: "/detail/"+this.state.item.id}}>
                                <img class="shadow" src={Pic}/>
                            </Link>
                          <div class="item-teks flex">
                              <h3>{this.state.item.name}</h3>
                              <b>{this.state.item.harga}</b>
                              Variant : Sambal Hijau
                              <a>Write Note</a>
                          </div>
                          <div class="add">
                              <a onClick={this.kurang}>-</a>
                              <b>{this.state.jml}</b>
                              
                              <a onClick={this.tambah}>+</a>
                          </div>
                      </div>
                      <div class="line"></div>
        </div>
    )}
}

export default Item;