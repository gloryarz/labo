
// Se obtienen mensajes de firestore
db.collection('posted').onSnapshot((querySnapshot) => {
    comentarios.innerHTML = '';
  
    querySnapshot.forEach((doc) => {
      let postID = doc.id; // ID del post
      let postName = doc.data().name; // Nombre del usuario
      let text = doc.data().post; // Texto del post
      let userId = doc.data().user; // ID del usuario logeado
      let bringComments = doc.data().comments;
      printPost(postID, postName, text, userId, bringComments);
      console.log(bringComments)
    });
  
  });
  
  db.collection('posted').onSnapshot((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      let postToPrint = doc.data().comments;
      printComments(postToPrint);
    });
  });
  
  // Función para imprimir
  /* Se pasan como parámetros el ID del post, nombre del usuario, texto
  y ID del usuario. Se declara una condicional que compara si el ID del usuario
  logeado coincide con el ID del usuario del post publicado, si son iguales 
  se imprime una caja con el nombre del usuario, el post, el botón de like, 
  botón para editar y botón para borrar. Si no es el mismo se imprime caja con 
  nombre de usuario, texto y botón de like.
  Se utiliza onclick para accionar los botones, se pasa como parámetro el ID del post   
  */
  const printPost = (postID, postName, text, userId, bringComments) => {
    let newID = postID + 1;
    let commentID = postID + 2;
    console.log('inside', bringComments)
    
      comentarios.innerHTML += `<div class="row">
          <div class="col s12 m6">
            <div class="card blue-grey lighten-5">
              <div class="card-content black-text">
                <span class="card-title pink-text">${postName}</span>
                <p>${text}</p>
              </div>
              <div id="${newID}">
                <input placeholder="Escribe tu comentario" id="${commentID}">
                <button onclick="addComment('${postID}','${bringComments}','${commentID}','${newID}')">Clik me</button>
              </div>
              <div class="card-action">
                      <button class="btn-flat pink-text" onclick="likePost('${postID}')">
                              <i class="large material-icons">favorite</i>
                      </button>
                      <button class="btn-flat" onclick="editPost('${postID}')">
                              <i class="large material-icons">mode_edit</i>
                      </button>
                      <button class="btn-flat" onclick="deletePost('${postID}','${postName}', '${text}', '${userId}')">
                              <i class="large material-icons">delete</i>
                      </button>
                      
                      
              </div>
            </div>
          </div>
        </div>`;
  };

  
const printComments = (postToPrint) => {
    //console.log('snape', postToPrint)
    postToPrint.forEach(el => {
      let commentedName = el.name;
      let commentedID = el.commID;
      let commentedSpaceID = el.commSpaceID;
      let commentedTxt = el.commentTxt
      let commentedFecha = el.fecha;
      let commentedHour = el.hour;
  
      const divComment = document.getElementById(commentedSpaceID);
      divComment.innerHTML += `<div class="row">
      <div class="col-10">
      <div><p>${commentedName}</p><p>${commentedFecha}</p></div>
      
      <p>${commentedTxt}</p>
      </div>  
      </div>`
      console.log(commentedID, commentedSpaceID, commentedName, commentedTxt, commentedFecha,  commentedHour)
      
    });
   
  }

  const addComment = (postID, bringComments, commentID, newID) => {
    console.log(postID, bringComments, commentID)
  
  
    let addingComment = document.getElementById(commentID)
    let commentSpaceID = document.getElementById(newID)
    console.log(addingComment.value)
    let newComment = addingComment.value
    let commentObj = {
      "name": "Gloria",
      "hour": "5:50",
      "fecha": "03/05/29",
      "commentTxt": newComment,
      "commID": postID,
      "commSpaceID": newID
    }
  
    let postRef = db.collection('posted').doc(postID);
  
    // Atomically add a new region to the "regions" array field.
    postRef.update({
        comments: firebase.firestore.FieldValue.arrayUnion(commentObj)
      }).then(function () {
        console.log('Document successfully updated!');
      })
      .catch(function (error) {
        // The document probably doesn't exist.
        console.error('Error updating document: ', error);
      });
  
  }

  const deletePost = (postID) => {
    db.collection('posted').doc(postID).delete().then(function () {
      console.log('Post borrado');
    }).catch(function (error) {
      console.error('Error: ', error);
    });
  };