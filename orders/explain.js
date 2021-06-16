"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var func = function (client, msg) {
    var info_text = '★忙しすぎるあなたに代わって教室を作成します。\n\n' +
        '** ● 募集を立てたいとき ● **\n' +
        '> サーバー内のいずれかのテキストチャンネル内で`!募集 教室名`と発言してください。\n' +
        '> 「学園掲示板A」カテゴリ内に新規の教室が作成されます。\n' +
        '> 例）`!募集　1224 伝説の入り口（ARA2E）`\n\n' +
        '** ● 教室を立てたいとき ● **\n' +
        '> `!教室　教室名`と発言してください。\n' +
        '> 「教室棟」「教室棟VC」カテゴリにそれぞれ教室が作成されます。\n' +
        '> 例）`!教室 蛮族を駆逐せよ（SW2.5）`\n\n' +
        '** ● キャンペーン用の教室を立てたいとき ● **\n' +
        '> `!キャンペーン　教室名`と発言してください。\n' +
        '> 「CP用教室棟」「CP用教室棟VC」カテゴリにそれぞれ新規の教室が作成されます。\n' +
        '> 例）`!キャンペーン カムイ伝（シノビガミ）`\n\n' +
        '** ● 教室名を変更したいとき ● **\n' +
        '> 作成された教室(テキスト)内で、教室作成を行ったユーザーが`!変更 新しい教室名`と発言してください。\n' +
        '> 例）`!変更 〆1224伝説の入り口`\n\n' +
        '** ● 教室の削除を行いたいとき ● **\n' +
        '> 作成された教室(テキスト)内で、教室作成を行ったユーザーが`!削除`と発言してください。\n\n' +
        '** ● 作成した教室に他のユーザーを誘いたいとき ● **\n' +
        '> `!案内`と発言してください。\n\n' +
        'あなたの作成した教室の一覧を提示します。誘いたい教室の番号でリアクションしてください。教室が一つしか存在しない場合、このステップは省略されます。\n' +
        '続いて表示されるメッセージに従ってください。\n\n' +
        '※一つの教室に対する各種操作は、一定時間内に実行可能な回数に制限があります。連続で命令を行うと、最大10分後に反映されたりすることがありますのでご注意ください。\n' +
        '※教室の名前については、学園のルールに準拠するようにしてください。';
    msg.channel.send(info_text);
};
exports.default = func;
