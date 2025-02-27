import supertest from 'supertest';

describe('API GitHub', () => {
  const url = process.env.VUE_APP_API_URL;
  const request = supertest(url);

  it('Deve ser acessível por variável de ambiente', () => {
    expect(url).toEqual('https://api.github.com');
  });

  it('Deve responder com sucesso (200) ao ser acessado', async () => {
    const res = await request.get('/').set('User-agent', 'request');

    expect(res.statusCode).toEqual(200);
  });
});
