function genTextSect(){
    const titleLable=document.createElement("label");
    titleLable.textContent="Subsection Title";
    titleLable.for="sub-tit";
    const titleInput= document.createElement("input");
    titleLable.className="sub-tit";
    titleInput.className="sub-data";
    titleInput.name="sub-tit";
    titleInput.id="sub-tit";
    titleInput.placeholder="Subsection Title";
    const form= document.querySelector("div");
    const button= document.querySelector("button");
    form.insertBefore(titleLable,button);
    form.insertBefore(titleInput, button);

    const desclabel= document.createElement("label");
    desclabel.textContent="Subsection Content";
    desclabel.for="sub-desc";
    desclabel.className="sub-tit";
    const descContent= document.createElement("textarea");
    descContent.name="sub-desc";
    descContent.id="sub-desc";
    descContent.className="cont-area";
    form.insertBefore(desclabel,button);
    form.insertBefore(descContent, button);
}

function genImgSect(){
    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Image Title";
    titleLabel.for = "img-tit";
    titleLabel.className = "sub-tit";
    const titleInput = document.createElement("input");
    titleInput.className = "sub-data";
    titleInput.name = "img-tit";
    titleInput.id = "img-tit";
    titleInput.placeholder = "Image Title";
    const linkLabel = document.createElement("label");
    linkLabel.textContent = "Image Link";
    linkLabel.for = "img-link";
    linkLabel.className = "sub-tit";
    const linkInput = document.createElement("input");
    linkInput.className = "sub-data";
    linkInput.name = "img-link";
    linkInput.id = "img-link";
    linkInput.placeholder = "Image Link";
    const form = document.querySelector("div");
    const button = document.querySelector("button");
    form.insertBefore(titleLabel, button);
    form.insertBefore(titleInput, button);
    form.insertBefore(linkLabel, button);
    form.insertBefore(linkInput, button);
}

function genVidSect(){
    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Video Title";
    titleLabel.for = "vid-tit";
    titleLabel.className = "sub-tit";
    const titleInput = document.createElement("input");
    titleInput.className = "sub-data";
    titleInput.name = "vid-tit";
    titleInput.id = "vid-tit";
    titleInput.placeholder = "Video Title";
    const linkLabel = document.createElement("label");
    linkLabel.textContent = "Video Link";
    linkLabel.for = "vid-link";
    linkLabel.className = "sub-tit";
    const linkInput = document.createElement("input");
    linkInput.className = "sub-data";
    linkInput.name = "vid-link";
    linkInput.id = "vid-link";
    linkInput.placeholder = "Video Link";
    const form = document.querySelector("div");
    const button = document.querySelector("button");
    form.insertBefore(titleLabel, button);
    form.insertBefore(titleInput, button);
    form.insertBefore(linkLabel, button);
    form.insertBefore(linkInput, button);
} 

