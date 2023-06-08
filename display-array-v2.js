const displayArray = (tab, option) => {
    const str = tab.join(option);
    return str 
};

let ukHun = ["Bing", "bang", "bong", "Sing", "sang", "song", "Ding", "dang", "dong"]

console.log(displayArray(ukHun, " - "))