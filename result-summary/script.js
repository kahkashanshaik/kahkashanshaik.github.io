
/**
 * Data reading one way by using import 
 * For this to work make sure to add type="module" to javascript file while adding it in html file
*/

import importdata from './data.json' assert { type: 'json' };   
// console.log(importdata);

/**
 * Another method imorting data from JS Fetch API it works for file reading from both local and server and data import from URL
*/
var responseData = {};
var wrapper = document.querySelector('.score-cards');
fetch('./data.json')
    .then((response) => {
        if(response.ok) 
            return response.json();

        throw new Error('Something Went Wrong');
    })
    .then((responseJson) => {
        responseData = responseJson
        fillData(responseData);
    })
    .catch((error) => {
        console.log(error);
    });


function fillData(responseData) {
    if(responseData != '') {
        for(let i=0; i< responseData.length; i++){
            wrapper.innerHTML += `<div class="score-card bg-${responseData[i].color}">
                                    <div class="right-info">
                                            <p>
                                                <img src="${responseData[i].icon}" alt="">
                                            </p>
                                            <p class="text-sm bold-500 ${responseData[i].color}">
                                                ${responseData[i].category}
                                            </p>
                                        </div>
                                        <div>
                                            <p class="text-sm"><span class="bold-600">${responseData[i].score}</span> / 100</p>
                                        </div>
                                    </div>`;
        }
    }
}


