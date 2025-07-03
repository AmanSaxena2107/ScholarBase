//ensure article is at destination
//update css
//link to html


import { db, collection, getDocs } from './firebase-config.js'

async function loadUnits(subject){
    console.log("Subject parameter:", subject);
    let UnitHash = {};
    const subref = collection(db, subject);
    const snapshot = await getDocs(subref);
    console.log("Snapshot size:", snapshot.size);
    
    const articles = [];
    
    snapshot.forEach((doc) => {
        console.log("Doc ID:", doc.id);
        console.log("Doc data:", doc.data());
        const docData = doc.data();
        
        // Filter out incomplete documents - UNCOMMENTED AND FIXED
        if (docData.unit && docData.order !== undefined && docData.title) {
            articles.push(docData);
        } else {
            console.log("Skipping incomplete document:", doc.id);
        }
    });
    
    console.log("Articles array:", articles);
    
    // Build the UnitHash
    for(let article of articles){       
        if (!UnitHash[article.unit]) 
            UnitHash[article.unit] = [];
        UnitHash[article.unit][article.order] = article;
    }
    
    console.log("Final UnitHash:", UnitHash);
    return UnitHash;
}

// MADE THIS FUNCTION ASYNC AND ADDED AWAIT
async function displayUnits(subject){
    const UnitHash = await loadUnits(subject); // ADDED AWAIT HERE
    const main = document.querySelector('.main');
    
    // Clear existing content first
    main.innerHTML = '<div id="subject"></div>';
    
    // Add subject title
    const subjectDiv = document.getElementById('subject');
    const subjectTitle = document.createElement('h1');
    subjectTitle.textContent = subject.charAt(0).toUpperCase() + subject.slice(1);
    subjectDiv.appendChild(subjectTitle);
    
    // FIXED THE FOR LOOP - added 'let' keyword
    for (let unitKey in UnitHash){
        const unit = UnitHash[unitKey];
        
        // Skip if unit is empty or undefined
        if (!unit || unit.length === 0) continue;
        
        const unitArea = document.createElement('div');
        unitArea.className = 'unit-area';
        unitArea.id = `unit${unitKey}`;
        
        const unitTitle = document.createElement('h2');
        unitTitle.textContent = unit[0].unit;
        unitArea.appendChild(unitTitle);
        
        const lectureList = document.createElement('ul');
        lectureList.className = 'lecture-list';
        
        for(let article of unit){
            const articleEle = document.createElement('li');
            const articleLink = document.createElement('a');
            // const currentUrl = new URL(window.location.href);
            // currentUrl.searchParams.set('articleId', article.id); // Use the document ID
            articleLink.href = 'article.html?subject='+subject+'&articleId='+article.id;
            articleLink.textContent = article.title; // Changed from empty string to '#'
            articleLink.textContent = article.title;
            articleEle.appendChild(articleLink);
            lectureList.appendChild(articleEle);
        }
        
        unitArea.appendChild(lectureList);
        main.appendChild(unitArea);
    }
}

// MADE THE EVENT LISTENER ASYNC TOO
window.addEventListener('load', async () => {
    const params = new URLSearchParams(window.location.search);
    const subject = params.get('subject');
    
    if (subject) {
        await displayUnits(subject); // ADDED AWAIT HERE
    } else {
        console.error('No subject parameter found in URL');
    }
})