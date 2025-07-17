function genTextSect(){
    const section = document.createElement("section");
    section.classList.add("Section", "text");

    const titleLable = document.createElement("label");
    titleLable.textContent = "Subsection Title";
    titleLable.for = "sub-tit";
    titleLable.className = "sub-label";
    const titleInput = document.createElement("input");
    titleInput.className = "sub-tit";
    titleInput.name = "sub-tit";
    titleInput.id = "sub-tit";
    titleInput.placeholder = "Subsection Title";

    section.appendChild(titleLable);
    section.appendChild(titleInput);

    const desclabel = document.createElement("label");
    desclabel.textContent = "Subsection Content";
    desclabel.for = "sub-desc";
    desclabel.className = "sub-label";
    const descContent = document.createElement("textarea");
    descContent.name = "sub-desc";
    descContent.id = "sub-desc";
    descContent.className = "sub-content";

    section.appendChild(desclabel);
    section.appendChild(descContent);

    const form = document.querySelector("div");
    const button = document.querySelector("button");
    form.insertBefore(section, button);
}

function genImgSect(){
    const section = document.createElement("section");
    section.classList.add("Section", "img");

    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Image Title";
    titleLabel.for = "img-tit";
    titleLabel.className = "sub-label";
    const titleInput = document.createElement("input");
    titleInput.className = "sub-tit";
    titleInput.name = "img-tit";
    titleInput.id = "img-tit";
    titleInput.placeholder = "Image Title";

    const linkLabel = document.createElement("label");
    linkLabel.textContent = "Image Link";
    linkLabel.for = "img-link";
    linkLabel.className = "sub-label";
    const linkInput = document.createElement("input");
    linkInput.className = "sub-content";
    linkInput.name = "img-link";
    linkInput.id = "img-link";
    linkInput.placeholder = "Image Link";

    section.appendChild(titleLabel);
    section.appendChild(titleInput);
    section.appendChild(linkLabel);
    section.appendChild(linkInput);

    const form = document.querySelector("div");
    const button = document.querySelector("button");
    form.insertBefore(section, button);
}

function genVidSect(){
    const section = document.createElement("section");
    section.classList.add("Section", "video");

    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Video Title";
    titleLabel.for = "vid-tit";
    titleLabel.className = "sub-label";
    const titleInput = document.createElement("input");
    titleInput.className = "sub-tit";
    titleInput.name = "vid-tit";
    titleInput.id = "vid-tit";
    titleInput.placeholder = "Video Title";

    const linkLabel = document.createElement("label");
    linkLabel.textContent = "Video Link";
    linkLabel.for = "vid-link";
    linkLabel.className = "sub-label";
    const linkInput = document.createElement("input");
    linkInput.className = "sub-content";
    linkInput.name = "vid-link";
    linkInput.id = "vid-link";
    linkInput.placeholder = "Video Link";

    section.appendChild(titleLabel);
    section.appendChild(titleInput);
    section.appendChild(linkLabel);
    section.appendChild(linkInput);

    const form = document.querySelector("div");
    const button = document.querySelector("button");
    form.insertBefore(section, button);
}
