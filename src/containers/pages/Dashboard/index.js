import React, {Component, Fragment} from 'react';
import './Dashboard.scss';
import {addDataToAPI, getDataFromAPI, updateDataAPI, deleteDataAPI} from '../../../config/redux/action';
import {connect} from 'react-redux';


class Dashboard extends Component{
    state = {
        name: '',
        content: '',
        date: '',
        sekolah: '',
        password: '',
        cfmpassword: '',
        textButton: 'SIMPAN',
        noteId: ''
    }

    componentDidMount(){
        const userData = JSON.parse(localStorage.getItem('userData'));
        this.props.getNotes(userData.uid);
    }

    handleSaveNotes = async() => {
        const {name, content, textButton, noteId, sekolah, password, cfmpassword} = this.state;
        const {saveNotes, updateNotes} = this.props;
        const res = await this.props.saveNotes({content, password}).catch(err => err);
        if(res){
            console.log('login success', res);
            localStorage.setItem('contohdata', JSON.stringify(res))
            this.setState({
            email: '',
            password: ''
            })
        }else{
            console.log('login failed');
        }
        const userData = JSON.parse(localStorage.getItem('contohdata'))
        const data = {
            name: name,
            content: content,
            date: new Date().getTime(),
            sekolah: sekolah,
            password: password,
            cfmpassword: cfmpassword,
            userId: userData.uid
        }

        if(textButton === 'SIMPAN'){
            saveNotes(data)
        }else{
            data.noteId = noteId;
            updateNotes(data)
        }
        
        console.log(data)
    }

    onInputChange = (e, type) => {
        this.setState({
            [type] : e.target.value
        })
    }

    updateNotes = (note) => {
        console.log(note)
        this.setState({
            name: note.data.name,
            content: note.data.content,
            sekolah: note.data.sekolah,
            textButton: 'UPDATE',
            noteId: note.id
        })
    }
 
    cancelUpdate = () => {
        this.setState({
            name: '',
            content: '',
            sekolah: '',
            password: '',
            cfmpassword: '',
            textButton: 'SIMPAN'
        })
    }

    deleteNote = (e, note) =>{
        e.stopPropagation();
        const {deleteNote} = this.props;
        const userData = JSON.parse(localStorage.getItem('userData'))
        const data = {
            userId: userData.uid,
            noteId: note.id
        }
        deleteNote(data)
    }

    render(){
        const {name, content, textButton, sekolah, password, cfmpassword} = this.state;
        const {notes} = this.props;
        const {updateNotes, cancelUpdate, deleteNote} = this;
        console.log('notes: ', notes);
        return(             
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <img src={require('../../../assets/img/logo/logoaksi.png')} />
                </nav>
                <nav className="navbar navbar-expand-lg navbar-light">
                <div className="collapse navbar-collapse" id="navbarNav" style={{marginLeft : "900px"}}>
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            <button className="btn btn-primary">Data Siswa</button>
                        </li>
                        <li className="nav-item">
                            <a className="">&nbsp; &nbsp; </a>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-primary">Data Wacana</button>
                        </li>
                        <li className="nav-item">
                            <a className="">&nbsp; &nbsp;</a>
                        </li>
                        <li className="nav-item">
                        <button className="btn btn-danger" >Logout</button>
                        </li>
                        </ul>
                    </div>
                </nav><br />
                
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <h5>Form Data Siswa</h5><br />
                            <input className="form-control input-lg" type="text" placeholder="Nama siswa" value={name} onChange={(e) => this.onInputChange(e, 'name')} /><br />
                            <input placeholder="Email siswa" className="form-control input-lg" value={content} onChange={(e) => this.onInputChange(e, 'content')}/><br />
                            <input placeholder="Asal sekolah" className="form-control input-lg" value={sekolah} onChange={(e) => this.onInputChange(e, 'sekolah')}/><br />
                            <input placeholder="Password" className="form-control input-lg" type="password" value={password} onChange={(e) => this.onInputChange(e, 'password')}/><br />
                            <input placeholder="Ulangi password" className="form-control input-lg" type="password" value={cfmpassword} onChange={(e) => this.onInputChange(e, 'cfmpassword')}/><br />

                            <div className="row">
                                {
                                    textButton === 'UPDATE' ? (
                                        <button className="btn btn-danger col" onClick={cancelUpdate} style={{margin : "10px"}}>Cancel</button>
                                    ) : <div></div>
                                }
                        
                            <button className="btn btn-primary col" onClick={this.handleSaveNotes} style={{margin : "10px"}}>{textButton}</button>
                        </div>

                        </div>
                        <div className="col-8">
                                {
                                    notes.length > 0 ? (
                                        <Fragment>
                                            {
                                                notes.map(note => {
                                                    return (
                                                        <div className="card-body" key={note.id} onClick={() => updateNotes(note)}>
                                                            <ul className="list-group list-group-flush">
                                                                <li className="list-group-item">{note.data.name}</li>
                                                                <li className="list-group-item">"{note.data.content}"</li>
                                                                <li className="list-group-item">{note.data.sekolah}</li>
                                                                <div className="row">

                                                                </div>
                                                                <div className="btn btn-danger col-3 col" onClick={(e) => deleteNote(e, note)} style={{marginTop : "10px"}}>Hapus</div>
                                                            </ul>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </Fragment>
                                    ) : null
                                }
                        </div>
                    </div>       
                </div>              
            </div>
        )
    }
}

const reduxState = (state) => ({
    userData: state.user,
    notes: state.notes
})

const reduxDispatch = (dispatch) => ({
    saveNotes : (data) => dispatch(addDataToAPI(data)),
    getNotes : (data) => dispatch(getDataFromAPI(data)),
    updateNotes : (data) => dispatch(updateDataAPI(data)),
    deleteNote : (data) => dispatch(deleteDataAPI(data))
})

export default connect (reduxState, reduxDispatch) (Dashboard);

