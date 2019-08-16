const articleElement = document.getElementById("article");
const authorElement = document.getElementById("author");
const dateElement = document.getElementById("date");
const articleTextElement = document.getElementById("articleText");
const button = document.getElementById("register");
button.addEventListener("click",updateDB);

//Set database object here
const base = firebase.database().ref();

/**
 * Updates the database with the username and message.
 */
function updateDB(event){
    event.preventDefault();
    const Article        = articleElement.value;
    const Author         = authorElement.value;
    const Date           = dateElement.value;
    const ArticleText    = articleTextElement.value;


    articleElement.value = "";
    authorElement.value  = "";
    dateElement.value  = "";
    articleTextElement.value  = "";


    console.log("'" + Article + "'" + " , " + "By:" + Author + " , " + "Published On:" + Date + " , " + ArticleText);

    //Update database here
    let obj = {
        ARTICLE: Article,
        AUTHOR: Author,
        DATE: Date,
        ARTICLETEXT: ArticleText
    };

    base.push(obj);

}

// Set database "child_added" event listener here

base.on("child_added", addArticle);


function addArticle(rowData){
    const row = rowData.val();
    const ARTicle = row.ARTICLE;
    const AUThor = row.AUTHOR;
    const DATe = row.DATE;
    const ARTicletext = row.ARTICLETEXT;
}