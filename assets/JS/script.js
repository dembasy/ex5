// definition de la fonction afin d'afficher le resultat
function result(){
  // definition des variable permettant d'effectuer le calcul
  var firstNumber = document.getElementById('firstNumber').value;
  var secondNumber = document.getElementById('secondNumber').value;
  // definition de la fonction mathfloor afin d'afficher l'entier
  var integer = Math.trunc(firstNumber);
  // deifinition de la variable regex
  var reg = /^[0-9] + [.][0-9]+$/;
  // condition pour la regex afin d'éviter les conflits
    if(reg.test(firstNumber) && reg.test(secondNumber)){
      alert(firstNumber * secondNumber);
  } else {
      alert('Wrong number retry');
    }

  }
  // | Correction
  
  // function calcul() {
  //   // recupération des saisies
  //   var firstNumber = document.getElementById("firstNumber").value;
  //   var secondNumber = document.getElementById("secondNumber").value;
  //   var reg =/^[0-9]+[.][0-9]+$/;
  //   // test regex
  //   if(reg.test(firstNumber) && reg.test(secondNumber)){
  //     // ont mets le premier nombre a l'entier inferieur
  //     firstNumber = Math.trunc(firstNumber);
  //     // on affiche la multiplication de firstNumber et secondNumber
  //     alert(firstNumber * secondNumber);
  //   } else {
  //     alert('saisir un nombre décimal');
  //   }
  // }
