import app from '../src/app';
import request from 'supertest'

var AutorID = String;

describe("Teste crud de  Autor", () => {
    const Autor = request(app);
    it("🍓 Deve testar o método GET - Listar todos os Autores", async () => {
        const ConsultarTodosAutores = await Autor.get("/autores")
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
        expect(ConsultarTodosAutores.statusCode).toBe(200)
        console.log(ConsultarTodosAutores.body)
    })
    it("🍓 Deve Cadastrar um novo Autor", async () => {
        const CastrarAutor = await Autor.post("/cadastrar-autor")
            .send({
                nome: "TEST_UNITARIO",
                idade: 22
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
        expect(CastrarAutor.statusCode).toBe(200)
        AutorID = CastrarAutor.body._id;
    })
    it("🍓 Deve Execultar o método GET do Autor Cadastrado pelo ID", async () => {
        const ConsultarAutorId = await Autor.get(`/autor/${AutorID}`)
            .expect('Content-Type', /json/)
        expect(ConsultarAutorId.statusCode).toBe(200)
        console.log(ConsultarAutorId.body)
    })
    it("🍓 Deve Execultar o método PUT e Atualizar o Autor Cadastrado", async () => {
        const AtualizarAutor = await Autor.put(`/atualizar-autor/${AutorID}`)
            .send({
                nome: "TEST_UNITARIO__PUT",
                idade: 24
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
        expect(AtualizarAutor.statusCode).toBe(200)
        console.log(AtualizarAutor.body)
    })
    it("🍓 Deve Execultar o método DELETE e Execluir o Autor Cadastrado", async () => {
        const DeletarAutor = await Autor.delete(`/excluir-autor/${AutorID}`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
        expect(DeletarAutor.statusCode).toBe(200)
    })
})