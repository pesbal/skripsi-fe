const Formulir = document.querySelector("#formreset");
// dragText = Formulir.querySelector("h2");
button = Formulir.querySelector("button");
input = Formulir.querySelector("input");
let file;

button.onclick = ()=>{
    input.click();
} 

input.addEventListener("change", function(){
    file = this.files[0];
    showFile();
    Formulir.classList.add("active");
});
//keluar dari drag area
Formulir.addEventListener("dragover", (event)=>{
    event.preventDefault();
    // console.log("File Is Over Drag Area");
    Formulir.classList.add("active");
    // dragText.textContent = "Lepas File untuk Upload";
});

//leave drag area	
Formulir.addEventListener("dragleave", ()=>{
    // console.log("File Is Over Drag Area");
    Formulir.classList.remove("active");
    // dragText.textContent = "Unggah File Untuk Upload";
});	

Formulir.addEventListener("drop", (event)=>{
    event.preventDefault();
    // console.log("File Is dropped on Drag Area");
    file = event.dataTransfer.files[0];
    showFile();

});
function showFile(){
    let fileType = file.type;
    // console.log(fileType);
    console.log("showFile: ", file);
    let fileURL
    let validExtensions = ["image/jpeg", "image/jpg", "image/png" ];
    if(validExtensions.includes(fileType)){
        let fileReader = new FileReader();
        fileReader.onload = ()=>{
            fileURL = fileReader.result;
            name(fileURL)
            let imgTag = `<img src="${fileURL}" alt="">`;
            Formulir.innerHTML = imgTag;
            let buttonTag = `<a onclick="reset()"><button>Upload Ulang</button></a> `;
            var tombol = document.getElementById("tombolbawah");
            tombol += buttonTag;
        }
        fileReader.readAsDataURL(file)
    }else{
        alert("Mohon Untuk Mengunggah File");
        Formulir.classList.remove("active");
    }
}
function reset1(){
    let formTag = `<form action="#"> <i class="fa fa-cloud-upload-alt"></i> <p>Unggah File Untuk Upload</p> <span>or</span> <button onclick="upload()">Unggah Berkas</button><input type="file" hidden="" id="inputgambar"> </form>`
    Formulir.innerHTML = formTag;
    console.log("reset: ", file);

}
function upload(){
    input.click();

}							