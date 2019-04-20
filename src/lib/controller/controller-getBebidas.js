export const getBebidasDesayuno = (dataSnapshot) =>{
    const newArray = [];
    firebase.firestore().collection("bebidas").where('tipo', '==', 'desayuno').get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            newArray.push({
                id:doc.id,
                name: doc.data().name,
                precio: doc.data().precio,
                tipo: doc.data().precio
            })           
        });
        dataSnapshot(newArray);
    });    
}



