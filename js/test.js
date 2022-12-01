$('#find-button1').on('click', function(){
    const ttt = 1
    console.log(ttt, "結果");
    // alert(実行);
    let h =`
    <div class="wiki-word">
        <p class="wiki-text">${valueTargets.title}</p>
    </div>
    `
    //htmlを埋め込み//append();というおまじない
    $("#result").append(h);
// クリックイベント この下消さない
});