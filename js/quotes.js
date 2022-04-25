const quotes = [
	{
		quote: "그 사이에 많은 고통과 상처들을 이겨내고 날 갖춰.<br />부러질 바엔 휘고 말자는 나의 관념을 살려.",
		from: "길, bts",
	},
	{
		quote: "실패나 좌절, 맛보고 고개 숙여도 돼.<br />우리는 아직 젊고 어려, 걱정 붙들어 매.",
		from: "INTRO: Never Mind, bts",
	},
	{
		quote: "이 순간은 언제든 다시 찾아오지 않아.<br />다시 나에게 되물어 봐, 지금 행복한가.",
		from: "INTRO: 화양연화, bts",
	},
	{
		quote: "그래도 믿고 있어.<br />믿기지 않지만 길을 잃는단 건, 그 길을 찾는 방법.",
		from: "Lost, bts",
	},
	{
		quote: "쓸모있어, 이 좌절도.<br />난 믿어, 우린 바로 가고 있어.",
		from: "Lost, bts",
	},
	{
		quote: "어두운 밤이 지나면 밝은 아침도 있듯이, 알아서.<br />내일이 오면 밝은 빛이 비추니, 걱정은 하지 말아줘.",
		from: "Tomorrow, bts",
	},
	{
		quote: "이 까만 어둠 속에서 너는 이렇게 빛나니까.",
		from: "Save Me, bts",
	},
	{
		quote: "세상의 기대치와 너무 비대칭 할까봐 두려웠어.<br />나를 믿어줬던 모든 사람들을 배신하게 될까봐.",
		from: "Born Singer, bts",
	},
	{
		quote: "삶은 살아지는 게 아니라 살아내는 것.<br />그렇게 살아내다가 언젠가 사라지는 것.",
		from: "Tomorrow, bts",
	},
	{
		quote: "성공한 이유가 뭐냐고 물어보면 딱히 답을 할 게 없어.<br />그동안 적어도 너네보단 덜 자고 더 움직이며 컸어.",
		from: "Give it to me, Agust D",
	},
	{
		quote: "난 내가 하기 싫은 일로 성공하긴 싫어.<br />난 날 밀어.",
		from: "OUTRO: Wings, bts",
	},
	{
		quote: "난 널 믿어. 지금은 미약할지언정 끝은 창대한 비약일 걸.",
		from: "OUTRO: Wings, bts",
	},
	{
		quote: "너의 길을 가라고. 단 하루를 살아도, 뭐라도 하라고.<br />나약함은 담아 둬.",
		from: "No more dream, bts",
	},
	{
		quote: "꿈이 뭐 거창한 거라고, 그냥 아무나 되라고.<br />We deserve a life. 뭐가 크건 작건, 그냥 너는 너잖어.",
		from: "낙원, bts",
	},
	{
		quote: "고민들의 9할은 니가 만들어 낸 상상의 늪. 고민보다 Go.",
		from: "So what, bts",
	},
	{
		quote: "멈춰서도 괜찮아, 아무 이유도 모르는 채 달릴 필요 없어.<br />꿈이 없어도 괜찮아, 잠시 행복을 느낄 네 순간들이 있다면.",
		from: "낙원, bts",
	},
	{
		quote: "해가 뜨기 전 새벽이 가장 어두우니까. 먼 훗날의 넌 지금의 널 절대로 잊지마.<br />지금 니가 어디 서 있든 잠시 쉬어가는 것일 뿐, 포기하지마, 알잖아.",
		from: "Tomorrow, bts",
	},
	{
		quote: "내 미래를 향해 가.<br />저 푸른 바다와 내 헤르츠를 믿어.",
		from: "Whalien52, bts",
	},
	{
		quote: "이제 알겠어, 후회하며 늙어가는 건 break up.<br />나는 택했어, 조건 없는 믿음을 가지겠어.",
		from: "OUTRO: Wings, bts",
	},
	{
		quote: "괜찮아. 자, 하나 둘 셋 하면 잊어.<br />슬픈 기억 모두 지워. 서로 손을 잡고 웃어.",
		from: "둘!셋!, bts",
	},
	{
		quote: "니 멋대로 살어, 어차피 니거야.<br />애쓰지 좀 말어, 져도 괜찮아.",
		from: "불타오르네, bts",
	},
	{
		quote: "말해, 너는 강하다고.<br />말해, 넌 충분하다고.",
		from: "21세기 소녀, bts",
	},
];

const quote = document.querySelector("#quote span:first-child");
const from = document.querySelector("#quote span:last-child");

function getRandomNumber(min = 0, max = quotes.length) {
	return Math.floor(Math.random() * (max - min) + min);
}

const pickedQuoteNum = getRandomNumber();

function changeQuote(picked) {
	quote.innerHTML = quotes[picked].quote;
	from.innerText = quotes[picked].from;
}

changeQuote(pickedQuoteNum);
