let convertApi = ConvertApi.auth({secret: 'IUKg3bJcilaDVAO3'})
let elResult = document.getElementById('result')
let elResultLink = document.getElementById('resultLink')
elResult.style.display = 'none'

// On file input change, start conversion
document.getElementById('fileInput').addEventListener('change', async e => {
    elResult.style.display = 'none'
    document.documentElement.style.cursor = 'wait'
    try {
 
        // Converting DOCX to PDF file
        let params = convertApi.createParams()
        params.add('file', e.currentTarget.files[0])
        // params.add('converter', 'openoffice')
        let result = await convertApi.convert('pdf', 'compress', params)

        // Showing link with the result file
        elResultLink.setAttribute('href', result.files[0].Url)
        elResultLink.innerText = 'Download File'
        elResult.style.display = 'block'

    } finally {
        document.documentElement.style.cursor = 'default'
    }
})


// let elResult = document.getElementById("result");
// let elResultLink = document.getElementById("resultLink");
// let elFileSize = document.getElementById("fileSize");
// elResult.style.display = "none";
// elFileSize.style.display = "none";

// // On file input change, start conversion
// document.getElementById("fileInput").addEventListener("change", async (e) => {
//   elResult.style.display = "none";
//   document.documentElement.style.cursor = "wait";
//   try {
//     // Converting DOCX to PDF file
//     let params = convertApi.createParams();
//     params.add("File", e.currentTarget.files[0]);
//     let result = await convertApi.convert("pdf", "compress", params);

//     // Showing link with the result file
//     elResultLink.setAttribute("href", result.files[0].Url);
//     elResultLink.innerText = "Download File";
//     elFileSize.innerText = result.files[0].FileSize;
//     elResult.style.display = "block";
//     elFileSize.style.display = "block";
//   } finally {
//     document.documentElement.style.cursor = "default";
//   }
// });