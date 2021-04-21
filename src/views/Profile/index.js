import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert';

export default class index extends Component {
    constructor(){
        super()
        this.state = {
            recipes: [],
            msg: null,
            type: null,
            flash:false,
            alert: null,
        }
        this.hideAlert = this.hideAlert.bind(this);
        this.confirmDelete = this.confirmDelete.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.goToHome = this.goToHome.bind(this);
        this.onSuccess = this.onSuccess.bind(this);
    }
    
    hideAlert(){
        this.setState({
            alert: null
        })
    }

    componentDidMount(){
        const token = localStorage.getItem("bearer")
        axios.get('http://localhost:8000/api/my-recipes', {
        headers: {
        Authorization: 'Bearer ' + token
        }
        })
        .then(res => {
            const recipes = res.data.data.recipes;
            this.setState({ recipes });
            console.log(recipes);
        })
    }

    confirmDelete(id){
        const getAlert = () => (
            <SweetAlert
                warning
                showCancel
                confirmBtnText="Hapus"
                cancelBtnText="Cancel"
                confirmBtnBsStyle="default"
                cancelBtnBsStyle="danger"
                title="Tunggu ..."
                onConfirm={() => this.deleteItem(id)}
                onCancel={() => this.hideAlert()}
                focusCancelBtn
                >
                Resep akan dihapus permanen.
            </SweetAlert>
        );
        this.setState({ 
            alert: getAlert()
        });
    }
 
    deleteItem(id) {
        const token = localStorage.getItem("bearer")
        axios.delete(`http://localhost:8000/api/recipes/${id}`, {
        headers: {
        Authorization: 'Bearer ' + token
        }
        })
        .then(response => {
            var msg = response.data.success;
            console.log(response.data.success == "true");
            if(msg == "true"){
                this.hideAlert();
                this.goToHome();
            }
        })
    }
 
    goToHome(){
        const getAlert = () => (
            <SweetAlert
                success
                title="Success!"
                onConfirm={() => this.onSuccess() } 
                onCancel={this.hideAlert()}
                timeout={2000}
                confirmBtnText="Okay"
                >
                Resep berhasil dihapus
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }
 
    onSuccess(){
        this.componentDidMount();
        this.hideAlert();
    }

    render() {
        return (
            <div className="col-lg-12">
                <div>
                    
                </div>
                <div className="row">
                    {this.state.recipes.map((item, index) => 
                        <div className="col-lg-4 own-recipe" key={index}>
                            <img src={item.thumbnail_url} alt=""  className="post-pict"/>
                                <div className="row text-center text-block">
                                    <Link to={`/recipes/edit/${item.id}`}><i className="fa fa-edit" style={{fontSize:"15px"}}></i></Link>
                                    <Link>
                                    <i 
                                        className="fa fa-trash-o" 
                                        style={{fontSize:"15px"}} 
                                        onClick={() => this.confirmDelete(item.id)}
                                    >
                                    </i>
                                    </Link>
                                </div>
                        </div>
                    )}
                </div>
                {this.state.alert}
            </div>
        )
    }
}
