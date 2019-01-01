import React, {Component} from 'react'
// import {FaPencil} from 'react-icons/lib/fa/pencil'
// import {FaTrash} from 'react-icons/lib/fa/trash'

class Note extends Component {

    constructor(props){
        super(props)
        this.state = {
            editing:false
        }
        this.edit = this.edit.bind(this)
        this.remove = this.remove.bind(this)
        this.save = this.save.bind(this)
        this.renderDisplay = this.renderDisplay.bind(this)
        this.renderForm = this.renderForm.bind(this)
    }

    edit(){

        this.setState({
            editing:true
        })

        this.render()
    }

    remove(){

    }

    renderForm(){
        return (
            <div className="note">

                <form>
                    <textarea ref = {input => this._newText = input} />
                    <button onClick={ this.save}> Save </button>
                </form>
            </div>
        )
    }

    save(){
        alert(this._newText.value)
    }

    renderDisplay(){
        return (

            <div className = "note">

                <p> Learn React </p>
                <span>
                    {/*<button onClick = {this.edit} id ="edit"> <FaPencil /> Edit </button>*/}
                    {/*<button onClick = {this.remove}  id ="remove"> <FaTrash /> Remove </button>*/}

                     <button onClick = {this.edit} id ="edit">  Edit </button>
                    <button onClick = {this.remove}  id ="remove"> Remove </button>
                </span>
            </div>

                )
        }
    render(){
        return this.state.editing ? this.renderForm() : this.renderDisplay()
    }
    }

    export default Note