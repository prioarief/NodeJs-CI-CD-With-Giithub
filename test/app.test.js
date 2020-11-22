const app = require('../app'); // Link to your server file
const supertest = require('supertest');
const request = supertest(app);

it('Call the / endpoint', async (done) => {
	const res = await request.get('/');
	expect(res.status).toBe(200);
	expect(res.text).toBe('Hello World With CI/CD');
	done();
});

it('Call the /hai endpoint', async (done) => {
	const res = await request.get('/hai');
	expect(res.status).toBe(200);
	expect(res.text).toBe('Hai lagi from ci/cd');
	done();
});
