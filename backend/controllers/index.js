const { sendMail } = require('../../mail.js');

const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
	apiKey: process.env.CHAT_API,
});
const openai = new OpenAIApi(configuration);

const postcontact = (req, res) => {
	const { subject, email, text } = req.body;

	sendMail(email, subject, text, function (err, data) {
		if (data) {
			res.status(200).send({ message: 'Message sent', status: 200 });
		} else {
			res.status(400).send({ message: 'Message failed', status: 400 });
		}
	});
};

const postrewrite = async (req, res) => {
	const searchTerm = req.body.searchTerm;
	const text = req.body.text;
	let prompt;

	switch (searchTerm) {
		case 'Summary':
			prompt = `Summarise the following text ${text} into short paragraphs. Include "\n" at the end of every new paragraph. Remove any punctuation or line breaks from the very begining of the response`;
			break;
		case 'Themes':
			prompt = `Write a numbered list of the themes from the following text ${text}. Give a brief description for each theme. Place a "\n" at the end of every list item. Remove any punctuation or line breaks from the very begining of the response`;
			break;
		case 'Cloud':
			prompt = `Please provide a string containing the most important words from the following text:\n${text}\n\nThis will be used for a word cloud.`;
			break;
		default:
			prompt = `Summarise the following text ${text} into short paragraphs. Include "\n" at the end of every new paragraph. Remove any punctuation or line breaks from the very begining of the response`;
	}
	const response = await openai.createCompletion({
		model: 'text-davinci-003',
		prompt: prompt,
		max_tokens: 2048,
		temperature: 0.2,
	});

	let newText;

	if (response) {
		newText = response.data.choices[0].text;
		res.json({ newText });
	} else {
		console.log('something went horribly wrong');
	}
};

module.exports = {
	postcontact,
	postrewrite,
};
