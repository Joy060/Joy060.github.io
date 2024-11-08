class Card  {
    constructor (imgLink,title,Number,tag,txt,content){
        this.imgLink = imgLink;
        this.title = title;
        this.Number = Number;
        this.tag = tag;
        this.txt = txt;
        this.content = content;
    }

}

let cardA = new Card ("img/author.jpg","網頁UIUX | 插畫官網",false,"UIUX","網頁入門契機。","想為喜歡的插畫，對旗下週邊商品做一個統整商品與情報的台灣官網。");
let cardB = new Card ("img/author.jpg","前端框架 | 待辦清單",false,"React框架","網頁框架實作。","練習程式手感作品。");
let cardC = new Card ("img/author.jpg","影音剪輯 | 老屍",true,"短片","短影音培訓課結業作品","從發想到發表只有2周時間,主題圍繞著恐怖展開，並催生了小組LOGO動畫。");
let cardD = new Card ("img/author.jpg","平面動畫 | LOGO動畫",false,"AdobeEffect","動畫設計","很開心 很喜歡。");

let cards = [cardA,cardB,cardC,cardD];



const rigthDiv =document.getElementById("rigthDiv");

cards.forEach(item => {
    
    function setNumber (Number){
        return Number? '團隊作品':'個人作品'
    }

    const newDiv = document.createElement('div');
    newDiv.className = 'card';
    newDiv.innerHTML = 
    `<img src="${item.imgLink}" alt="">
    <h2> ${item.title}</h2>
    <div class="tagArea"><span class="tag">${setNumber(item.Number)}、${item.tag}</span></div>
    <p>${item.txt}</p>
    <p>${item.content}</p>`;
    rigthDiv.appendChild(newDiv);
});


// console.log(cards);

