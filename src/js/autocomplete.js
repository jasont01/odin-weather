import fetchWeatherData from './main';
//import autoCompleteJS from '@tarekraafat/autocomplete.js';

const autoCompleteJS = new autoComplete({
    data: {                              // Data src [Array, Function, Async] | (REQUIRED)
      src: async () => {
        // API key token
        const token = "this_is_the_API_token_number";
        // User search query
        const query = document.querySelector("#autoComplete").value;
        // Fetch External Data Source
        const source = await fetch('./location_data.json');
        // Format data into JSON
        const data = await source.json();
        // Return Fetched data
        return data;
      },
      key: ["name"],
      cache: true
    },
    sort: (a, b) => {                    // Sort rendered results ascendingly | (Optional)
        if (a.match < b.match) return -1;
        if (a.match > b.match) return 1;
        return 0;
    },
    placeHolder: "City...",              // Place Holder text                 | (Optional)
    selector: "#autoComplete",           // Input field selector              | (Optional)
    observer: true,                      // Input field observer | (Optional)
    threshold: 3,                        // Min. Chars length to start Engine | (Optional)
    debounce: 300,                       // Post duration for engine to start | (Optional)
    searchEngine: "strict",              // Search Engine type/mode           | (Optional)
    resultsList: {                       // Rendered results list object      | (Optional)
        container: source => {
            source.setAttribute("id", "locations");
        },
        destination: ".search",
        position: "afterend",
        element: "ul"
    },
    maxResults: 5,                         // Max. number of rendered results | (Optional)
    highlight: {
        render: true,                    // Highlight matching results        | (Optional)
    },
    resultItem: {                          // Rendered result item            | (Optional)
        content: (data, element) => {
            element.style = "display: flex; justify-content: space-between;";
            element.innerHTML = `
            <span>
                ${data.match}
            </span>
            <span style="color: rgba(0,0,0,.2);">
                ${data.value.state}
            </span>`;
        },
        element: "li"
    },
    noResults: (dataFeedback, generateList) => {
        // Generate autoComplete List
        generateList(autoCompleteJS, dataFeedback, dataFeedback.results);
        // No Results List Item
        const result = document.createElement("li");
        result.setAttribute("class", "no_result");
        result.setAttribute("tabindex", "1");
        result.innerHTML = `<span style="display: flex; align-items: center; font-weight: 100; color: rgba(0,0,0,.2);">Found No Results for "${dataFeedback.query}"</span>`;
        //document.querySelector(`#${autoCompleteJS.resultsList.idName}`).appendChild(result);
        document.querySelector('#locations').appendChild(result);

    },
    onSelection: feedback => {             // Action script onSelection event | (Optional)
        //console.log(feedback.selection.value);
        fetchWeatherData(feedback.selection.value);
    }
});