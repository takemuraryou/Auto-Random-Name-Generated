let obj = "";
let len = 3;

const chara = ['ア','イ','ウ','エ','オ','カ','キ','ク','ケ','コ','サ','シ','ス','セ','ソ','タ','チ','ツ',
                'テ','ト','ナ','二','ヌ','ネ','ノ','ハ','ヒ','フ','ヘ','ホ','マ','ミ','ム','メ',
                'モ','ヤ','ユ','ヨ','ラ','リ','ル','レ','ロ','ワ','ヲ','ン']
let charaLen = chara.length;


$(function(){
    // 変数の初期化
    let num = 0;
    // 配列のインデックス数からランダムな数値生成
    
    $('#start').on('click', function(){

        if(num > 5){
        $('li').remove();
        }
        // 5回生成する
        for(let r = 0; r<= 5; r++){
        //numを1つ増やす
            num++;
        for (let i = 0; i< len; i++) {
            obj += chara[Math.floor(Math.random()*charaLen)];
        }

        $('ul').append('<li>' + obj + '</li>');
        // 5回生成したら、それ以上増えないようにする
        obj = "";

        }
    });

    // id属性がdeleteの要素がクリックされたら要素を削除
    $('#delete').on('click', function(){
        //numを1つ減らす
        num--;
        $('li:last').remove();

        //要素が無くなったら変数を0にする
        if(num<0){
            num = 0;
        }
    });

    $('#allDel').on('click', function(){
        $('li').remove();
    })
});