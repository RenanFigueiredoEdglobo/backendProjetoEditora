import app from '../src/app';
import request from 'supertest'

var AutorID = String;
var NoticiaID = String;

describe("Test crud de Noticia", () => {
    const Noticia = request(app);
    const Autor = request(app);
    it("🍓 Deve Execultar o método GET - listar todos as Noticias", async () => {
        const ConsultarNoticias = await Noticia.get("/noticias")
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
        expect(ConsultarNoticias.statusCode).toBe(200)
        console.log(ConsultarNoticias.body)
    })
    it("🍓 Deve Execultar o médoto POST e cadastrar um autor em seguida cadastrar uma noticia com o mesmo", async () => {
        const CastrarAutor = await Autor.post("/cadastrar-autor")
            .send({
                nome: "TEST_UNITARIO",
                idade: 22
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
        expect(CastrarAutor.statusCode).toBe(200)
        AutorID = CastrarAutor.body._id;
        const CadastrarNoticia = await Noticia.post("/cadastrar-noticia")
            .send({
                titulo: "Tituli_test_unitario",
                conteudo: "Conteudo TEste unitario",
                autor: CastrarAutor.body._id,
                data_publicacao: new Date().toJSON()
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
        expect(CadastrarNoticia.statusCode).toBe(200)
        console.log(CadastrarNoticia.body)
        NoticiaID = CadastrarNoticia.body._id
    })
    it("🍓 Deve Execultar o método GET e listar a Notícia Cadastrada", async () => {
        const ConsultarNoticias = await Noticia.get(`/noticia/${NoticiaID}`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
        expect(ConsultarNoticias.statusCode).toBe(200)
        console.log(ConsultarNoticias.body)
    })
    it("🍓 Deve Execultar o médoto PUT e Atualizar a Noticia Cadastrada", async () => {
        const AtualizarNoticia = await Noticia.put(`/atualizar-noticia/${NoticiaID}`)
            .send({
                titulo: "Tituli_test_unitario__PUT",
                conteudo: "Conteudo TEste unitario__PUT",
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
        expect(AtualizarNoticia.statusCode).toBe(200)
        console.log(AtualizarNoticia.body);
    })
    it("🍓 Deve Execultar o método DELETE e excluir a Noticia Cadastrada e o Autor de Teste", async () => {
        const DeletarNoticia = await Noticia.delete(`/excluir-noticia/${NoticiaID}`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
        expect(DeletarNoticia.statusCode).toBe(200)

        const DeletarAutor = await Autor.delete(`/excluir-autor/${AutorID}`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
        expect(DeletarAutor.statusCode).toBe(200)
        console.log(DeletarAutor.body)
        console.log(DeletarNoticia.body)
    })
})