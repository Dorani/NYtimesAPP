//Setup Variables
//------------------------------------------------------------
var authKey = "6fd70e5d37284789ac71be5cb99c1f29";

//Search Parameters
var queryTerm  = "";
var numResults = 0;
var startYear  = 0;
var endYear    = 0;

//URL BASE

var queryURLBase = "http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey;

//Variable to track number of articles
var articleCounter = 0;

//Functions
//------------------------------------------------------------

function runQuery(numArticles, queryURL){
    //Ajax Function
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(NYTData){
      console.log(NYTData);
    })

};

//Main Process
//------------------------------------------------------------

$('#run-search').on('click', function(){
  alert("test");

  queryTerm = $("#search-term").val().trim();
  console.log(queryTerm);
  var newURL = queryURLBase + "&q=" + queryTerm;
  console.log(newURL);

  //Send the ajax call the newly asse,bled URL
  runQuery(10, );

  return false;
});




//1. Retrive user inputs and convert to Variables
//2. Use those variables to run an ajax call to the NYTIMES
//3. Breakdown the NYT Object into useable fields
//4. Dynamically generate html content

//5. Dealing with edge cases
