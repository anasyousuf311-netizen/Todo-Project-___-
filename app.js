
var userDataList = [];

var addBtn = document.getElementById('addBtn');
var displayList = document.getElementById('displayList');

addBtn.addEventListener('click',addinfo );

function addinfo() {
 
    var name = document.getElementById('userName').value;
    var age = document.getElementById('userAge').value;
    var city = document.getElementById('userCity').value;

   
    if (name === '' || age === '' || city === '') {
        alert("Please Fill All the fields");
        return;
    }

  
    var userObject = {
        name: name,
        age: age,
        city: city
    };

 
    userDataList.push(userObject);

    console.log("Updated Array:", userDataList);


    updateUI();
    document.getElementById('userName').value = '';
    document.getElementById('userAge').value = '';
    document.getElementById('userCity').value = '';
}

function updateUI() {
   
    displayList.innerHTML = '';


 for (let i = 0; i < userDataList.length; i++) {
   
    let user = userDataList[i]; 
    
  var p = document.createElement('p');
  p.className='info-p';
        p.textContent = `${i + 1}.  ${user.name} (${user.age} yrs Old).From ${user.city}`;


        var userDiv=document.createElement('div');
      userDiv.className='userinfoline';
        var deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        deleteBtn.className = "deletebtn";

    deleteBtn.addEventListener('click', removeUser);

function removeUser() {
    userDataList.splice(i, 1);
    updateUI();
    console.log("Updated Array:", userDataList);
}


        userDiv.appendChild(p);       
        userDiv.appendChild(deleteBtn); 
        
        displayList.appendChild(userDiv); 
}
}