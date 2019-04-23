export const getBreakfastDrinks = (dataSnapshot) =>{
    const newArray = [];
    firebase.firestore().collection("bebidas").where('tipo', '==', 'desayuno').onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            newArray.push({
                id:doc.id,
                nombre: doc.data().nombre,
                precio: doc.data().precio,
                cantidad: doc.data().cantidad,
                tipo: doc.data().tipo
            })           
        });
        dataSnapshot(newArray);
    });    
}



