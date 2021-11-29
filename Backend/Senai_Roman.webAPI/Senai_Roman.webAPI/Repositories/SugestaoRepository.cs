using Microsoft.EntityFrameworkCore;
using Senai_Roman.webAPI.Context;
using Senai_Roman.webAPI.Domains;
using Senai_Roman.webAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Senai_Roman.webAPI.Repositories
{
    class SugestaoRepository : ISugestaoRepository
    {
        RomanContext ctx = new();
        public void CadastrarSugestao(Sugestao novaSugestao, int IdUsuarioSugestao)
        {
            novaSugestao.IdUsuario = Convert.ToInt16(IdUsuarioSugestao);
            ctx.Sugestaos.Add(novaSugestao);
            ctx.SaveChanges();
        }

        public List<Sugestao> ListarSugestoes()
        {
            return ctx.Sugestaos
                //.Include(s => s.IdTemaNavigation)
                //.Include(s => s.IdUsuarioNavigation)
                .Select(s => new Sugestao() { TituloSugestao= s.TituloSugestao, Descricao= s.Descricao, IdSugestao = s.IdSugestao, IdTemaNavigation = new Tema { TituloTema = s.IdTemaNavigation.TituloTema }, IdUsuarioNavigation = new Usuario {Nome = s.IdUsuarioNavigation.Nome } })
                .ToList()
                ;
        }
    }
}
