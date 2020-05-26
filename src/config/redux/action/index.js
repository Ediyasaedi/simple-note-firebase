import firebase, {database} from '../../firebase';

export const actionUserName = () => (dispatch) => {
    setTimeout(() => {
        return dispatch({type: 'CHANGE_USER', value: 'Yasa Ganteng'})
    }, 2000)    
}

export const registerUserAPI = (data) => (dispatch) =>{
    return new Promise((resolve, reject) => {
    dispatch({type: 'CHANGE_LOADING', value: true})
        firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
            .then(res =>{
                console.log('success:', res)
                dispatch({type: 'CHANGE_LOADING', value: false})
                resolve(true)
            })
            .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage)
                dispatch({type: 'CHANGE_LOADING', value: false})
                reject(false)
            })
    }) 
}

export const loginUserAPI = (data) => (dispatch) =>{
    return new Promise((resolve, reject) => {
        dispatch({type: 'CHANGE_LOADING', value: true})
            firebase.auth().signInWithEmailAndPassword(data.email, data.password)
                .then(res =>{
                console.log('success:', res);
                const dataUser = {
                    email: res.user.email,
                    uid: res.user.uid,
                    emailVerified: res.user.emailVerified,
                    refreshToken: res.user.refreshToken
                    }
                dispatch({type: 'CHANGE_LOADING', value: false})
                dispatch({type: 'CHANGE_ISLOGIN', value: true})
                dispatch({type: 'CHANGE_USER', value: dataUser})
                resolve(dataUser)
            })
                .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage)
                dispatch({type: 'CHANGE_LOADING', value: false})
                dispatch({type: 'CHANGE_ISLOGIN', value: false})
                reject(false)
        })
                
    })  
}

// export const addDataToAPI = (data) => (dispatch) => {
//     database.ref('notes/' + data.userId).set({
//         name: data.name,
//         content: data.content,
//         date: data.date,
//         sekolah: data.sekolah,
//         password: data.password
//     })
// }

// test new
export const addDataToAPI = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch({type: 'CHANGE_LOADING', value: true})
            firebase.auth().createUserWithEmailAndPassword(data.content, data.password)
                .then(res =>{
                    console.log('success:', res)
                    
                    database.ref('notes/' + data.userId).push({
                        name: data.name,
                        content: data.content,
                        date: data.date,
                        sekolah: data.sekolah,
                        password: data.password
                    })
                    const dataUser = {
                        email: res.user.email,
                        uid: res.user.uid,
                        emailVerified: res.user.emailVerified,
                        refreshToken: res.user.refreshToken
                        }
                    dispatch({type: 'CHANGE_USER', value: dataUser})
                    dispatch({type: 'CHANGE_LOADING', value: false})
                    resolve(dataUser)
                })
                .catch(function(error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorCode, errorMessage)
                    dispatch({type: 'CHANGE_LOADING', value: false})
                    reject(false)
                })
        }) 


}

export const addWacanaToAPI = (data) => (dispatch) => {
    database.ref('wacanas/' + data.userId).push({
        judulWacana: data.judulWacana,
        gambarWacana: data.gambarWacana,
            instruksi1: data.instruksi1,
            instruksi2: data.instruksi2,
            instruksi3: data.instruksi3,
            instruksi4: data.instruksi4,
            judulArticle1: data.judulArticle1,
            gambarArticle1: data.gambarArticle1,
            contentArticle1: data.contentArticle1,
            judulArticle2: data.judulArticle2,
            gambarArticle2: data.gambarArticle2,
            contentArticle2: data.contentArticle2,
            judulArticle3: data.judulArticle3,
            gambarArticle3: data.gambarArticle3,
            contentArticle3: data.contentArticle3,
            judulArticle4: data.judulArticle4,
            gambarArticle4: data.gambarArticle4,
            contentArticle4: data.contentArticle4,
            pertanyaan1: data.pertanyaan1,
            jawaban1: data.jawaban1,
            option1a: data.option1a,
            option1b: data.option1b,
            option1c: data.option1c,
            option1d: data.option1d,
            pertanyaan2: data.pertanyaan2,
            jawaban2: data.jawaban2,
            option2a: data.option2a,
            option2b: data.option2b,
            option2c: data.option2c,
            option2d: data.option2d,
            pertanyaan3: data.pertanyaan3,
            jawaban3: data.jawaban3,
            option3a: data.option3a,
            option3b: data.option3b,
            option3c: data.option3c,
            option3d: data.option3d,
            pertanyaan4: data.pertanyaan4,
            jawaban4: data.jawaban4,
            option4a: data.option4a,
            option4b: data.option4b,
            option4c: data.option4c,
            option4d: data.option4d,
            pertanyaan5: data.pertanyaan5,
            jawaban5: data.jawaban5,
            option5a: data.option5a,
            option5b: data.option5b,
            option5c: data.option5c,
            option5d: data.option5d,
            pertanyaan6: data.pertanyaan6,
            jawaban6: data.jawaban6,
            option6a: data.option6a,
            option6b: data.option6b,
            option6c: data.option6c,
            option6d: data.option6d,
            pertanyaan7: data.pertanyaan7,
            jawaban7: data.jawaban7,
            option7a: data.option7a,
            option7b: data.option7b,
            option7c: data.option7c,
            option7d: data.option7d,
            pertanyaan8: data.pertanyaan8,
            jawaban8: data.jawaban8,
            option8a: data.option8a,
            option8b: data.option8b,
            option8c: data.option8c,
            option8d: data.option8d,
            pertanyaan9: data.pertanyaan9,
            jawaban9: data.jawaban9,
            option9a: data.option9a,
            option9b: data.option9b,
            option9c: data.option9c,
            option9d: data.option9d,
            pertanyaan10: data.pertanyaan10,
            jawaban10: data.jawaban10,
            option10a: data.option10a,
            option10b: data.option10b,
            option10c: data.option10c,
            option10d: data.option10d,
            pertanyaan11: data.pertanyaan11,
            jawaban11: data.jawaban11,
            option11a: data.option11a,
            option11b: data.option11b,
            option11c: data.option11c,
            option11d: data.option11d,
            pertanyaan12: data.pertanyaan12,
            jawaban12: data.jawaban12,
            option12a: data.option12a,
            option12b: data.option12b,
            option12c: data.option12c,
            option12d: data.option12d,
            pertanyaan13: data.pertanyaan13,
            jawaban13: data.jawaban13,
            option13a: data.option13a,
            option13b: data.option13b,
            option13c: data.option13c,
            option13d: data.option13d,
            pertanyaan14: data.pertanyaan14,
            jawaban14: data.jawaban14,
            option14a: data.option14a,
            option14b: data.option14b,
            option14c: data.option14c,
            option14d: data.option14d,
            pertanyaan15: data.pertanyaan15,
            jawaban15: data.jawaban15,
            option15a: data.option15a,
            option15b: data.option15b,
            option15c: data.option15c,
            option15d: data.option15d,
            pertanyaan16: data.pertanyaan16,
            jawaban16: data.jawaban16,
            option16a: data.option16a,
            option16b: data.option16b,
            option16c: data.option16c,
            option16d: data.option16d,
            pertanyaan17: data.pertanyaan17,
            jawaban17: data.jawaban17,
            option17a: data.option17a,
            option17b: data.option17b,
            option17c: data.option17c,
            option17d: data.option17d,
            pertanyaan18: data.pertanyaan18,
            jawaban18: data.jawaban18,
            option18a: data.option18a,
            option18b: data.option18b,
            option18c: data.option18c,
            option18d: data.option18d,
            pertanyaan19: data.pertanyaan19,
            jawaban19: data.jawaban19,
            option19a: data.option19a,
            option19b: data.option19b,
            option19c: data.option19c,
            option19d: data.option19d,
            pertanyaan20: data.pertanyaan20,
            jawaban20: data.jawaban20,
            option20a: data.option20a,
            option20b: data.option20b,
            option20c: data.option20c,
            option20d: data.option20d,
        textButton: 'SIMPAN',
        noteId: ''
    })
}

export const getDataFromAPI = (userId) => (dispatch) => {
//     const urlNotes = database.ref('notes/' + userId);
//     return new Promise ((resolve, reject) => {
//          urlNotes.on('value', function(snapshot) {
//         // updateStarCount(postElement, snapshot.val());
//         console.log('getData: ',snapshot.val())
//         const data = [];
//         Object.keys(snapshot.val()).map(key=> {
//             data.push({
//                 id: key,
//                 data: snapshot.val()[key]
//             })
//         })
//         dispatch({type: 'SET_NOTES', value: data})
//         resolve(snapshot.val())
//         });
//     })
}

export const updateDataAPI = (data) => (dispatch) => {
    const urlNotes = database.ref(`notes/${data.userId}/${data.noteId}`);
    return new Promise ((resolve, reject) => {
         urlNotes.set({
            name: data.name,
            content: data.content,
            date: data.date,
            sekolah: data.sekolah,
            password: data.password
            }, (err) => {
            if(err){
                reject(false);
            } else{
                resolve(true)
            }
         })
    })
}

export const deleteDataAPI = (data) => (dispatch) => {
    const urlNotes = database.ref(`notes/${data.userId}/${data.noteId}`);
    return new Promise ((resolve, reject) => {
         urlNotes.remove();
    })
}

   