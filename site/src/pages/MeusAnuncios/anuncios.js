import "../../fonts/Inter/Inter-Black.ttf";
import "../../fonts/Inter/Inter-Bold.ttf";
import "../../fonts/Inter/Inter-ExtraBold.ttf";
import "../../fonts/Inter/Inter-ExtraLight.ttf";
import "../../fonts/Inter/Inter-Light.ttf";
import "../../fonts/Inter/Inter-Medium.ttf";
import "../../fonts/Inter/Inter-Regular.ttf";
import "../../fonts/Inter/Inter-SemiBold.ttf";
import "../../fonts/Inter/Inter-Thin.ttf";
import "./anuncios.scss";
import trash from "../../images/delete.png";
import Header from "../common/Header/header";
import pencil from "../../images/Pencil.png";
import storage from "local-storage";
import { Link, useNavigate } from "react-router-dom";
import { listarMeusProdutos, listarPorNome, removerProduto } from "../../api/produtoApi.js";
import { useState, useEffect } from "react";
import { confirmAlert } from "react-confirm-alert";
import { toast } from "react-toastify";

export default function Index() {
	const idUsuario = storage("usuario-logado").id;
	const [produtos, setProdutos] = useState([]);
	const [filtro, setFiltro] = useState();
	const [categoria, setCategoria] = useState("0");
	const navigate = useNavigate();

	async function deletarProduto(id, nome) {
		confirmAlert({
			title: "Remover produto",
			message: `Deseja remover o produto ${nome}`,
			buttons: [
				{
					label: "Sim",
					onClick: async () => {
						const resposta = await removerProduto(id, nome);
						listarProdutos();
						toast.success("🔥 Produto " + nome + " removido!");
					},
				},

				{
					label: "Não",
				},
			],
		});
	}
	async function listarProdutos() {
		const resposta = await listarMeusProdutos(idUsuario);
		setProdutos(resposta);
	}
	async function Filtrar() {
		const resp = await listarPorNome(filtro, categoria);
		setProdutos(resp);
	}
	useEffect(() => {
		Filtrar();
	}, [categoria, filtro]);

	useEffect(() => {
		listarProdutos();
	}, []);

	function editarProduto(id) {
		navigate(`/alterar/${id}`);
	}
	return (
		<div className="body">
			<Header selecionado="meusanuncios" />
			<div className="main-content">
				<div className="nav-btn">
					<div className="row">
						<div class="group">
							<svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
								<g>
									<path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
								</g>
							</svg>
							<input placeholder="Busque por seus anúncios" type="search" class="input" Value={filtro} onChange={(e) => setFiltro(e.target.value)} />
						</div>

						<div className="botao-meusanuncios">
							<Link className="botao-anunciar" to="/Anunciar">
								ANUNCIAR
							</Link>
						</div>
					</div>
				</div>
				{produtos.map((item) => (
					<div className="anun-div-cards">
						<div className="anun-card-meusanuncios">
							<div className="anun-card-img-meusanuncios">
								<img src={`http://localhost:5000/${item.imagem}`} className="imagemsitee-meusanuncios" alt="" />
							</div>
							<div className="anun-card-desc-meusanuncios">
								<p>{item.nome.substr(0, 30)}</p>
								<p className="cinza">{item.descricao.substr(0, 30)}</p>
							</div>
							<div className="anun-card-info-meusanuncios">
								<p>R${item.preco}</p>
								<p>{item.id}</p>
							</div>
							<div className="anun-card-icons-meusanuncios">
								<img src={pencil} onClick={() => editarProduto(item.id)} className="anun-card-img-icon" /> &nbsp;&nbsp;&nbsp;&nbsp;
								<img src={trash} onClick={() => deletarProduto(item.id, item.nome)} className="anun-card-img-icon"/>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
