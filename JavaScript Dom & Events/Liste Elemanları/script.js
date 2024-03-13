
"use strict";

let gorevListesi = [];

if(localStorage.getItem("gorevListesi") !==null) {
    gorevListesi =JSON.parse().getItem("gorevListesi");
};

let editId;
let isEditTask = false;

const taskInput = document.querySelector("#txtTaskName");
const clearBtn = document.querySelector("#btnClear");
const filters = document.querySelectorAll(".filters span");

displayTask("all");

// Yapıları HTML Dosyasına Ekleyen Elemanlar

function displayTask(filter) {
    let ul = document.getElementById("task-list")
    ul.innerHTML = "";

    if (gorevListesi.length == 0) {
        ul.innerHTML =`<p class="p-3 m-0"> Görev Listesi Boş </p>`
    }else{
        for(let gorev of gorevListesi) {

            // Tamamlanan Görevler İçin
            let completed = gorev.durum == "completed" ? "checked": " ";

            if(filter == gorev.durum || filter == "all"){

                let li =`
                <li class="task list-group-item">
                    <div class="form-check">
                        <input type="checkbox" onclick="updateStatus(this)" id="${gorev.id}" class="form-check-input" ${completed}>
                        <label for="${gorev.id}" class="form-check-label ${completed}">${gorev.gorevAdi}</label>
                    </div>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa-solid fa-ellipsis"></i>
                        </button>
                        <ul class="dropdown-menu">
                            <li ><a onclick="deleteTask(${gorev.id})" class="dropdown-item" href="#">Sil</a></li>
                            <li><a onclick='editTask(${gorev.id}, "${gorev.gorevAdi}")' class="dropdown-item" href="#">Düzenle</a></li>
                        </ul>
                    </div>
                </li>
                `;
                ul.insertAdjacentHTML("beforeend", li);
            }
        }
    }
};

//Yeni Eleman Ekleme Ve Güncelleme
document.querySelector("#btnAddNewTask").addEventListener("click",newTask)

for(let span of filters) {
    span.addEventListener("click", function(){
        document.querySelector("span.active").classList.remove("active");
        span.classList.add("active");
        displayTask(span.id);
    })
}

function newTask(event) {

    if(taskInput.value == "") {
        alert("görev girmelisiniz")
    } else {
        if(!isEditTask) {         
        gorevListesi.push({"id": gorevListesi.length + 1, "gorevAdi":taskInput.value, "durum": "pending"})
        }else{
        for(let gorev of gorevListesi) {
                if(gorev.id == editId) {
                    gorev.gorevAdi = taskInput.value;
                }
                isEditTask = false;
            }
        }
        taskInput.value = ""; //Eklenilen değer yerindeki değeri temizler.
        displayTask(document.querySelector("span.active").id);
        localStorage.setItem("gorevListesi", JSON.stringify(gorevListesi));
    }

    event.preventDefault()
}

//Elemanları Siler
function deleteTask(id) {
    let deletedId;

    //**** ALTERNATİF 1 *****///

    for(let index in gorevListesi) {
        if(gorevListesi[index].id == id){
                    deletedId = index;
        }
    }

    //**** ALTERNATİF 2 *****///

            // deletedId = gorevListesi.findIndex(function(gorev) {
            //     return gorev.id == id
            // });

            //**** ALTERNATİF 3 *****///
            
            // deletedId = gorevListesi.findIndex(gorev => gorev.id == id);

    gorevListesi.splice(deletedId, 1);
    displayTask(document.querySelector("span.active").id);
}

//Elemanları Düzenler
function editTask(taskId, taskName) {
    editId = taskId;
    isEditTask = true;
    taskInput.value = taskName;
    taskInput.focus();
    taskInput.classList.add("active");
}

//Elemanların Hepsini Siler 
btnClear.addEventListener("click", function() {
    gorevListesi.splice(0, gorevListesi.length);
    displayTask();
});

//Elemanların Yapılıp Yapılmadığını Kontrol Eder
function updateStatus(selectedTask) {
    let label = selectedTask.nextElementSibling;
    let durum;

    if(selectedTask.checked) {
        label.classList.add("checked");
        durum = "completed"
    }else{
        label.classList.remove("checked");
        durum = "pending"
    }

    for (let gorev of gorevListesi){
        if(gorev.id == selectedTask.id){
            gorev.durum = durum;
        }
    }
}

