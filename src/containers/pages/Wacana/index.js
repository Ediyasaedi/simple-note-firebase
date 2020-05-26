import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { addWacanaToAPI }  from '../../../config/redux/action';
import Collapsible from 'react-collapsible';


class Wacana extends Component{
    state = {
        judulWacana: '',
        gambarWacana: '',
            instruksi1: '',
            instruksi2: '',
            instruksi3: '',
            instruksi4: '',
            judulArticle1: '',
            gambarArticle1: '',
            contentArticle1: '',
            judulArticle2: '',
            gambarArticle2: '',
            contentArticle2: '',
            judulArticle3: '',
            gambarArticle3: '',
            contentArticle3: '',
            judulArticle4: '',
            gambarArticle4: '',
            contentArticle4: '',
            pertanyaan1: '',
            jawaban1: '',
            option1a: '',
            option1b: '',
            option1c: '',
            option1d: '',
            pertanyaan2: '',
            jawaban2: '',
            option2a: '',
            option2b: '',
            option2c: '',
            option2d: '',
            pertanyaan3: '',
            jawaban3: '',
            option3a: '',
            option3b: '',
            option3c: '',
            option3d: '',
            pertanyaan4: '',
            jawaban4: '',
            option4a: '',
            option4b: '',
            option4c: '',
            option4d: '',
            pertanyaan5: '',
            jawaban5: '',
            option5a: '',
            option5b: '',
            option5c: '',
            option5d: '',
            pertanyaan6: '',
            jawaban6: '',
            option6a: '',
            option6b: '',
            option6c: '',
            option6d: '',
            pertanyaan7: '',
            jawaban7: '',
            option7a: '',
            option7b: '',
            option7c: '',
            option7d: '',
            pertanyaan8: '',
            jawaban8: '',
            option8a: '',
            option8b: '',
            option8c: '',
            option8d: '',
            pertanyaan9: '',
            jawaban9: '',
            option9a: '',
            option9b: '',
            option9c: '',
            option9d: '',
            pertanyaan10: '',
            jawaban10: '',
            option10a: '',
            option10b: '',
            option10c: '',
            option10d: '',
            pertanyaan11: '',
            jawaban11: '',
            option11a: '',
            option11b: '',
            option11c: '',
            option11d: '',
            pertanyaan12: '',
            jawaban12: '',
            option12a: '',
            option12b: '',
            option12c: '',
            option12d: '',
            pertanyaan13: '',
            jawaban13: '',
            option13a: '',
            option13b: '',
            option13c: '',
            option13d: '',
            pertanyaan14: '',
            jawaban14: '',
            option14a: '',
            option14b: '',
            option14c: '',
            option14d: '',
            pertanyaan15: '',
            jawaban15: '',
            option15a: '',
            option15b: '',
            option15c: '',
            option15d: '',
            pertanyaan16: '',
            jawaban16: '',
            option16a: '',
            option16b: '',
            option16c: '',
            option16d: '',
            pertanyaan17: '',
            jawaban17: '',
            option17a: '',
            option17b: '',
            option17c: '',
            option17d: '',
            pertanyaan18: '',
            jawaban18: '',
            option18a: '',
            option18b: '',
            option18c: '',
            option18d: '',
            pertanyaan19: '',
            jawaban19: '',
            option19a: '',
            option19b: '',
            option19c: '',
            option19d: '',
            pertanyaan20: '',
            jawaban20: '',
            option20a: '',
            option20b: '',
            option20c: '',
            option20d: '',
        textButton: 'SIMPAN',
        noteId: ''
    }

    componentDidMount(){
        const userData = JSON.parse(localStorage.getItem('userData'));
        // this.props.getNotes(userData.uid);
    }

    handleSaveWacanas = () => {
        const {judulWacana, gambarWacana, textButton, instruksi1, instruksi2, instruksi3, instruksi4, 
            judulArticle1, gambarArticle1, contentArticle1, judulArticle2, gambarArticle2, contentArticle2,
            judulArticle3, gambarArticle3, contentArticle3, judulArticle4, gambarArticle4, contentArticle4,
            pertanyaan1, option1a, option1b, option1c, option1d, jawaban1,
            pertanyaan2, option2a, option2b, option2c, option2d, jawaban2,
            pertanyaan3, option3a, option3b, option3c, option3d, jawaban3,
            pertanyaan4, option4a, option4b, option4c, option4d, jawaban4,
            pertanyaan5, option5a, option5b, option5c, option5d, jawaban5,
            pertanyaan6, option6a, option6b, option6c, option6d, jawaban6,
            pertanyaan7, option7a, option7b, option7c, option7d, jawaban7,
            pertanyaan8, option8a, option8b, option8c, option8d, jawaban8,
            pertanyaan9, option9a, option9b, option9c, option9d, jawaban9,
            pertanyaan10, option10a, option10b, option10c, option10d, jawaban10,
            pertanyaan11, option11a, option11b, option11c, option11d, jawaban11,
            pertanyaan12, option12a, option12b, option12c, option12d, jawaban12,
            pertanyaan13, option13a, option13b, option13c, option13d, jawaban13,
            pertanyaan14, option14a, option14b, option14c, option14d, jawaban14,
            pertanyaan15, option15a, option15b, option15c, option15d, jawaban15,
            pertanyaan16, option16a, option16b, option16c, option16d, jawaban16,
            pertanyaan17, option17a, option17b, option17c, option17d, jawaban17,
            pertanyaan18, option18a, option18b, option18c, option18d, jawaban18,
            pertanyaan19, option19a, option19b, option19c, option19d, jawaban19,
            pertanyaan20, option20a, option20b, option20c, option20d, jawaban20} = this.state;
        // const {saveNotes, updateNotes} = this.props;
        const userData = JSON.parse(localStorage.getItem('userData'))
        const data = { judulWacana: judulWacana,
            gambarWacana: gambarWacana,
            instruksi1: instruksi1,
            instruksi2: instruksi2,
            instruksi3: instruksi3,
            instruksi4: instruksi4,
            judulArticle1: judulArticle1,
            gambarArticle1: gambarArticle1,
            contentArticle1: contentArticle1,
            judulArticle2: judulArticle2,
            gambarArticle2: gambarArticle2,
            contentArticle2: contentArticle2,
            judulArticle3: judulArticle3,
            gambarArticle3: gambarArticle3,
            contentArticle3: contentArticle3,
            judulArticle4: judulArticle4,
            gambarArticle4: gambarArticle4,
            contentArticle4: contentArticle4,
            pertanyaan1: pertanyaan1,
            jawaban1: jawaban1,
            option1a: option1a,
            option1b: option1b,
            option1c: option1c,
            option1d: option1d,
            pertanyaan2: pertanyaan2,
            jawaban2: jawaban2,
            option2a: option2a,
            option2b: option2b,
            option2c: option2c,
            option2d: option2d,
            pertanyaan3: pertanyaan3,
            jawaban3: jawaban3,
            option3a: option3a,
            option3b: option3b,
            option3c: option3c,
            option3d: option3d,
            pertanyaan4: pertanyaan4,
            jawaban4: jawaban4,
            option4a: option4a,
            option4b: option4b,
            option4c: option4c,
            option4d: option4d,
            pertanyaan5: pertanyaan5,
            jawaban5: jawaban5,
            option5a: option5a,
            option5b: option5b,
            option5c: option5c,
            option5d: option5d,
            pertanyaan6: pertanyaan6,
            jawaban6: jawaban6,
            option6a: option6a,
            option6b: option6b,
            option6c: option6c,
            option6d: option6d,
            pertanyaan7: pertanyaan7,
            jawaban7: jawaban7,
            option7a: option7a,
            option7b: option7b,
            option7c: option7c,
            option7d: option7d,
            pertanyaan8: pertanyaan8,
            jawaban8: jawaban8,
            option8a: option8a,
            option8b: option8b,
            option8c: option8c,
            option8d: option8d,
            pertanyaan9: pertanyaan9,
            jawaban9: jawaban9,
            option9a: option9a,
            option9b: option9b,
            option9c: option9c,
            option9d: option9d,
            pertanyaan10: pertanyaan10,
            jawaban10: jawaban10,
            option10a: option10a,
            option10b: option10b,
            option10c: option10c,
            option10d: option10d,
            pertanyaan11: pertanyaan11,
            jawaban11: jawaban11,
            option11a: option11a,
            option11b: option11b,
            option11c: option11c,
            option11d: option11d,
            pertanyaan12: pertanyaan12,
            jawaban12: jawaban12,
            option12a: option12a,
            option12b: option12b,
            option12c: option12c,
            option12d: option12d,
            pertanyaan13: pertanyaan13,
            jawaban13: jawaban13,
            option13a: option13a,
            option13b: option13b,
            option13c: option13c,
            option13d: option13d,
            pertanyaan14: pertanyaan14,
            jawaban14: jawaban14,
            option14a: option14a,
            option14b: option14b,
            option14c: option14c,
            option14d: option14d,
            pertanyaan15: pertanyaan15,
            jawaban15: jawaban15,
            option15a: option15a,
            option15b: option15b,
            option15c: option15c,
            option15d: option15d,
            pertanyaan16: pertanyaan16,
            jawaban16: jawaban16,
            option16a: option16a,
            option16b: option16b,
            option16c: option16c,
            option16d: option16d,
            pertanyaan17: pertanyaan17,
            jawaban17: jawaban17,
            option17a: option17a,
            option17b: option17b,
            option17c: option17c,
            option17d: option17d,
            pertanyaan18: pertanyaan18,
            jawaban18: jawaban18,
            option18a: option18a,
            option18b: option18b,
            option18c: option18c,
            option18d: option18d,
            pertanyaan19: pertanyaan19,
            jawaban19: jawaban19,
            option19a: option19a,
            option19b: option19b,
            option19c: option19c,
            option19d: option19d,
            pertanyaan20: pertanyaan20,
            jawaban20: jawaban20,
            option20a: option20a,
            option20b: option20b,
            option20c: option20c,
            option20d: option20d,
            userId: userData.uid
        }

        // if(textButton === 'SIMPAN'){
        //     saveNotes(data)
        // }else{
        //     data.noteId = noteId;
        //     updateNotes(data)
        // }
        
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
        const {judulWacana, gambarWacana, textButton, instruksi1, instruksi2, instruksi3, instruksi4, 
            judulArticle1, gambarArticle1, contentArticle1, judulArticle2, gambarArticle2, contentArticle2,
            judulArticle3, gambarArticle3, contentArticle3, judulArticle4, gambarArticle4, contentArticle4,
            pertanyaan1, option1a, option1b, option1c, option1d, jawaban1,
            pertanyaan2, option2a, option2b, option2c, option2d, jawaban2,
            pertanyaan3, option3a, option3b, option3c, option3d, jawaban3,
            pertanyaan4, option4a, option4b, option4c, option4d, jawaban4,
            pertanyaan5, option5a, option5b, option5c, option5d, jawaban5,
            pertanyaan6, option6a, option6b, option6c, option6d, jawaban6,
            pertanyaan7, option7a, option7b, option7c, option7d, jawaban7,
            pertanyaan8, option8a, option8b, option8c, option8d, jawaban8,
            pertanyaan9, option9a, option9b, option9c, option9d, jawaban9,
            pertanyaan10, option10a, option10b, option10c, option10d, jawaban10,
            pertanyaan11, option11a, option11b, option11c, option11d, jawaban11,
            pertanyaan12, option12a, option12b, option12c, option12d, jawaban12,
            pertanyaan13, option13a, option13b, option13c, option13d, jawaban13,
            pertanyaan14, option14a, option14b, option14c, option14d, jawaban14,
            pertanyaan15, option15a, option15b, option15c, option15d, jawaban15,
            pertanyaan16, option16a, option16b, option16c, option16d, jawaban16,
            pertanyaan17, option17a, option17b, option17c, option17d, jawaban17,
            pertanyaan18, option18a, option18b, option18c, option18d, jawaban18,
            pertanyaan19, option19a, option19b, option19c, option19d, jawaban19,
            pertanyaan20, option20a, option20b, option20c, option20d, jawaban20 } = this.state;
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
                            <h5>Form Data Wacana</h5><br />
                            <input className="form-control input-lg" type="text" placeholder="Judul wacana" value={judulWacana} onChange={(e) => this.onInputChange(e, 'judulWacana')} /><br />
                            <input placeholder="Gambar utama" className="form-control input-lg" value={gambarWacana} onChange={(e) => this.onInputChange(e, 'gambarWacana')}/><br />
                            <Collapsible trigger="Form Instruksi:">
                                <input className="form-control input-sm" type="text" placeholder="Instruksi 1" style={{marginBottom: "10px"}} value={instruksi1} onChange={(e) => this.onInputChange(e, 'instruksi1')} />
                                <input className="form-control input-sm" type="text" placeholder="Instruksi 2" style={{marginBottom: "10px"}} value={instruksi2} onChange={(e) => this.onInputChange(e, 'instruksi2')} />
                                <input className="form-control input-sm" type="text" placeholder="Instruksi 3" style={{marginBottom: "10px"}} value={instruksi3} onChange={(e) => this.onInputChange(e, 'instruksi3')} />
                                <input className="form-control input-sm" type="text" placeholder="Instruksi 4" style={{marginBottom: "10px"}} value={instruksi4} onChange={(e) => this.onInputChange(e, 'instruksi4')} />
                            </Collapsible>
                            <Collapsible trigger="Form Artikel:" >
                                <div className="card card-body" style={{marginBottom: "10px"}}>
                                    <label>Artikel 1</label>
                                    <input className="form-control input-sm" type="text" placeholder="Judul Artikel 1" style={{marginBottom: "10px"}} value={judulArticle1} onChange={(e) => this.onInputChange(e, 'judulArticle1')} />
                                    <input className="form-control input-sm" type="text" placeholder="Gambar Artikel 1" style={{marginBottom: "10px"}} value={gambarArticle1} onChange={(e) => this.onInputChange(e, 'gambarArticle1')} />
                                    <textarea className="form-control input-sm" type="text" placeholder="Konten Artikel 1" value={contentArticle1} onChange={(e) => this.onInputChange(e, 'contentArticle1')} />
                                </div>
                                <div className="card card-body" style={{marginBottom: "10px"}}>
                                    <label>Artikel 2</label>
                                    <input className="form-control input-sm" type="text" placeholder="Judul Artikel 2" style={{marginBottom: "10px"}} value={judulArticle2} onChange={(e) => this.onInputChange(e, 'judulArticle2')} />
                                    <input className="form-control input-sm" type="text" placeholder="Gambar Artikel 2" style={{marginBottom: "10px"}} value={gambarArticle2} onChange={(e) => this.onInputChange(e, 'gambarArticle2')} />
                                    <textarea className="form-control input-sm" type="text" placeholder="Konten Artikel 2" value={contentArticle2} onChange={(e) => this.onInputChange(e, 'contentArticle2')} />
                                </div>
                                <div className="card card-body" style={{marginBottom: "10px"}}>
                                    <label>Artikel 3</label>
                                    <input className="form-control input-sm" type="text" placeholder="Judul Artikel 3" style={{marginBottom: "10px"}} value={judulArticle3} onChange={(e) => this.onInputChange(e, 'judulArticle3')} />
                                    <input className="form-control input-sm" type="text" placeholder="Gambar Artikel 3" style={{marginBottom: "10px"}} value={gambarArticle3} onChange={(e) => this.onInputChange(e, 'gambarArticle3')} />
                                    <textarea className="form-control input-sm" type="text" placeholder="Konten Artikel 3" value={contentArticle3} onChange={(e) => this.onInputChange(e, 'contentArticle3')} />
                                </div>
                                <div className="card card-body" style={{marginBottom: "10px"}}>
                                    <label>Artikel 4</label>
                                    <input className="form-control input-sm" type="text" placeholder="Judul Artikel 4" style={{marginBottom: "10px"}} value={judulArticle4} onChange={(e) => this.onInputChange(e, 'judulArticle4')} />
                                    <input className="form-control input-sm" type="text" placeholder="Gambar Artikel 4" style={{marginBottom: "10px"}} value={gambarArticle4} onChange={(e) => this.onInputChange(e, 'gambarArticle4')} />
                                    <textarea className="form-control input-sm" type="text" placeholder="Konten Artikel 4" value={contentArticle4} onChange={(e) => this.onInputChange(e, 'contentArticle4')} />
                                </div>
                            </Collapsible>
                            <Collapsible trigger="Form Pertanyaan dan Jawaban:" >
                                <div className="card card-body" style={{marginBottom: "10px"}}>
                                    <label>Pertanyaan 1</label>
                                    <input className="form-control input-sm" type="text" placeholder="Soal" style={{marginBottom: "10px"}} value={pertanyaan1} onChange={(e) => this.onInputChange(e, 'pertanyaan1')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban A" style={{marginBottom: "10px"}} value={option1a} onChange={(e) => this.onInputChange(e, 'option1a')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban B" style={{marginBottom: "10px"}} value={option1b} onChange={(e) => this.onInputChange(e, 'option1b')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban C" style={{marginBottom: "10px"}} value={option1c} onChange={(e) => this.onInputChange(e, 'option1c')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban D" style={{marginBottom: "10px"}} value={option1d} onChange={(e) => this.onInputChange(e, 'option1d')} />
                                    <input className="form-control input-sm" type="text" placeholder="Kunci Jawaban" style={{marginBottom: "10px"}} value={jawaban1} onChange={(e) => this.onInputChange(e, 'jawaban1')} />
                                </div>
                                <div className="card card-body" style={{marginBottom: "10px"}}>
                                    <label>Pertanyaan 2</label>
                                    <input className="form-control input-sm" type="text" placeholder="Soal" style={{marginBottom: "10px"}} value={pertanyaan2} onChange={(e) => this.onInputChange(e, 'pertanyaan2')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban A" style={{marginBottom: "10px"}} value={option2a} onChange={(e) => this.onInputChange(e, 'option2a')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban B" style={{marginBottom: "10px"}} value={option2b} onChange={(e) => this.onInputChange(e, 'option2b')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban C" style={{marginBottom: "10px"}} value={option2c} onChange={(e) => this.onInputChange(e, 'option2c')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban D" style={{marginBottom: "10px"}} value={option2d} onChange={(e) => this.onInputChange(e, 'option2d')} />
                                    <input className="form-control input-sm" type="text" placeholder="Kunci Jawaban" style={{marginBottom: "10px"}} value={jawaban2} onChange={(e) => this.onInputChange(e, 'jawaban2')} />
                                </div>
                                <div className="card card-body" style={{marginBottom: "10px"}}>
                                    <label>Pertanyaan 3</label>
                                    <input className="form-control input-sm" type="text" placeholder="Soal" style={{marginBottom: "10px"}} value={pertanyaan3} onChange={(e) => this.onInputChange(e, 'pertanyaan3')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban A" style={{marginBottom: "10px"}} value={option3a} onChange={(e) => this.onInputChange(e, 'option3a')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban B" style={{marginBottom: "10px"}} value={option3b} onChange={(e) => this.onInputChange(e, 'option3b')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban C" style={{marginBottom: "10px"}} value={option3c} onChange={(e) => this.onInputChange(e, 'option3c')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban D" style={{marginBottom: "10px"}} value={option3d} onChange={(e) => this.onInputChange(e, 'option3d')} />
                                    <input className="form-control input-sm" type="text" placeholder="Kunci Jawaban" style={{marginBottom: "10px"}} value={jawaban3} onChange={(e) => this.onInputChange(e, 'jawaban3')} />
                                </div>
                                <div className="card card-body" style={{marginBottom: "10px"}}>
                                    <label>Pertanyaan 4</label>
                                    <input className="form-control input-sm" type="text" placeholder="Soal" style={{marginBottom: "10px"}} value={pertanyaan4} onChange={(e) => this.onInputChange(e, 'pertanyaan4')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban A" style={{marginBottom: "10px"}} value={option4a} onChange={(e) => this.onInputChange(e, 'option4a')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban B" style={{marginBottom: "10px"}} value={option4b} onChange={(e) => this.onInputChange(e, 'option4b')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban C" style={{marginBottom: "10px"}} value={option4c} onChange={(e) => this.onInputChange(e, 'option4c')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban D" style={{marginBottom: "10px"}} value={option4d} onChange={(e) => this.onInputChange(e, 'option4d')} />
                                    <input className="form-control input-sm" type="text" placeholder="Kunci Jawaban" style={{marginBottom: "10px"}} value={jawaban4} onChange={(e) => this.onInputChange(e, 'jawaban4')} />
                                </div>
                                <div className="card card-body" style={{marginBottom: "10px"}}>
                                    <label>Pertanyaan 5</label>
                                    <input className="form-control input-sm" type="text" placeholder="Soal" style={{marginBottom: "10px"}} value={pertanyaan5} onChange={(e) => this.onInputChange(e, 'pertanyaan5')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban A" style={{marginBottom: "10px"}} value={option5a} onChange={(e) => this.onInputChange(e, 'option5a')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban B" style={{marginBottom: "10px"}} value={option5b} onChange={(e) => this.onInputChange(e, 'option5b')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban C" style={{marginBottom: "10px"}} value={option5c} onChange={(e) => this.onInputChange(e, 'option5c')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban D" style={{marginBottom: "10px"}} value={option5d} onChange={(e) => this.onInputChange(e, 'option5d')} />
                                    <input className="form-control input-sm" type="text" placeholder="Kunci Jawaban" style={{marginBottom: "10px"}} value={jawaban5} onChange={(e) => this.onInputChange(e, 'jawaban5')} />
                                </div>
                                <div className="card card-body" style={{marginBottom: "10px"}}>
                                    <label>Pertanyaan 6</label>
                                    <input className="form-control input-sm" type="text" placeholder="Soal" style={{marginBottom: "10px"}} value={pertanyaan6} onChange={(e) => this.onInputChange(e, 'pertanyaan6')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban A" style={{marginBottom: "10px"}} value={option6a} onChange={(e) => this.onInputChange(e, 'option6a')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban B" style={{marginBottom: "10px"}} value={option6b} onChange={(e) => this.onInputChange(e, 'option6b')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban C" style={{marginBottom: "10px"}} value={option6c} onChange={(e) => this.onInputChange(e, 'option6c')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban D" style={{marginBottom: "10px"}} value={option6d} onChange={(e) => this.onInputChange(e, 'option6d')} />
                                    <input className="form-control input-sm" type="text" placeholder="Kunci Jawaban" style={{marginBottom: "10px"}} value={jawaban6} onChange={(e) => this.onInputChange(e, 'jawaban6')} />
                                </div>
                                <div className="card card-body" style={{marginBottom: "10px"}}>
                                    <label>Pertanyaan 7</label>
                                    <input className="form-control input-sm" type="text" placeholder="Soal" style={{marginBottom: "10px"}} value={pertanyaan7} onChange={(e) => this.onInputChange(e, 'pertanyaan7')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban A" style={{marginBottom: "10px"}} value={option7a} onChange={(e) => this.onInputChange(e, 'option7a')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban B" style={{marginBottom: "10px"}} value={option7b} onChange={(e) => this.onInputChange(e, 'option7b')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban C" style={{marginBottom: "10px"}} value={option7c} onChange={(e) => this.onInputChange(e, 'option7c')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban D" style={{marginBottom: "10px"}} value={option7d} onChange={(e) => this.onInputChange(e, 'option7d')} />
                                    <input className="form-control input-sm" type="text" placeholder="Kunci Jawaban" style={{marginBottom: "10px"}} value={jawaban7} onChange={(e) => this.onInputChange(e, 'jawaban7')} />
                                </div>
                                <div className="card card-body" style={{marginBottom: "10px"}}>
                                    <label>Pertanyaan 8</label>
                                    <input className="form-control input-sm" type="text" placeholder="Soal" style={{marginBottom: "10px"}} value={pertanyaan8} onChange={(e) => this.onInputChange(e, 'pertanyaan8')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban A" style={{marginBottom: "10px"}} value={option8a} onChange={(e) => this.onInputChange(e, 'option8a')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban B" style={{marginBottom: "10px"}} value={option8b} onChange={(e) => this.onInputChange(e, 'option8b')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban C" style={{marginBottom: "10px"}} value={option8c} onChange={(e) => this.onInputChange(e, 'option8c')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban D" style={{marginBottom: "10px"}} value={option8d} onChange={(e) => this.onInputChange(e, 'option8d')} />
                                    <input className="form-control input-sm" type="text" placeholder="Kunci Jawaban" style={{marginBottom: "10px"}} value={jawaban8} onChange={(e) => this.onInputChange(e, 'jawaban8')} />
                                </div>
                                <div className="card card-body" style={{marginBottom: "10px"}}>
                                    <label>Pertanyaan 9</label>
                                    <input className="form-control input-sm" type="text" placeholder="Soal" style={{marginBottom: "10px"}} value={pertanyaan9} onChange={(e) => this.onInputChange(e, 'pertanyaan9')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban A" style={{marginBottom: "10px"}} value={option9a} onChange={(e) => this.onInputChange(e, 'option9a')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban B" style={{marginBottom: "10px"}} value={option9b} onChange={(e) => this.onInputChange(e, 'option9b')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban C" style={{marginBottom: "10px"}} value={option9c} onChange={(e) => this.onInputChange(e, 'option9c')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban D" style={{marginBottom: "10px"}} value={option9d} onChange={(e) => this.onInputChange(e, 'option9d')} />
                                    <input className="form-control input-sm" type="text" placeholder="Kunci Jawaban" style={{marginBottom: "10px"}} value={jawaban9} onChange={(e) => this.onInputChange(e, 'jawaban9')} />
                                </div>
                                <div className="card card-body" style={{marginBottom: "10px"}}>
                                    <label>Pertanyaan 10</label>
                                    <input className="form-control input-sm" type="text" placeholder="Soal" style={{marginBottom: "10px"}} value={pertanyaan10} onChange={(e) => this.onInputChange(e, 'pertanyaan10')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban A" style={{marginBottom: "10px"}} value={option10a} onChange={(e) => this.onInputChange(e, 'option10a')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban B" style={{marginBottom: "10px"}} value={option10b} onChange={(e) => this.onInputChange(e, 'option10b')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban C" style={{marginBottom: "10px"}} value={option10c} onChange={(e) => this.onInputChange(e, 'option10c')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban D" style={{marginBottom: "10px"}} value={option10d} onChange={(e) => this.onInputChange(e, 'option10d')} />
                                    <input className="form-control input-sm" type="text" placeholder="Kunci Jawaban" style={{marginBottom: "10px"}} value={jawaban10} onChange={(e) => this.onInputChange(e, 'jawaban10')} />
                                </div>
                                <div className="card card-body" style={{marginBottom: "10px"}}>
                                    <label>Pertanyaan 11</label>
                                    <input className="form-control input-sm" type="text" placeholder="Soal" style={{marginBottom: "10px"}} value={pertanyaan11} onChange={(e) => this.onInputChange(e, 'pertanyaan11')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban A" style={{marginBottom: "10px"}} value={option11a} onChange={(e) => this.onInputChange(e, 'option11a')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban B" style={{marginBottom: "10px"}} value={option11b} onChange={(e) => this.onInputChange(e, 'option11b')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban C" style={{marginBottom: "10px"}} value={option11c} onChange={(e) => this.onInputChange(e, 'option11c')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban D" style={{marginBottom: "10px"}} value={option11d} onChange={(e) => this.onInputChange(e, 'option11d')} />
                                    <input className="form-control input-sm" type="text" placeholder="Kunci Jawaban" style={{marginBottom: "10px"}} value={jawaban11} onChange={(e) => this.onInputChange(e, 'jawaban11')} />
                                </div>
                                <div className="card card-body" style={{marginBottom: "10px"}}>
                                    <label>Pertanyaan 12</label>
                                    <input className="form-control input-sm" type="text" placeholder="Soal" style={{marginBottom: "10px"}} value={pertanyaan12} onChange={(e) => this.onInputChange(e, 'pertanyaan12')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban A" style={{marginBottom: "10px"}} value={option12a} onChange={(e) => this.onInputChange(e, 'option12a')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban B" style={{marginBottom: "10px"}} value={option12b} onChange={(e) => this.onInputChange(e, 'option12b')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban C" style={{marginBottom: "10px"}} value={option12c} onChange={(e) => this.onInputChange(e, 'option12c')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban D" style={{marginBottom: "10px"}} value={option12d} onChange={(e) => this.onInputChange(e, 'option12d')} />
                                    <input className="form-control input-sm" type="text" placeholder="Kunci Jawaban" style={{marginBottom: "10px"}} value={jawaban12} onChange={(e) => this.onInputChange(e, 'jawaban12')} />
                                </div>
                                <div className="card card-body" style={{marginBottom: "10px"}}>
                                    <label>Pertanyaan 13</label>
                                    <input className="form-control input-sm" type="text" placeholder="Soal" style={{marginBottom: "10px"}} value={pertanyaan13} onChange={(e) => this.onInputChange(e, 'pertanyaan13')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban A" style={{marginBottom: "10px"}} value={option13a} onChange={(e) => this.onInputChange(e, 'option13a')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban B" style={{marginBottom: "10px"}} value={option13b} onChange={(e) => this.onInputChange(e, 'option13b')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban C" style={{marginBottom: "10px"}} value={option13c} onChange={(e) => this.onInputChange(e, 'option13c')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban D" style={{marginBottom: "10px"}} value={option13d} onChange={(e) => this.onInputChange(e, 'option13d')} />
                                    <input className="form-control input-sm" type="text" placeholder="Kunci Jawaban" style={{marginBottom: "10px"}} value={jawaban13} onChange={(e) => this.onInputChange(e, 'jawaban13')} />
                                </div>
                                <div className="card card-body" style={{marginBottom: "10px"}}>
                                    <label>Pertanyaan 14</label>
                                    <input className="form-control input-sm" type="text" placeholder="Soal" style={{marginBottom: "10px"}} value={pertanyaan14} onChange={(e) => this.onInputChange(e, 'pertanyaan14')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban A" style={{marginBottom: "10px"}} value={option14a} onChange={(e) => this.onInputChange(e, 'option14a')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban B" style={{marginBottom: "10px"}} value={option14b} onChange={(e) => this.onInputChange(e, 'option14b')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban C" style={{marginBottom: "10px"}} value={option14c} onChange={(e) => this.onInputChange(e, 'option14c')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban D" style={{marginBottom: "10px"}} value={option14d} onChange={(e) => this.onInputChange(e, 'option14d')} />
                                    <input className="form-control input-sm" type="text" placeholder="Kunci Jawaban" style={{marginBottom: "10px"}} value={jawaban14} onChange={(e) => this.onInputChange(e, 'jawaban14')} />
                                </div>
                                <div className="card card-body" style={{marginBottom: "10px"}}>
                                    <label>Pertanyaan 15</label>
                                    <input className="form-control input-sm" type="text" placeholder="Soal" style={{marginBottom: "10px"}} value={pertanyaan15} onChange={(e) => this.onInputChange(e, 'pertanyaan15')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban A" style={{marginBottom: "10px"}} value={option15a} onChange={(e) => this.onInputChange(e, 'option15a')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban B" style={{marginBottom: "10px"}} value={option15b} onChange={(e) => this.onInputChange(e, 'option15b')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban C" style={{marginBottom: "10px"}} value={option15c} onChange={(e) => this.onInputChange(e, 'option15c')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban D" style={{marginBottom: "10px"}} value={option15d} onChange={(e) => this.onInputChange(e, 'option15d')} />
                                    <input className="form-control input-sm" type="text" placeholder="Kunci Jawaban" style={{marginBottom: "10px"}} value={jawaban15} onChange={(e) => this.onInputChange(e, 'jawaban15')} />
                                </div>
                                <div className="card card-body" style={{marginBottom: "10px"}}>
                                    <label>Pertanyaan 16</label>
                                    <input className="form-control input-sm" type="text" placeholder="Soal" style={{marginBottom: "10px"}} value={pertanyaan16} onChange={(e) => this.onInputChange(e, 'pertanyaan16')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban A" style={{marginBottom: "10px"}} value={option16a} onChange={(e) => this.onInputChange(e, 'option16a')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban B" style={{marginBottom: "10px"}} value={option16b} onChange={(e) => this.onInputChange(e, 'option16b')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban C" style={{marginBottom: "10px"}} value={option16c} onChange={(e) => this.onInputChange(e, 'option16c')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban D" style={{marginBottom: "10px"}} value={option16d} onChange={(e) => this.onInputChange(e, 'option16d')} />
                                    <input className="form-control input-sm" type="text" placeholder="Kunci Jawaban" style={{marginBottom: "10px"}} value={jawaban16} onChange={(e) => this.onInputChange(e, 'jawaban16')} />
                                </div>
                                <div className="card card-body" style={{marginBottom: "10px"}}>
                                    <label>Pertanyaan 17</label>
                                    <input className="form-control input-sm" type="text" placeholder="Soal" style={{marginBottom: "10px"}} value={pertanyaan17} onChange={(e) => this.onInputChange(e, 'pertanyaan17')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban A" style={{marginBottom: "10px"}} value={option17a} onChange={(e) => this.onInputChange(e, 'option17a')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban B" style={{marginBottom: "10px"}} value={option17b} onChange={(e) => this.onInputChange(e, 'option17b')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban C" style={{marginBottom: "10px"}} value={option17c} onChange={(e) => this.onInputChange(e, 'option17c')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban D" style={{marginBottom: "10px"}} value={option17d} onChange={(e) => this.onInputChange(e, 'option17d')} />
                                    <input className="form-control input-sm" type="text" placeholder="Kunci Jawaban" style={{marginBottom: "10px"}} value={jawaban17} onChange={(e) => this.onInputChange(e, 'jawaban17')} />
                                </div>
                                <div className="card card-body" style={{marginBottom: "10px"}}>
                                    <label>Pertanyaan 18</label>
                                    <input className="form-control input-sm" type="text" placeholder="Soal" style={{marginBottom: "10px"}} value={pertanyaan18} onChange={(e) => this.onInputChange(e, 'pertanyaan18')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban A" style={{marginBottom: "10px"}} value={option18a} onChange={(e) => this.onInputChange(e, 'option18a')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban B" style={{marginBottom: "10px"}} value={option18b} onChange={(e) => this.onInputChange(e, 'option18b')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban C" style={{marginBottom: "10px"}} value={option18c} onChange={(e) => this.onInputChange(e, 'option18c')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban D" style={{marginBottom: "10px"}} value={option18d} onChange={(e) => this.onInputChange(e, 'option18d')} />
                                    <input className="form-control input-sm" type="text" placeholder="Kunci Jawaban" style={{marginBottom: "10px"}} value={jawaban18} onChange={(e) => this.onInputChange(e, 'jawaban18')} />
                                </div>
                                <div className="card card-body" style={{marginBottom: "10px"}}>
                                    <label>Pertanyaan 19</label>
                                    <input className="form-control input-sm" type="text" placeholder="Soal" style={{marginBottom: "10px"}} value={pertanyaan19} onChange={(e) => this.onInputChange(e, 'pertanyaan19')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban A" style={{marginBottom: "10px"}} value={option19a} onChange={(e) => this.onInputChange(e, 'option19a')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban B" style={{marginBottom: "10px"}} value={option19b} onChange={(e) => this.onInputChange(e, 'option19b')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban C" style={{marginBottom: "10px"}} value={option19c} onChange={(e) => this.onInputChange(e, 'option19c')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban D" style={{marginBottom: "10px"}} value={option19d} onChange={(e) => this.onInputChange(e, 'option19d')} />
                                    <input className="form-control input-sm" type="text" placeholder="Kunci Jawaban" style={{marginBottom: "10px"}} value={jawaban19} onChange={(e) => this.onInputChange(e, 'jawaban19')} />
                                </div>
                                <div className="card card-body" style={{marginBottom: "10px"}}>
                                    <label>Pertanyaan 20</label>
                                    <input className="form-control input-sm" type="text" placeholder="Soal" style={{marginBottom: "10px"}} value={pertanyaan20} onChange={(e) => this.onInputChange(e, 'pertanyaan20')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban A" style={{marginBottom: "10px"}} value={option20a} onChange={(e) => this.onInputChange(e, 'option20a')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban B" style={{marginBottom: "10px"}} value={option20b} onChange={(e) => this.onInputChange(e, 'option20b')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban C" style={{marginBottom: "10px"}} value={option20c} onChange={(e) => this.onInputChange(e, 'option20c')} />
                                    <input className="form-control input-sm" type="text" placeholder="Pilihan Jawaban D" style={{marginBottom: "10px"}} value={option20d} onChange={(e) => this.onInputChange(e, 'option20d')} />
                                    <input className="form-control input-sm" type="text" placeholder="Kunci Jawaban" style={{marginBottom: "10px"}} value={jawaban20} onChange={(e) => this.onInputChange(e, 'jawaban20')} />
                                </div>
                            </Collapsible>

                            <div className="row">
                                {
                                    textButton === 'UPDATE' ? (
                                        <button className="btn btn-danger col" onClick={cancelUpdate} style={{margin : "10px"}}>Cancel</button>
                                    ) : <div></div>
                                }
                        
                            <button className="btn btn-primary col" onClick={this.handleSaveWacanas} style={{margin : "10px"}}>{textButton}</button>
                            
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
    saveWacanas : (data) => dispatch(addWacanaToAPI(data)),
    // getNotes : (data) => dispatch(getDataFromAPI(data)),
    // updateNotes : (data) => dispatch(updateDataAPI(data)),
    // deleteNote : (data) => dispatch(deleteDataAPI(data))
})

export default connect (reduxState, reduxDispatch) (Wacana);

