import { db, doc, getDoc } from './firebase-config.js'

function getUrlParameters() {
    const params = new URLSearchParams(window.location.search);
    return {
        subject: params.get('subject'),
        articleId: params.get('articleId')
    };
}

async function loadArticleFromFirebase(subject, articleId){
    const docRef = doc(db, subject, articleId);
    const docSnap = await getDoc(docRef);  // Fixed: renamed variable and added await

    if (docSnap.exists()) {
        const articleData = docSnap.data();  // Fixed: renamed variable
        loadArticle(articleData);
    } else {
        console.log("No such document!");
    }
}

function loadArticle(articleData){  // Fixed: renamed parameter
    const contentArea = document.querySelector('#content-area');
    contentArea.innerHTML='';
    const articleTitle = articleData.title;
    document.title=articleTitle;
    const articleTit = document.createElement('div');
    articleTit.innerHTML = articleTitle;
    articleTit.className = 'article-title';
    contentArea.appendChild(articleTit);

    for (const section of articleData.section) {  // Fixed: added const
        const subsec = document.createElement('details');
        subsec.className = 'subsection';
        const secTitle = document.createElement('summary');
        secTitle.className = 'subhead';
        secTitle.innerHTML = section.title;
        subsec.appendChild(secTitle);
        const pre= document.createElement('pre');
        
        if (section.type == 'video') {
            const sectContent = document.createElement('video');
            sectContent.src = section.source;
            sectContent.className = 'subbody';

            pre.appendChild(sectContent);
        }
        else if (section.type == 'image') {
            const sectContent = document.createElement('img');
            sectContent.src = section.source;
            sectContent.className = 'subbody';
            sectContent.alt = section.title;  // Added alt text for accessibility
            pre.appendChild(sectContent);
        }
        else {
            const sectContent = document.createElement('div');
            sectContent.innerHTML = section.desc;
            sectContent.className = 'subbody';
            pre.appendChild(sectContent);
        }
        subsec.appendChild(pre);
        contentArea.appendChild(subsec);
    }
}

window.addEventListener('load', () => {
    const { subject, articleId } = getUrlParameters();    
    loadArticleFromFirebase(subject, articleId);
});