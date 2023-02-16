// 問題と答えの配列
const questions = [
	{
		question: "日本の首都は？",
		choices: ["東京", "京都", "大阪", "北海道"],
		answer: 0
	},
	{
		question: "1 + 1 = ?",
		choices: ["1", "2", "3", "4"],
		answer: 1
	},
	{
		question: "「こんにちは」と言うときに使われる漢字は？",
		choices: ["今日は", "毎日", "元気", "意地悪"],
		answer: 0
	}
];

let currentQuestion = 0; // 現在の問題番号
let score = 0; // 正解数

// 問題と選択肢を表示する関数
function showQuestion() {
	const question = questions[currentQuestion];
	document.getElementById("question").textContent = question.question;
	for (let i = 0; i < question.choices.length; i++) {
		document.getElementById("choice" + i).textContent = question.choices[i];
	}
}

// 選択肢がクリックされたときに呼び出される関数
function checkAnswer(choice) {
	const question = questions[currentQuestion];
	if (choice === question.answer) {
		score++;
		document.getElementById("result").textContent = "正解！";
	} else {
		document.getElementById("result").textContent = "不正解…";
	}
	// 次の問題に進む
	currentQuestion++;
	if (currentQuestion < questions.length) {
		showQuestion();
