import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert';

export default class CreateRecipe extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name:'',
      description:'',
      materials:'',
      methods:'',
      user_id:'',
      thumbnail:'',
      alert: null,
      profile: {},
      errors: []
    }
    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.handleCreateNewRecipes = this.handleCreateNewRecipes.bind(this)
    this.hasErrorFor = this.hasErrorFor.bind(this)
    this.renderErrorFor = this.renderErrorFor.bind(this)
    this.onFileChange = this.onFileChange.bind(this)
  }  

  componentDidMount(){
      const token = localStorage.getItem("bearer")
      axios.get('http://localhost:8000/api/auth/me', {
          headers: {
              Authorization: 'Bearer ' + token
          }
      })
      .then(res => {
          const profile = res.data;
          this.setState({ profile });              
      })
  }

    handleFieldChange (event) {
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    onFileChange(event) {          
      this.setState({ [event.target.name]: event.target.files[0] });    
    };

    goToHome(){
        const getAlert = () => (
            <SweetAlert
                success
                title="Success!"
                onConfirm={() => this.onSuccess() }
                onCancel={this.hideAlert()}
                timeout={2000}
                confirmBtnText="Oke"
                >
                Resep berhasil dibuat
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }
 
    onSuccess() {
        this.props.history.push('/home');
    }
 
    hideAlert() {
        this.setState({
            alert: null
        });
    }
 
    handleCreateNewRecipes (event) {
        event.preventDefault()
        const recipes = {
          name: this.state.name,
          description: this.state.description,
          materials: this.state.materials,
          methods: this.state.methods,
          user_id: this.state.user_id,
          thumbnail: this.state.thumbnail
        }
        const token = localStorage.getItem("bearer")

        const formData = new FormData();
    
        // Update the formData object
        formData.append("name", recipes.name);
        formData.append("description", recipes.description);
        formData.append("materials", recipes.materials);
        formData.append("methods", recipes.methods);
        formData.append("user_id", recipes.user_id);
        formData.append("thumbnail", recipes.thumbnail);

        axios.post('http://localhost:8000/api/recipes/', formData, {
            headers: {
              Authorization: 'Bearer ' + token,
              'Content-Type': 'multipart/form-data'
            }
          })
          .then(response => { 
            var msg = response.data.success;
            if(msg == "true"){
              return this.goToHome();
            }
          })
    }
 
    hasErrorFor (field) {
        return !!this.state.errors[field]
    }
 
    renderErrorFor (field) {
        if (this.hasErrorFor(field)) {
            return (
            <span className='invalid-feedback'>
                <strong>{this.state.errors[field][0]}</strong>
            </span>
            )
        }
    }
    render() {
        return (
            <div className='container py-4'>
            <div className='row justify-content-center'>
              <div className='col-md-6'>
                <div className='card'>
                  <div className='card-header'>Create new recipe</div>
                  <div className='card-body'>
                    <form onSubmit={this.handleCreateNewRecipes}>
                      <div className='form-group'>
                        <label htmlFor='title'>Nama Resep</label>
                        <input
                          id='name'
                          type='text'
                          className={`form-control ${this.hasErrorFor('name') ? 'is-invalid' : ''}`}
                          name='name'
                          value={this.state.name}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('name')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='content'>Deskripsi</label>
                        <textarea
                          id='description'
                          className={`form-control ${this.hasErrorFor('description') ? 'is-invalid' : ''}`}
                          name='description'
                          rows='10'
                          value={this.state.description}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('description')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='content'>Bahan-bahan</label>
                        <textarea
                          id='materials'
                          className={`form-control ${this.hasErrorFor('materials') ? 'is-invalid' : ''}`}
                          name='materials'
                          rows='10'
                          value={this.state.materials}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('materials')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='content'>Langkah-langkah</label>
                        <textarea
                          id='methods'
                          className={`form-control ${this.hasErrorFor('methods') ? 'is-invalid' : ''}`}
                          name='methods'
                          rows='10'
                          value={this.state.methods}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('methods')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='content'>Foto Masakan</label>
                        <input
                          type='file'
                          id='thumbnail'
                          className={`form-control ${this.hasErrorFor('thumbnail') ? 'is-invalid' : ''}`}
                          name='thumbnail'
                          onChange={this.onFileChange}
                        />
                      </div>
                      <Link
                        className='btn btn-secondary'
                        to={`/u/profile`}
                        >Back
                      </Link>
                      &nbsp;
                      <button className='btn btn-primary'>Create</button>
                      {this.state.alert}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
