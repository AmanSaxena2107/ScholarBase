import { db, setDoc, doc } from './firebase-config.js';


const submit= document.querySelector(".submit");
submit.addEventListener("click",()=>{
    const title= document.querySelector("#Title")
    const subject= document.querySelector("#Subject");
    const unit= document.querySelector("#Unit");
    const section= document.querySelectorAll(".Section");

    let ob={};
    ob.title= title.value;
    ob.unit= unit.value;
    ob.id= title.value.replace(/\s+/g, "");
    ob.subject = subject.value;

    let sections=[];
    let i=0;
    for(let sec of section){
        const subtit= sec.querySelector(".sub-tit");
        const subdesc= sec.querySelector(".sub-content");
        const sectionObj = {};
        sectionObj.title = subtit.value;

        if(sec.classList.contains("img")){
            sectionObj.src = subdesc.value;
            sectionObj.type = "image";
        }
        else if(sec.classList.contains("video")){
            sectionObj.source = subdesc.value;
            sectionObj.type = "video";
        }
        else {
            sectionObj.desc = subdesc.value;
            sectionObj.type = "text";
        }
        sections[i++] = sectionObj;
    }
    ob.section= sections;

    upload(ob);
})

async function upload(ob){
    await setDoc(doc(db, ob.subject, ob.id), ob);
}