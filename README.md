**installation**

npm install serverless -g

create aws profile with profile name pmcoding

serverless deploy

---
**sample api calls**


Convert html to pdf

curl -v -X GET --header 'Accept: application/pdf' https://avoz58zp0j.execute-api.us-east-1.amazonaws.com/dev/html2pdf?url="https://www.pennymacusa.com/" -o pm.pdf


---
**Questions**

1. There are several ways to accomplish portions of this test.  Which ways did you consider before deciding on the method you chose?  Why?

Convert to PDF is basically print. The task needs to be performed are
   - Render out the page html
   - Convert rendered result to PDF using pdf library

Without any specifics to optimize on, the most generic and easiest way is to emulate browser's print. Other methods are hardly worth the effort. So I quickly zeroed into finding something works like browser and has this kind of "print to pdf" function, which I used before, puppeteer/chrome. And luckily someone packaged chrome in aws lambda, makes it the simplest way.

2. What would you/could you have done differently if this had not been a lambda?

If it's used by actual human user (not automation), with demo-graphics that would run relatively modern device, I probably would do the convert to pdf in browser to save server side cost and process delay. Most modern device's browser are powerful enough to convert. I would do something like html2canavas + jspdf. 

If it's high volume process, I probably would run my own cloud infastruture to run headless browser instead of running in in lambda. I have to bump memory and execution time up for the lambda function, which is not cost efficient for high volume use.

Whether on lambda or not, if there's a simple template, you need it for high volume, it can also be manually put together by just using pdf libraries. 


