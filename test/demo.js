describe("Real Appeal Email Support Webform", function(){

    it("Login to SF later Launch and Submit Webform ",function(){
        browser.url('https://stackoverflow.com/questions/37055507/webdriverio-take-full-page-screenshot') 
        browser.pause(20000)
        /*
        $('//title[contains(text(),"Login | Salesforce")]').waitForExist({timeout: 30000})
        var SFTitle = $('//title[contains(text(),"Login | Salesforce")]').getText()
        console.log("gettext value is",SFTitle);
        var title = "abd"
        if(title ==="abd")
        {
            console.log("successful") //sdfdsf
        }        
        else{
            console.log("failure")
        }
        browser.pause(3000)
        */
        browser.takeScreenshot()
        browser.saveDocumentScreenshot('screenshot/screenshotName.png')
    })
})