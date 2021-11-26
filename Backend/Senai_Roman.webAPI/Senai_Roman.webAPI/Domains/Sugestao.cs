using System;
using System.Collections.Generic;

#nullable disable

namespace Senai_Roman.webAPI.Domains
{
    public partial class Sugestao
    {
        public short IdSugestao { get; set; }
        public short? IdUsuario { get; set; }
        public short? IdTema { get; set; }
        public string TituloSugestao { get; set; }
        public string Descricao { get; set; }

        public virtual Tema IdTemaNavigation { get; set; }
        public virtual Usuario IdUsuarioNavigation { get; set; }
    }
}
