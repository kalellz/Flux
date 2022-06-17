import "../../fonts/Inter/Inter-Black.ttf";
import "../../fonts/Inter/Inter-Bold.ttf";
import "../../fonts/Inter/Inter-ExtraBold.ttf";
import "../../fonts/Inter/Inter-ExtraLight.ttf";
import "../../fonts/Inter/Inter-Light.ttf";
import "../../fonts/Inter/Inter-Medium.ttf";
import "../../fonts/Inter/Inter-Regular.ttf";
import "../../fonts/Inter/Inter-SemiBold.ttf";
import "../../fonts/Inter/Inter-Thin.ttf";
import "./style.scss";
import Header from "../common/Header/header";
import veja from "../../images/veja";
import Card from "../common/Card/card";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { listarTodosProdutos, listarPorNome, listarCategoria } from "../../api/produtoApi.js";

export default function Index() {
	const Navigate = useNavigate();
	const [produtos, setProdutos] = useState([]);
	const [filtro, setFiltro] = useState("");
	const [categoria, setCategoria] = useState("0");

	async function carregarTodosProdutos() {
		const resp = await listarTodosProdutos();
		setProdutos(resp);
	}
	async function Filtrar() {
		const resp = await listarPorNome(filtro, categoria);
		setProdutos(resp);
	}

	function abrirDetalhes(id) {
		Navigate(`/InfoAnuncio/${id}`);
	}

	useEffect(() => {
		Filtrar();
	}, [categoria, filtro]);

	useEffect(() => {
		carregarTodosProdutos();
	}, []);

	return (
		<div>
			<Header selecionado="feed" />
			<div className="feed-content">
				<div className="nav-btn">
					<div className="row">
						<div class="group">
							<svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
								<g>
									<path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
								</g>
							</svg>
							<input placeholder="Estou procurando por..." type="search" class="input" Value={filtro} onChange={(e) => setFiltro(e.target.value)}></input>
						</div>
						<div className="text">
							<select className="categorias" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
								<option value="0">Categorias</option>
								<option value="1">Tecnologia</option>
								<option value="2">Casa móveis</option>
								<option value="3">Brinquedos</option>
								<option value="4">Roupas</option>
								<option value="5">Saúde</option>
							</select>
						</div>
					</div>
				</div>
				<div className="sec-cards">
					{produtos.map((item) => (
						<div class="card" onClick={() => abrirDetalhes(item.id)}>
							<div class="card-img">
								<img src={`http://localhost:5000/${item.imagem}`} class="product-img" />
							</div>
							<div class="card-info">
								<p class="text-title">{item.nome.substr(0, 18)}</p>
								<p class="text-body">{item.descricao.substr(0, 21)}</p>
							</div>
							<div class="card-footer">
								<span class="text-title">R${item.preco}</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
