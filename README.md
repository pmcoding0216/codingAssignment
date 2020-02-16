**installation**

npm install serverless -g

create aws profile with profile name pmcoding

serverless deploy

---
**sample api calls**


Convert html to pdf

curl -v -X GET --header 'Accept: application/pdf' https://avoz58zp0j.execute-api.us-east-1.amazonaws.com/dev/html2pdf?url="https://www.pennymacusa.com/" -o pm.pdf
