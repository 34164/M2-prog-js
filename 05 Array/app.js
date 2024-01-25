class App {
    runApplication() {
        console.log("hello world");
        const list = ["Michael Jackson", "Charlie Puth", "NF"];
        console.log(list);
        for (let i = 0; i < list.length; i++) {
            const element = i +": " + list[i];
            console.log(element);
        }
        const nummers = [1, 2, 3];
        console.log(nummers);
        for (let i = 0; i < nummers.length; i++) {
            const element = nummers[i] + 1;
            console.log(element);
        }
        list.push("bod dylan")
        list.push("Prince")
        for (let i = 0; i < list.length; i++) {
            const element = i +": " + list[i];
            console.log(element);
        }
        let indexToRemove = list.indexOf("bob dylan")
        list.splice(indexToRemove,1)
        indexToRemove = list.indexOf("prince")
        list.splice(indexToRemove,1)
        list.push("The weekend")
        list.push("Leonel Thomas lll")
        for (let i = 0; i < list.length; i++) {
            const element = i +": " + list[i];
            console.log(element);
        }
        for (let i = 0; i < list.length; i++) {
            const element = i +": " + list[i];
        }
        let headerByCssClass = document.getElementsByClassName("bandName")
        let bandNameList = [];
        for (let i = 0; i < headerByCssClass.length; i++) {
            headerByCssClass[i].innerText = "TestA";
            console.log(bandNameList);
        }
        let headerElements = document.querySelectorAll("h1");
        for (let i = 0; i < headerElements.length; i++) {
            headerElements[i].innerText = "TestB";
        }
        let headersByCssClass = document.getElementsByClassName("test");
        for (let i = 0; i < headerByCssClass.length; i++) {
        headersByCssClass[0].innerText = "nieuws ";
        headersByCssClass[1].innerText = "reviews";
        headersByCssClass[2].innerText = "commentaar ";
        headersByCssClass[3].innerText = "test1";
        headersByCssClass[4].innerText = "test2 ";
        }

        let data =["nieuws", "reviews", "commentaar", "test1","test2"]
        for (let i = 0; i < headersByCssClass.length; i++) {
            const element = i +": " + data[i];
            headersByCssClass[i].innerText = element;
        }

    }
}
let app = new App();
app.runApplication();