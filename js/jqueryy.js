// alert(11);

(() => {

//------準備------//
const wikiInput = document.getElementById("find-text");
const wikiButton = document.getElementById("find-button");
const wikiBody = document.getElementById("result");

//------データ取得------//
//asyncで非同期処理する→awaitがセット

const wikiFetch = async (inputValue) => {
    
    //Wikiからデータを取得する
    const fetchValue = fetch(`https://ja.wikipedia.org/w/api.php?format=json&action=query&origin=*&list=search&srlimit=10&srsearch=${inputValue}`, {
      method: "GET"
    })
    //データ取得できたらこれ
    .then((value) => { 
        //wikipediaからのデータをJSON形式に変換
        return value.json();
    })
    //データ取得できなかったらこれ
    .catch(() => { 
        alert("アクセスできないです");
    });
    
    //非同期処理を実行
    const valueJson = await fetchValue;
    //必要な情報が入っている配列からデータ持ってくる
    const valueTargets = valueJson.query.search;
    
    

    //------表示する------//

    console.log(valueTargets, "検索結果？");

    //情報が配列の中をぐるぐるして表示
    $('#find-button').on('click', function(){
      const ttt = 1
      console.log(ttt, "結果");
      let h =`
      <div class="wiki-word">
          <p class="wiki-text">${valueTargets}</p>
      </div>
      `
      //htmlを埋め込み//append();というおまじない
      $("#result").append(h);
  // クリックイベント この下消さない
  });
    
      const wikiWord = document.createElement("div");
      wikiWord.classList.add("p-wiki-main");

      //a要素を作ってリンク先にページIDを設定する
      for (const elem of valueTargets) {
        const elemBlock = document.createElement("a");
        elemBlock.classList.add("p-wiki-block");
        elemBlock.setAttribute("target", "_blank");
        elemBlock.setAttribute("rel", "noopener noreferrer");
        const elemId = elem.pageid;//ページIDを代入
        elemBlock.setAttribute("href", `http://jp.wikipedia.org/?curid=${elemId}`);
        
        //div要素を作ってタイトルを設定する
        const elemSpan = document.createElement("div");
        elemSpan.classList.add("p-wiki");
        const elemTitle = elem.title;
        elemSpan.textContent = elemTitle;

        //作成した要素を順番に組み合わせていく
        wikiWord.appendChild(elemBlock);
        elemBlock.appendChild(elemSpan);
        //elemBlock.appendChild(elemSpan2);
        wikiBody.appendChild(wikiWord);

        //取得できる情報の中にはpageidがある。
        //このidを以下の${elemId}に設定すると、それぞれのページリンクを作れる
        //http://jp.wikipedia.org/?curid=${elemId}
      }
  };


  //----クリックイベント----//
  //クリックされるとwikiData関数が呼び出される
  
  const wikiData = () => {
    wikiBody.innerHTML = "";//余計な要素を消す
    const inputValue = wikiInput.value;//input要素に打ち込まれたテキストを変数inputValueに保存
    wikiFetch(inputValue);//wikiFetch関数の引数にinputValueをセット
  };

  wikiButton.addEventListener("click", wikiData, false);//クリックイベントを設定する

})();