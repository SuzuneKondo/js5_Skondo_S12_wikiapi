// alert(1111);
//https://yumegori.com/javascript-wikipedia-api



// (() => {
 
  //------準備------//
  const wikiInput = document.getElementById("find-text");
  const wikiButton = document.getElementById("find-button");
  const wikiBody = document.getElementById("result");
  

  //------データ取得から表示の一連の流れ------//

  //asyncは非同期関数、awaitで情報を持ってきた 
  const wiki = async function callApi(){
    const res = await fetch("https://ja.wikipedia.org/w/api.php?format=json&action=query&origin=*&list=search&srlimit=6&srsearch=${inputValue}");
    
    //Jsonで情報を使いやすい形にする
    //データ取得できたらこれ
    const users = await res.json();
    console.log(users);
    
    const wiki = async (inputValue) => {
      //Wikiからデータを取得する
      const fetchValue = fetch(`https://ja.wikipedia.org/w/api.php?format=json&action=query&origin=*&list=search&srlimit=6&srsearch=${inputValue}`, {
      method: "GET"
    });
    }
  }
  
  callApi();
//   //asyncで非同期処理だと宣言する
//   const w = async (inputValue) => {

//     //Wikiからデータを取得する
//     const fetchValue = fetch(`https://ja.wikipedia.org/w/api.php?format=json&action=query&origin=*&list=search&srlimit=6&srsearch=${inputValue}`, {
//       method: "GET"
//     })
//       
    
//     //非同期処理を実行
//     const valueJson = await fetchValue;
//     //必要な情報が入っている配列を取得
//     const valueTargets = valueJson.query.search;


//     //情報の表示に関して指示する
//     if (!valueTargets.length) {
//       //情報がなかった（空だった）とき
//       const wikiNull = document.createElement("p");
//       wikiNull.classList.add("p-wikipedia__null");
//       wikiNull.textContent = "検索したワードはヒットしませんでした。";
//       wikiBody.appendChild(wikiNull);

//     } else {
//       //情報があったとき・・配列の中をループして表示
//       const elemWrap = document.createElement("div");
//       elemWrap.classList.add("p-wikipedia__main");

//       //a要素を作ってリンク先にページIDを設定する
//       for (const elem of valueTargets) {
//         const elemBlock = document.createElement("a");
//         elemBlock.classList.add("p-wikipedia__block");
//         elemBlock.setAttribute("target", "_blank");
//         elemBlock.setAttribute("rel", "noopener noreferrer");
//         const elemId = elem.pageid;//ページIDを代入
//         elemBlock.setAttribute("href", `http://jp.wikipedia.org/?curid=${elemId}`);
        
//         //span要素を作ってタイトルを設定する
//         const elemSpan = document.createElement("span");
//         elemSpan.classList.add("p-wikipedia__block-ttl");
//         const elemTitle = elem.title;
//         elemSpan.textContent = elemTitle;

//         // //span要素を作って更新日を設定する
//         // const elemSpan2 = document.createElement("span");
//         // elemSpan2.classList.add("p-wikipedia__block-date");
//         // const elemDate = elem.timestamp;
//         // const elemDateSlice = elemDate.slice(0, 10).replace(/-/g, ".");
//         // elemSpan2.textContent = "最終更新日：" + elemDateSlice;

//         //作成した要素を順番に組み合わせていく
//         elemWrap.appendChild(elemBlock);
//         elemBlock.appendChild(elemSpan);
//         //elemBlock.appendChild(elemSpan2);
//         wikiBody.appendChild(elemWrap);

//         //取得できる情報の中にはpageidがある。
//         //このidを以下の${elemId}に設定すると、それぞれのページリンクを作れる
//         //http://jp.wikipedia.org/?curid=${elemId}
//       }
//     }
//   };


//   //----クリックイベント----//
//   //クリックされるとwikiData関数が呼び出される
  
//   const wikiData = () => {
//     wikiBody.innerHTML = "";//余計な要素を消す
//     const inputValue = wikiInput.value;//input要素に打ち込まれたテキストを変数inputValueに保存
//     wikiFetch(inputValue);//wikiFetch関数の引数にinputValueをセット
//   };

//   wikiButton.addEventListener("click", wikiData, false);//クリックイベントを設定する
// })();
